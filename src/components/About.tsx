import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, GraduationCap, BookOpen, User, Terminal } from 'lucide-react';
import { Game } from './Game';

const GlitchText = ({ children }: { children: string }) => {
  const floatRef = useRef<number>();
  const glitchRef = useRef<number>();
  const [floatY, setFloatY] = useState(0);
  const [glitchX, setGlitchX] = useState(0);
  const [glitchY, setGlitchY] = useState(0);
  const [glitchOpacity, setGlitchOpacity] = useState(0);

  // Floating motion (hover up and down)
  useEffect(() => {
    let startTime: number;
    const amplitude = 10;
    const speed = 0.001;

    const animateFloat = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const y = Math.sin(elapsed * speed) * amplitude;
      setFloatY(y);
      floatRef.current = requestAnimationFrame(animateFloat);
    };

    floatRef.current = requestAnimationFrame(animateFloat);
    return () => cancelAnimationFrame(floatRef.current!);
  }, []);

  // Glitch effect (stronger horizontal RGB split)
  useEffect(() => {
    const animateGlitch = () => {
      setGlitchX((Math.random() - 0.5) * 30); // Strong left-right flicker
      setGlitchY((Math.random() - 0.5) * 6);  // Slight vertical
      setGlitchOpacity(Math.random() * 0.8); // Stronger ghosting
      glitchRef.current = requestAnimationFrame(animateGlitch);
    };

    glitchRef.current = requestAnimationFrame(animateGlitch);
    return () => cancelAnimationFrame(glitchRef.current!);
  }, []);

  const normalized = (floatY + 10) / 20;
  const opacity = 0.6 + normalized * 0.4;

  return (
    <motion.div
      className="relative inline-block font-mono text-4xl md:text-5xl font-bold text-[#66FCF1]"
      style={{ y: floatY, opacity }}
    >
      {/* Main text - also jitters slightly */}
      <motion.span
        animate={{
          x: [0, glitchX * 0.2, 0],
          filter: `blur(${glitchOpacity * 1.5}px)`,
        }}
        transition={{ duration: 0.12, repeat: Infinity }}
        className="relative z-20"
      >
        {children}
      </motion.span>

      {/* Glitch Layer - Red */}
      <span
        className="absolute top-0 left-0 z-10 text-red-500 pointer-events-none"
        style={{
          transform: `translate(${glitchX}px, ${glitchY}px)`,
          opacity: glitchOpacity,
          clipPath: `inset(${Math.random() * 60}% 0% ${Math.random() * 60}% 0%)`,
        }}
      >
        {children}
      </span>

      {/* Glitch Layer - Blue */}
      <span
        className="absolute top-0 left-0 z-10 text-blue-500 pointer-events-none"
        style={{
          transform: `translate(${-glitchX}px, ${-glitchY}px)`,
          opacity: glitchOpacity * 0.9,
          clipPath: `inset(${Math.random() * 55}% 0% ${Math.random() * 55}% 0%)`,
        }}
      >
        {children}
      </span>
    </motion.div>
  );
};

// Education Data
const educationData = [
  {
    year: "2023-Present",
    institution: "Vardhaman College of Engineering",
    degree: "B.Tech Computer Engineering (Data Science)",
    grade: "CGPA: 9.4",
    icon: <Cpu className="w-5 h-5 text-[#66FCF1]" />,
  },
  {
    year: "2023",
    institution: "FIITJEE, Saifabad",
    degree: "XII (State Board of Telangana)",
    grade: "92.5%",
    icon: <GraduationCap className="w-5 h-5 text-[#66FCF1]" />,
  },
  {
    year: "2021",
    institution: "Pallavi Model School",
    degree: "X (CBSE)",
    grade: "89.5%",
    icon: <BookOpen className="w-5 h-5 text-[#66FCF1]" />,
  }
];

