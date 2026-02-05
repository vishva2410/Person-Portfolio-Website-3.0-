import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Logo3D } from './Logo3D';
import { Menu, X } from 'lucide-react';

const navItems = [
    { path: '/', label: 'Home', num: '01' },
    { path: '/about', label: 'About', num: '02' },
    { path: '/projects', label: 'Projects', num: '03' },
    { path: '/skills', label: 'Skills', num: '04' },
    { path: '/experience', label: 'Experience', num: '05' },
    { path: '/contact', label: 'Contact', num: '06' },
];

export const Navigation = () => {
    const [location] = useLocation();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Logo3D />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <Link key={item.path} href={item.path}>
                                <motion.div
                                    className="relative px-4 py-2 cursor-pointer group"
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                >
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                layoutId="nav-hover"
                                                className="absolute inset-0 bg-neutral-800/50 rounded-lg border border-neutral-700/50"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    <div className="relative z-10 flex items-center gap-2">
                                        <span className={`text-[10px] font-mono transition-colors ${location === item.path ? 'text-neutral-300' : 'text-neutral-600'
                                            }`}>
                                            {item.num}
                                        </span>
                                        <span className={`text-sm tracking-wide transition-colors ${location === item.path ? 'text-neutral-100' : 'text-neutral-400'
                                            }`}>
                                            {item.label}
                                        </span>
                                    </div>

                                    {location === item.path && (
                                        <motion.div
                                            layoutId="nav-active"
                                            className="absolute -bottom-1 left-4 right-4 h-px bg-neutral-400"
                                        />
                                    )}
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-neutral-300"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-900/95 backdrop-blur-lg border-t border-neutral-800"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path}>
                                    <motion.div
                                        onClick={() => setMobileOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location === item.path
                                                ? 'bg-neutral-800 text-neutral-100'
                                                : 'text-neutral-400 hover:bg-neutral-800/50'
                                            }`}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="text-xs font-mono text-neutral-600">{item.num}</span>
                                        <span>{item.label}</span>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
