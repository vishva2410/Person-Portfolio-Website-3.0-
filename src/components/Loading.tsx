import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export const Loading: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="inline-block mb-4"
        >
          <Terminal className="w-12 h-12 text-[#66FCF1]" />
        </motion.div>
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="text-[#66FCF1] font-mono text-lg"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};