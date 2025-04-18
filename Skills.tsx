import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Brain, Database, Cpu, Cog } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
}

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Programming');
  const [direction, setDirection] = useState(1);

  const skillCategories = [
    {
      title: 'Programming',
      icon: <Terminal className="w-6 h-6" />,
      color: "text-[#66FCF1]",
      skills: [
        { name: 'Python', level: 80, description: 'Advanced scripting & ML integration' },
        { name: 'Java', level: 85, description: 'Object-oriented programming & backend development' },
        { name: 'C', level: 80, description: 'Low-level programming & system optimization' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: "text-[#FF6B6B]",
      skills: [
        { name: 'TensorFlow', level: 65, description: 'Neural networks & deep learning' },
        { name: 'Scikit-learn', level: 70, description: 'ML algorithms & data modeling' },
        { name: 'PyTorch', level: 10, description: 'Dynamic computation graphs' }
      ]
    },
    {
      title: 'Data Science',
      icon: <Database className="w-6 h-6" />,
      color: "text-[#45A7C5]",
      skills: [
        { name: 'Pandas', level: 60, description: 'Data manipulation & analysis' },
        { name: 'SQL', level: 70, description: 'Database management & optimization' },
        { name: 'Statistics', level: 80, description: 'Probability & inference' }
      ]
    },
    {
      title: 'Data Visualization',
      icon: <Database className="w-6 h-6" />,
      color: "text-[#45A7C5]",
      skills: [
        { name: 'Tableau', level: 60, description: 'Data visualization & analysis' },
        { name: 'Power BI', level: 40, description: 'Database visualization & optimization' },
        { name: 'Python Libraries', level: 80, description: 'Matplotlib, Seaborn, Plotly' }
      ]
    },
    {
      title: 'Deep Learning',
      icon: <Cog className="w-6 h-6" />,
      color: "text-[#C5A845]",
      skills: [
        { name: 'Neural Networks', level: 55, description: 'Self-learning AI systems' },
        { name: 'AI agents', level: 1, description: 'Automation and cybernetics' },
        { name: 'LLM', level: 1, description: 'Ensuring responsible AI use' }
      ]
    }
  ];

  const handleCategoryChange = (newCategory: string) => {
    const currentIndex = skillCategories.findIndex(cat => cat.title === selectedCategory);
    const newIndex = skillCategories.findIndex(cat => cat.title === newCategory);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setSelectedCategory(newCategory);
  };

  const currentCategory = skillCategories.find(cat => cat.title === selectedCategory);

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
          {">"} SKILL DATABASE
        </motion.h1>
        <motion.p 
          className="text-[#66FCF1]/80 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {">"} SELECT CATEGORY TO VIEW SKILLS
        </motion.p>
      </header>

      {/* Category Selector with Enhanced Animations */}
      <div className="flex flex-wrap justify-center gap-4 py-6 relative z-10 px-4">
        {skillCategories.map((category) => (
          <motion.button
            key={category.title}
            onClick={() => handleCategoryChange(category.title)}
            className={`relative px-4 py-2 rounded-lg text-lg border-2 transition-all 
              ${selectedCategory === category.title 
                ? 'bg-white/10 border-white text-white glow-white' 
                : 'bg-black/80 border-[#66FCF1]/50 text-white/80 hover:text-white'}`}
            initial={{ scale: 0.95 }}
            animate={{ 
              scale: selectedCategory === category.title ? 1.1 : 1,
              borderColor: selectedCategory === category.title ? 'white' : '#66FCF1',
              boxShadow: selectedCategory === category.title ? '0 0 15px rgba(255,255,255,0.5)' : 'none'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {selectedCategory === category.title && (
              <motion.span
                className="absolute inset-0 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  boxShadow: '0 0 10px rgba(255,255,255,0.7)'
                }}
                transition={{ duration: 0.3 }}
              />
            )}
            <div className="flex items-center gap-2 relative z-10">
              <motion.div
                animate={{ 
                  color: selectedCategory === category.title ? 'white' : category.color,
                  rotate: selectedCategory === category.title ? [0, 360] : 0
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                }}
              >
                {category.icon}
              </motion.div>
              <motion.span
                animate={{ 
                  color: selectedCategory === category.title ? 'white' : 'white'
                }}
              >
                {category.title}
              </motion.span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Skills Grid with Enhanced Transition */}
      <div className="max-w-5xl mx-auto p-8 relative z-10 min-h-[400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={selectedCategory}
            custom={direction}
            initial={{ opacity: 0, x: 100 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 * direction }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentCategory?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 border-2 border-[#66FCF1] rounded-xl bg-black/80 hover:shadow-[0_0_15px_rgba(102,252,241,0.5)] transition-all cursor-pointer group"
                onClick={() => setSelectedSkill({ ...skill, category: selectedCategory })}
                whileHover={{ scale: 1.03 }}
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
                  {`[SKILL ${skill.level}%]`}
                </motion.div>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className={`p-2 border-2 rounded-lg ${currentCategory.color.replace('text-', 'border-')} group-hover:shadow-[0_0_10px_rgba(102,252,241,0.5)]`}
                    animate={{
                      rotate: [0, 360],
                      transition: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <Cpu className={`w-6 h-6 ${currentCategory.color}`} />
                  </motion.div>
                  <h3 className={`text-xl font-mono ${currentCategory.color}`}>{">"} {skill.name}</h3>
                </div>
                <p className="text-[#66FCF1]/80 font-mono mb-4">{">"} {skill.description}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#66FCF1]/20 overflow-hidden">
                  <motion.div
                    className={`h-full ${currentCategory.color.replace('text-', 'bg-')}`}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
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

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-black/90 p-8 rounded-xl max-w-md w-full border-2 border-[#66FCF1] text-[#66FCF1] shadow-[0_0_20px_rgba(102,252,241,0.5)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-2 border-2 border-[#66FCF1] rounded-lg"
                  animate={{
                    rotate: [0, 360],
                    transition: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <Cpu className="w-8 h-8 text-[#66FCF1]" />
                </motion.div>
                <h3 className="text-2xl font-mono">{">"} {selectedSkill.name}</h3>
              </div>
              <p className="text-[#66FCF1]/80 font-mono mb-2">{">"} CATEGORY: {selectedSkill.category}</p>
              <p className="text-[#66FCF1]/80 font-mono mb-6">{">"} {selectedSkill.description}</p>
              
              <div className="relative h-4 bg-[#66FCF1]/20 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#66FCF1]"
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="mt-4 flex justify-between items-center font-mono">
                <span className="text-[#66FCF1]/80">{">"} SKILL LEVEL:</span>
                <span className="text-[#66FCF1] font-bold">{selectedSkill.level}%</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="p-4 text-center text-[#66FCF1]/50 text-sm relative z-10 font-mono">
        {">"} CLICK FOR DETAILS
      </footer>

      <style jsx>{`
        @keyframes scanline {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }

        .glow-white {
          animation: pulse-white 2s infinite;
        }
        @keyframes pulse-white {
          0% { box-shadow: 0 0 5px rgba(255,255,255,0.3); }
          50% { box-shadow: 0 0 15px rgba(255,255,255,0.7); }
          100% { box-shadow: 0 0 5px rgba(255,255,255,0.3); }
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