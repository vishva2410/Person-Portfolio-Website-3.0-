import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { useEffect, useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { ArrowRight, Terminal, Brain, Database, Server } from 'lucide-react';

const highlights = [
    { icon: Brain, label: 'AI/ML Engineering' },
    { icon: Server, label: 'Backend Systems' },
    { icon: Database, label: 'Data Analytics' },
    { icon: Terminal, label: 'System Design' },
];

export const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [typedText, setTypedText] = useState('');
    const fullText = 'Building the future with code_';

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 100, damping: 30 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const rotateX = useTransform(y, [-300, 300], [2, -2]);
    const rotateY = useTransform(x, [-300, 300], [-2, 2]);

    // Typing animation easter egg
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, index + 1));
            index++;
            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            mouseX.set(clientX - centerX);
            mouseY.set(clientY - centerY);
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center relative px-8">
                {/* Main content with 3D perspective */}
                <motion.div
                    style={{ rotateX, rotateY, transformPerspective: 1000 }}
                    className="relative z-10 max-w-5xl mx-auto"
                >
                    {/* Status indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="text-neutral-400 text-sm tracking-wide font-mono">AVAILABLE_FOR_OPPORTUNITIES</span>
                    </motion.div>

                    {/* Main heading - sharp, tech feel */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9]"
                    >
                        <span className="block text-neutral-100">VISHVA TEJA</span>
                        <span className="block text-neutral-500">GUDUGUNTLA</span>
                    </motion.h1>

                    {/* Terminal-style typing text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="font-mono text-sm text-neutral-500 mb-6 flex items-center gap-2"
                    >
                        <span className="text-neutral-400">{'>'}</span>
                        <span>{typedText}</span>
                        <span className="animate-pulse">|</span>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-6"
                    >
                        Computer Science undergraduate specializing in
                        <span className="text-neutral-200"> AI/ML pipelines</span>,
                        <span className="text-neutral-200"> scalable backends</span>, and
                        <span className="text-neutral-200"> production systems</span>.
                    </motion.p>

                    {/* Bio text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-neutral-500 max-w-2xl mb-10 leading-relaxed"
                    >
                        Currently pursuing B.Tech in Computer Science with Data Science specialization
                        at Vardhaman College of Engineering. Strong foundation in system design,
                        data processing, and production-oriented development.
                    </motion.p>

                    {/* Highlight cards - sharp edges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap gap-3 mb-10"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -2, backgroundColor: 'rgba(100,100,100,0.2)' }}
                                className="flex items-center gap-2 px-4 py-2 bg-neutral-900/60 border border-neutral-800"
                            >
                                <item.icon className="w-4 h-4 text-neutral-400" />
                                <span className="text-sm text-neutral-300 font-mono">{item.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons - sharp edges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/projects">
                            <motion.button
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-3 px-8 py-4 bg-neutral-100 text-neutral-900 font-medium"
                            >
                                Explore My Work
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                        <Link href="/about">
                            <motion.button
                                whileHover={{ scale: 1.02, borderColor: 'rgb(163,163,163)' }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 border border-neutral-700 text-neutral-300 hover:text-neutral-100 transition-colors"
                            >
                                Learn More
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats - sharp dividers */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex gap-10 mt-16 pt-10 border-t border-neutral-800"
                    >
                        {[
                            { value: '1475', label: 'LeetCode Rating' },
                            { value: '240+', label: 'Problems Solved' },
                            { value: '8.9', label: 'CGPA' },
                        ].map((stat, i) => (
                            <div key={i} className="relative">
                                <p className="text-3xl font-bold text-neutral-100 font-mono">{stat.value}</p>
                                <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">{stat.label}</p>
                                {i < 2 && <div className="absolute right-[-20px] top-0 bottom-0 w-px bg-neutral-800" />}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator - sharp */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-neutral-700 flex justify-center pt-2"
                    >
                        <motion.div className="w-1 h-2 bg-neutral-500" />
                    </motion.div>
                </motion.div>
            </div>
        </PageTransition>
    );
};
