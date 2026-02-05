import React from 'react';
import { motion } from 'framer-motion';
import { Home, Code, Briefcase, User, Trophy, Mail } from 'lucide-react';

interface GearMenuProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

export const GearMenu: React.FC<GearMenuProps> = ({ onSectionChange, currentSection }) => {
  const sections = [
    { id: 'about', label: 'About', icon: <Home className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-5 h-5" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <User className="w-5 h-5" /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Desktop menu - Top position with enhanced animations */}
      <div className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div 
          className="flex items-center space-x-2 bg-black/80 backdrop-blur-sm p-2 rounded-lg border-2 border-[#66FCF1]/50"
          initial={{ y: -60, opacity: 0 }}
          animate={{ 
            y: -2, // Subtle 2px upward shift
            opacity: 1 
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 20,
            mass: 0.5
          }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="flex items-center"
              whileHover={{ 
                scale: 1.05,
                y: -2 // Hover lifts element 2px
              }}
              whileTap={{ 
                scale: 0.95,
                y: 1 // Tap pushes down slightly
              }}
            >
              <motion.div
                className={`px-3 py-2 border-2 rounded-l-lg font-mono text-sm cursor-pointer transition-all duration-300
                  ${currentSection === section.id 
                    ? 'bg-[#66FCF1] text-black border-[#66FCF1] shadow-glow' 
                    : 'bg-transparent text-[#66FCF1] border-[#66FCF1]/50 hover:bg-[#66FCF1]/20'}`}
                onClick={() => onSectionChange(section.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: currentSection === section.id ? -2 : 0 // Active item floats 2px up
                }}
                transition={{ 
                  delay: index * 0.08, 
                  type: 'spring', 
                  stiffness: 500,
                  damping: 15
                }}
              >
                {section.label}
              </motion.div>
              
              <motion.div
                className={`p-2 border-2 rounded-r-lg transition-all duration-300
                  ${currentSection === section.id 
                    ? 'bg-[#66FCF1] border-[#66FCF1] shadow-glow' 
                    : 'bg-transparent border-[#66FCF1]/50 hover:bg-[#66FCF1]/20'}`}
                animate={{
                  rotate: currentSection === section.id ? [0, 15, -15, 0] : 0,
                  y: currentSection === section.id ? -2 : 0, // Icon floats 2px up when active
                  color: currentSection === section.id ? 'black' : '#66FCF1'
                }}
                transition={{ 
                  rotate: { 
                    type: 'spring', 
                    stiffness: 600, 
                    damping: 12,
                    repeat: currentSection === section.id ? Infinity : 0,
                    repeatDelay: 3
                  },
                  y: { type: 'spring', stiffness: 500 },
                  color: { duration: 0.15 }
                }}
              >
                {section.icon}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile menu - Enhanced with floating effect */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 border-t-2 border-[#66FCF1] z-50">
        <motion.div 
          className="flex justify-around items-center p-2"
          initial={{ y: 60, opacity: 0 }}
          animate={{ 
            y: 0,
            opacity: 1 
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 20 
          }}
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              className={`p-2 rounded-lg cursor-pointer flex flex-col items-center ${
                currentSection === section.id 
                  ? 'text-[#66FCF1]' 
                  : 'text-[#66FCF1]/50'
              }`}
              whileHover={{ 
                scale: 1.1,
                y: -2 // Hover lifts 2px
              }}
              whileTap={{ 
                scale: 0.9,
                y: 1 // Tap pushes down
              }}
              onClick={() => onSectionChange(section.id)}
              animate={{
                y: currentSection === section.id ? [0, -3, 0] : 0, // More subtle floating
              }}
              transition={{ 
                y: { 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: 'easeInOut',
                  repeatType: 'reverse' 
                },
                scale: { 
                  type: 'spring', 
                  stiffness: 500, 
                  damping: 12 
                }
              }}
            >
              {section.icon}
              <motion.span 
                className="text-xs mt-1"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentSection === section.id ? 1 : 0,
                  y: currentSection === section.id ? -2 : 0 // Label floats 2px up
                }}
                transition={{ 
                  duration: 0.15,
                  y: { type: 'spring', stiffness: 400 }
                }}
              >
                {section.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};