import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Terminal } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'CYC (Craft Your Careers)',
      period: 'May 2024 - April 2025',
      description: 'Worked on Google Analytics and Machine Learning (CNN, Classification)',
      achievements: [
        'Investigated Website traffic and made changes to imrove traffic',
        'Developed classification models for user behavior prediction',
        'Optimized data processing pipelines',
      ],
    },
    {
      title: 'Data Analyst and Prompt Expert',
      company: 'Freelancer (Fiverr)',
      period: 'Dec 2023 - May 2024',
      description: 'Creating AI-Powered Websites & Dashboards',
      achievements: [
        'Developed custom AI solutions for clients',
        'Created interactive data visualization dashboards',
        'Implemented machine learning models for various use cases',
      ],
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

      {/* Header */}
      <header className="p-6 text-center relative z-10">
        <motion.h1 
          className="text-4xl font-bold text-[#66FCF1] mb-2 crt-flicker"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {">"} EXPERIENCE LOG
        </motion.h1>
        <motion.p 
          className="text-[#66FCF1]/80 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {">"} ACCESSING CAREER RECORDS...
        </motion.p>
      </header>

      {/* Experience List */}
      <div className="max-w-4xl mx-auto p-8 space-y-8 relative z-10 pb-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/80 backdrop-blur-sm border-2 border-[#66FCF1] rounded-xl p-6 relative overflow-hidden group hover:shadow-[0_0_15px_rgba(102,252,241,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="absolute top-2 right-2 text-[#66FCF1]/50 font-mono text-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {`[LOG ${index + 1}]`}
            </motion.div>

            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="p-2 border-2 border-[#66FCF1] rounded-lg group-hover:shadow-[0_0_10px_rgba(102,252,241,0.5)] transition-all duration-300"
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                <Terminal className="w-6 h-6 text-[#66FCF1]" />
              </motion.div>
              <div>
                <h3 className="text-xl text-[#66FCF1] font-mono">{">"} {exp.title}</h3>
                <p className="text-[#66FCF1]/80 font-mono">{exp.company}</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Calendar className="text-[#66FCF1]" />
                <span className="text-[#66FCF1]/80 font-mono">{exp.period}</span>
              </div>
            </div>
            
            <p className="mb-4 text-[#66FCF1]/80 font-mono">{">"} {exp.description}</p>
            
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="flex items-center gap-2 text-[#66FCF1]/90 font-mono"
                >
                  <motion.div 
                    className="w-2 h-2 bg-[#66FCF1] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }
                    }}
                  />
                  {">"} {achievement}
                </motion.li>
              ))}
            </ul>

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
        {">"} SCROLL FOR MORE LOGS
      </motion.div>

      {/* Footer */}
      <footer className="p-4 text-center text-[#66FCF1]/50 text-sm relative z-10 font-mono">
        {">"} HOVER FOR DETAILS
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