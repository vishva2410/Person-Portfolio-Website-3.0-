import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Terminal } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Hackathon Champion',
      icon: <Trophy className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Won college-level hackathon with an innovative AI solution.',
    },
    {
      title: 'Machine Learning Enthusiast',
      icon: <Trophy className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Won many kaggle competitions on machine learning and deep learning',
    },
    {
      title: 'Debate Master',
      icon: <Award className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Won 10+ debates across multiple colleges.',
    },
    {
      title: 'Event Leadership',
      icon: <Users className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Led organization of Ortus & Festroniux college events.',
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced CRT Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#66FCF1]/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#66FCF1]/30"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(102, 252, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100% 3px',
            animation: 'scanline 8s linear infinite'
          }}
        />
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
              d={`M 0,50 
                 C 20,${50 + 15 * Math.sin(wave * 0.5)}, 
                 40,${50 - 15 * Math.cos(wave * 0.5)}, 
                 60,${50 + 15 * Math.sin(wave * 0.5)}, 
                 80,${50 - 15 * Math.cos(wave * 0.5)}, 
                 100,50`}
              fill="none"
              stroke={`rgba(102, 252, 241, ${0.4 / wave})`}
              strokeWidth="0.8"
              strokeDasharray="3 3"
              initial={{ pathOffset: 0 }}
              animate={{
                pathOffset: [0, 10],
              }}
              transition={{
                duration: 12 * wave,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.svg>
        ))}
      </div>

      {/* Header */}
      <header className="p-6 text-center relative z-10">
        <motion.h1 
          className="text-4xl font-bold text-[#66FCF1] mb-2 crt-flicker"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {">"} ACHIEVEMENT DATABASE
        </motion.h1>
        <motion.p 
          className="text-[#66FCF1]/80 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {">"} LOADING ACCOMPLISHMENTS...
        </motion.p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative z-10 overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-black/80 backdrop-blur-sm border-2 border-[#66FCF1] rounded-xl p-6 relative overflow-hidden group hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="absolute top-2 right-2 text-[#66FCF1]/50 font-mono text-sm">
              {`[ACHIEVEMENT ${index + 1}]`}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-2 border-2 border-[#66FCF1] rounded-lg group-hover:shadow-glow transition-all duration-300"
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-xl text-[#66FCF1] font-mono">{">"} {achievement.title}</h3>
            </div>

            <p className="text-[#66FCF1]/80 font-mono">{">"} {achievement.description}</p>

            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-[#66FCF1]/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <motion.div
                className="h-full bg-[#66FCF1]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="fixed right-6 bottom-20 text-[#66FCF1]/50 font-mono text-sm"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {">"} SCROLL FOR MORE
      </motion.div>

      {/* Footer */}
      <footer className="p-4 text-center text-[#66FCF1]/50 text-sm relative z-10 font-mono">
        {">"} HOVER OR CLICK FOR DETAILS
      </footer>

      <style jsx>{`
        @keyframes scanline {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(102, 252, 241, 0.1);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(102, 252, 241, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 252, 241, 0.8);
        }
      `}</style>
    </div>
  );
};