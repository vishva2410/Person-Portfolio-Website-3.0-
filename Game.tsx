import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { Pause, Play, RotateCcw } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

export const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [gameStarted, setGameStarted] = useState(false);
  const { highScore, setHighScore, gameSpeed, isPaused, togglePause } = useGameStore();

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
      togglePause();
      return;
    }

    if (isPaused) return;

    switch (e.key) {
      case 'ArrowUp': if (direction !== 'DOWN') setDirection('UP'); break;
      case 'ArrowDown': if (direction !== 'UP') setDirection('DOWN'); break;
      case 'ArrowLeft': if (direction !== 'RIGHT') setDirection('LEFT'); break;
      case 'ArrowRight': if (direction !== 'LEFT') setDirection('RIGHT'); break;
    }
  };

  const generateFood = (snake: Position[]): Position => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 15, y: 15 };

    const gridSize = 20;
    const tileCount = canvas.width / gridSize;
    let newFood: Position;

    do {
      newFood = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));

    return newFood;
  };

  useEffect(() => {
    if (!gameStarted || gameOver || !canvasRef.current || isPaused) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridSize = 20;
    const tileCount = canvas.width / gridSize;

    const drawGame = () => {
      // Background
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = '#66FCF122';
      for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
      }

      // Food
      ctx.fillStyle = '#66FCF1';
      ctx.shadowColor = '#66FCF1';
      ctx.shadowBlur = 10;
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);

      // Snake
      ctx.shadowBlur = 15;
      snake.forEach((segment, index) => {
        const gradient = ctx.createLinearGradient(
          segment.x * gridSize,
          segment.y * gridSize,
          (segment.x + 1) * gridSize,
          (segment.y + 1) * gridSize
        );
        gradient.addColorStop(0, '#66FCF1');
        gradient.addColorStop(1, '#45A7C5');
        ctx.fillStyle = gradient;
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
      });

      // Score
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#66FCF1';
      ctx.font = '20px monospace';
      ctx.fillText(`Score: ${score}`, 10, 30);
      ctx.fillText(`High Score: ${highScore}`, canvas.width - 150, 30);
    };

    const moveSnake = () => {
      if (gameOver) return;

      const head = { ...snake[0] };
      
      switch (direction) {
        case 'UP': head.y--; break;
        case 'DOWN': head.y++; break;
        case 'LEFT': head.x--; break;
        case 'RIGHT': head.x++; break;
      }

      if (
        head.x < 0 || 
        head.x >= tileCount || 
        head.y < 0 || 
        head.y >= tileCount ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        return;
      }

      const newSnake = [head, ...snake];

      if (head.x === food.x && head.y === food.y) {
        const newScore = score + 1;
        setScore(newScore);
        setHighScore(newScore);
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameLoop = setInterval(() => {
      moveSnake();
      drawGame();
    }, gameSpeed);

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [snake, food, direction, gameOver, score, gameStarted, gameSpeed, isPaused]);

  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood([{ x: 10, y: 10 }]));
    setDirection('RIGHT');
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="w-full max-w-[300px] border-2 border-[#66FCF1] rounded-lg"
        />
        {!gameStarted && !gameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/80"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={restartGame}
              className="px-6 py-3 bg-[#66FCF1]/20 border-2 border-[#66FCF1] rounded-lg text-[#66FCF1] hover:bg-[#66FCF1]/30 transition-all duration-300"
            >
              Start Game
            </motion.button>
          </motion.div>
        )}
        {gameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 gap-4"
          >
            <p className="text-xl text-[#66FCF1]">Game Over!</p>
            <p className="text-[#66FCF1]">Score: {score}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={restartGame}
              className="px-6 py-3 bg-[#66FCF1]/20 border-2 border-[#66FCF1] rounded-lg text-[#66FCF1] hover:bg-[#66FCF1]/30 transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
        {gameStarted && !gameOver && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePause}
            className="absolute top-2 right-2 p-2 bg-[#66FCF1]/20 border-2 border-[#66FCF1] rounded-lg text-[#66FCF1] hover:bg-[#66FCF1]/30 transition-all duration-300"
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </motion.button>
        )}
      </div>
      <p className="text-[#66FCF1] text-sm">
        Use arrow keys to control the snake
        {gameStarted && !gameOver && " • Space to pause"}
      </p>
    </div>
  );
};