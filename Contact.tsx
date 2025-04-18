import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const contacts = [
    {
      icon: <Github className="w-8 h-8" />,
      label: 'GitHub',
      url: 'https://github.com/vishva2410',
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vishva-teja-guduguntla/',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      url: 'mailto:vishvateja10@gmail.com',
    },
  ];

  const handleContact = (url: string) => {
    window.open(url, '_blank');
  };

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

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {contacts.map((_, index) => (
            <motion.line
              key={`line-${index}`}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos(2 * Math.PI * index / contacts.length) * 30}%`}
              y2={`${50 + Math.sin(2 * Math.PI * index / contacts.length) * 30}%`}
              stroke="rgba(102, 252, 241, 0.2)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Header */}
      <header className="p-4 md:p-6 text-center relative z-10">
        <motion.h1 
          className="text-2xl md:text-4xl font-bold text-[#66FCF1] mb-2 crt-flicker"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {">"} COMMUNICATION TERMINAL
        </motion.h1>
        <motion.p 
          className="text-sm md:text-base text-[#66FCF1]/80 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {">"} ESTABLISHING SECURE CONNECTIONS...
        </motion.p>
      </header>

      <div className="max-w-4xl mx-auto p-4 md:p-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-black/80 backdrop-blur-sm border-2 border-[#66FCF1] rounded-xl p-4 md:p-8 relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-2 right-2 text-[#66FCF1]/50 font-mono text-xs md:text-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            [SECURE CHANNEL]
          </motion.div>

          <motion.h2 
            className="text-xl md:text-2xl text-[#66FCF1] mb-8 font-mono text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {">"} Select Communication Method
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded-full bg-black/80 border-4 border-[#66FCF1] flex items-center justify-center cursor-pointer group hover:shadow-glow transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(102, 252, 241, 0.5)"
                  }}
                  onClick={() => handleContact(contact.url)}
                >
                  <motion.div 
                    className="text-[#66FCF1] group-hover:scale-110 transition-transform duration-300"
                    animate={{
                      rotate: [0, 360],
                      transition: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    {contact.icon}
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-[#66FCF1] mt-4 font-mono text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.2 }}
                >
                  {">"} {contact.label}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-8 md:mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-[#66FCF1]/80 font-mono text-sm md:text-base">
              {">"} STATUS: READY FOR TRANSMISSION
            </p>
          </motion.div>

          {/* Connection Status Indicator */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-[#66FCF1]/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className="h-full bg-[#66FCF1]"
              animate={{
                x: ["-100%", "100%"],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="p-4 text-center text-[#66FCF1]/50 text-xs md:text-sm relative z-10 font-mono">
        {">"} CLICK TO ESTABLISH CONNECTION
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