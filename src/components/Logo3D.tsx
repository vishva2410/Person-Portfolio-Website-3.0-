import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Logo3D = () => {
    const [hoverCount, setHoverCount] = useState(0);
    const [secretUnlocked, setSecretUnlocked] = useState(false);

    // Easter egg: Hover 7 times to unlock secret message
    useEffect(() => {
        if (hoverCount >= 7 && !secretUnlocked) {
            setSecretUnlocked(true);
        }
    }, [hoverCount, secretUnlocked]);

    return (
        <motion.div
            className="relative w-10 h-10 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoverCount(prev => prev + 1)}
            style={{ perspective: 1000 }}
        >
            {/* Sharp-edged cube container */}
            <motion.div
                className="relative w-full h-full border border-neutral-600 bg-neutral-900/90"
                whileHover={{ rotateY: 180, rotateX: 10 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front face */}
                <div
                    className="absolute inset-0 flex items-center justify-center border border-neutral-700 bg-neutral-900"
                    style={{ transform: 'translateZ(20px)' }}
                >
                    <motion.span
                        className="text-lg font-bold tracking-tighter text-neutral-100"
                        animate={secretUnlocked ? {
                            textShadow: ['0 0 0px #fff', '0 0 10px #fff', '0 0 0px #fff'],
                        } : {}}
                        transition={{ duration: 1, repeat: secretUnlocked ? Infinity : 0 }}
                    >
                        V
                    </motion.span>
                </div>

                {/* Back face with secret */}
                <div
                    className="absolute inset-0 flex items-center justify-center border border-neutral-700 bg-neutral-800"
                    style={{ transform: 'translateZ(-20px) rotateY(180deg)' }}
                >
                    <span className="text-[8px] font-mono text-neutral-400">
                        {secretUnlocked ? '∞' : 'G'}
                    </span>
                </div>

                {/* Side faces - sharp edges */}
                <div
                    className="absolute inset-y-0 right-0 w-[40px] border border-neutral-700 bg-gradient-to-r from-neutral-800 to-neutral-900"
                    style={{ transform: 'rotateY(90deg) translateZ(20px)', transformOrigin: 'right center' }}
                />
            </motion.div>

            {/* Corner accents for sharp tech feel */}
            <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-neutral-500" />
            <div className="absolute -top-px -right-px w-2 h-2 border-t border-r border-neutral-500" />
            <div className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-neutral-500" />
            <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-neutral-500" />

            {/* Secret tooltip */}
            {secretUnlocked && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 px-2 py-1 bg-neutral-900 border border-neutral-700 text-[10px] font-mono text-neutral-400 whitespace-nowrap z-50"
                >
          // infinite possibilities
                </motion.div>
            )}
        </motion.div>
    );
};
