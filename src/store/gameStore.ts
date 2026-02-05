import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  highScore: number;
  gameSpeed: number;
  isPaused: boolean;
  setHighScore: (score: number) => void;
  setGameSpeed: (speed: number) => void;
  togglePause: () => void;
  setPaused: (paused: boolean) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      highScore: 0,
      gameSpeed: 150,
      isPaused: false,
      setHighScore: (score) => set((state) => ({ 
        highScore: Math.max(score, state.highScore) 
      })),
      setGameSpeed: (speed) => set({ gameSpeed: speed }),
      togglePause: () => set((state) => ({ isPaused: !state.isPaused })),
      setPaused: (paused) => set({ isPaused: paused }),
    }),
    {
      name: 'game-storage',
    }
  )
);
