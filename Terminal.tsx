import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  onPowerOn: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onPowerOn }) => {
  const [text, setText] = useState('');
  const [isPowered, setIsPowered] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showStatic, setShowStatic] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const fullText = `
> BOOTING SYSTEM..........
> LOADING PORTFOLIO v3.0
> WELCOME TO ^VISHVA TEJA'S^ TERMINAL
> Computer Science and Engineering (Data Science) 
> Vardhaman College of Engineering (2023-2027)
> PRESS THE POWER BUTTON TO ENTER...`;

  // Typewriter effect
  useEffect(() => {
    if (isPowered) {
      let currentChar = 0;
      const interval = setInterval(() => {
        if (currentChar < fullText.length) {
          setText(fullText.slice(0, currentChar + 1) + (currentChar % 2 === 0 ? '|' : ''));
          currentChar++;
          
          // Random glitch chance
          if (Math.random() < 0.03) {
            triggerGlitch();
          }
        } else {
          clearInterval(interval);
        }
      }, 25); // Reduced from 40 to 25 for faster typing speed

      return () => clearInterval(interval);
    }
  }, [isPowered]);

  const handlePowerOn = () => {
    setShowStatic(true);
    setTimeout(() => {
      setShowStatic(false);
      setIsPowered(true);
      setTimeout(() => {
        onPowerOn();
      }, fullText.length * 25 + 800); // Adjusted timing for faster entry
    }, 500); // Reduced static effect delay from 800 to 500
  };

  const triggerGlitch = () => {
    if (isGlitching) return;
    
    setIsGlitching(true);
    if (terminalRef.current) {
      terminalRef.current.classList.add('glitch-effect');
    }
    
    setTimeout(() => {
      setIsGlitching(false);
      if (terminalRef.current) {
        terminalRef.current.classList.remove('glitch-effect');
      }
    }, 500);
  };

  // Random glitches
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (isPowered && Math.random() < 0.1) {
        triggerGlitch();
      }
    }, 10000);
    
    return () => clearInterval(glitchInterval);
  }, [isPowered]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6 relative overflow-hidden crt-bg">
      <div className="absolute inset-0 crt-curvature pointer-events-none"></div>
      <div className="absolute inset-0 crt-scanlines pointer-events-none"></div>
      <div className="w-full max-w-3xl relative">
        <div className="absolute -inset-4 rounded-lg bg-[#66FCF1] blur-xl opacity-0 animate-pulse"></div>
        <div className="crt-frame p-1 rounded-lg">
          <div 
            ref={terminalRef}
            className={`relative rounded-md overflow-hidden crt-screen ${isGlitching ? 'glitch-active' : ''}`}
            onClick={triggerGlitch}
          >
            <AnimatePresence>
              {showStatic && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 crt-static"
                />
              )}
            </AnimatePresence>
            <div className="p-6 h-full flex flex-col">
              <pre className="font-mono text-[#66FCF1] text-lg whitespace-pre-wrap leading-relaxed terminal-text">
                {isPowered ? text : '> SYSTEM STANDBY...'}
              </pre>
              <div className="mt-auto">
                <motion.button
                  className="typewriter-button"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 10px #66FCF1"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePowerOn}
                  disabled={isPowered}
                >
                  <div className="typewriter-button-inner">
                    <Power className="w-5 h-5" />
                    <span>{isPowered ? 'INITIALIZING...' : 'POWER ON'}</span>
                    <div className="typewriter-strike"></div>
                  </div>
                </motion.button>
              </div>
            </div>
            <div className="absolute inset-0 crt-reflection pointer-events-none"></div>
          </div>
        </div>
        <div className="mx-auto w-32 h-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-b-lg"></div>
        <div className="mx-auto w-16 h-4 bg-[#0d0d0d] rounded-b-lg"></div>
      </div>
      <div className="absolute inset-0 crt-particles pointer-events-none"></div>
    </div>
  );
};