export const About = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [isGameUnlocked, setIsGameUnlocked] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  
  const handlePasswordSubmit = () => {
    if (password.toLowerCase() === 'vishva') {
      setIsGameUnlocked(true);
      setShowPasswordModal(false);
    } else {
      setPassword('');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTerminal(Math.random() > 0.9);
      setTimeout(() => setShowTerminal(false), 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced CRT Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#66FCF1]/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#66FCF1]/30"></div>
        <div className="absolute inset-0 crt-scanlines"></div>
      </div>

      {/* Visible Math Graph Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px opacity-15">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="bg-[#66FCF1] rounded-sm"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                transition: {
                  duration: 4 + Math.random() * 8,
                  repeat: Infinity,
                  delay: Math.random() * 4
                }
              }}
            />
          ))}
        </div>

        {/* Animated Sine Waves */}
        {[1, 2, 3].map((wave) => (
          <motion.svg
            key={`wave-${wave}`}
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d={`M 0,50 C 20,${50 + 15 * Math.sin(wave * 0.5)}, 40,${50 - 15 * Math.cos(wave * 0.5)}, 60,${50 + 15 * Math.sin(wave * 0.5)}, 80,${50 - 15 * Math.cos(wave * 0.5)}, 100,50`}
              fill="none"
              stroke={`rgba(102, 252, 241, ${0.4 / wave})`}
              strokeWidth="0.8"
              strokeDasharray="3 3"
              initial={{ pathOffset: 0 }}
              animate={{ pathOffset: [0, 10] }}
              transition={{
                duration: 12 * wave,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.svg>
        ))}

        {/* Floating Math Elements */}
        {Array.from({ length: 20 }).map((_, i) => {
          const symbols = ['∫', '∑', '∏', '∂', '∇', '√', '∞'];
          return (
            <motion.div
              key={`math-${i}`}
              className="absolute text-[#66FCF1]/30 text-lg font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: `+=${50 + Math.random() * 100}`,
                opacity: [0.1, 0.3, 0.1],
                transition: {
                  duration: 15 + Math.random() * 20,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }
              }}
            >
              {symbols[Math.floor(Math.random() * symbols.length)]}
            </motion.div>
          );
        })}
      </div>

      {/* Hidden Terminal Icon */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed cursor-pointer z-50"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
            onClick={() => setShowPasswordModal(true)}
          >
            <Terminal className="w-6 h-6 text-[#66FCF1] animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border-2 border-[#66FCF1] p-6 rounded-lg w-full max-w-md"
            >
              <h3 className="text-[#66FCF1] text-xl mb-4">Enter Password</h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border-2 border-[#66FCF1] p-2 rounded text-[#66FCF1] mb-4"
                placeholder="Password"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 text-[#66FCF1] hover:bg-[#66FCF1]/20 rounded transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePasswordSubmit}
                  className="px-4 py-2 bg-[#66FCF1] text-black rounded hover:bg-[#66FCF1]/80 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10">
        <header className="p-4 md:p-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#66FCF1] mb-2 leading-tight"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.6, 0.01, -0.05, 0.95]
              }}
            >
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <GlitchText>GUDUGUNTLA</GlitchText>
              </motion.div>
              {' '}
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <GlitchText>VISHVA</GlitchText>
              </motion.div>
              {' '}
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <GlitchText>TEJA</GlitchText>
              </motion.div>
            </motion.h1>
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl text-[#66FCF1] mt-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 1,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100
                }
              }}
            >
              SYSTEM PORTFOLIO
            </motion.div>
          </motion.div>
        </header>

        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/70 backdrop-blur-sm border-2 border-[#66FCF1] rounded-xl p-6"
          >
            <h2 className="text-xl font-mono font-bold text-[#66FCF1] mb-4">
              {">"} About Me
            </h2>
            <div className="space-y-4 text-[#66FCF1] font-mono">
              <p>Computer Engineering (Data Science) student at Vardhaman College of Engineering with a passion for machine learning and data analysis.</p>
              <p>Skilled in Python, Java, and various data science tools. Experienced in building predictive models and creating interactive dashboards.</p>
              {isGameUnlocked && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8"
                >
                  <h3 className="text-xl mb-4">{">"} Bonus: Snake Game!</h3>
                  <Game />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/70 backdrop-blur-sm border-2 border-[#66FCF1] rounded-xl p-6"
          >
            <h2 className="text-xl font-mono font-bold text-[#66FCF1] mb-4">
              {">"} Academic Background
            </h2>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="border-l-2 border-[#66FCF1] pl-4 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        transition: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                      className="p-2 border-2 border-[#66FCF1] rounded-lg"
                    >
                      {edu.icon}
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold text-[#66FCF1]">{edu.institution}</h3>
                  </div>
                  <p className="text-[#66FCF1]/80">{edu.degree}</p>
                  <p className="text-[#66FCF1] font-mono">{edu.year} • {edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};