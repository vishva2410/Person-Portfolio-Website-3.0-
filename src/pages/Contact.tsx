import { motion } from 'framer-motion';
import { PageTransition, fadeInUp, staggerContainer } from '../components/PageTransition';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const contactInfo = {
    email: 'vishvateja10@gmail.com',
    phone: '+91 8297425433',
    location: 'Secunderabad, Telangana, India',
};

const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com', handle: '@vishvateja' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', handle: '/in/vishvateja' },
];

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [secretTyped, setSecretTyped] = useState('');
    const [hireRevealed, setHireRevealed] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(contactInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Easter egg: Type "hire" to reveal special message
    const handleKeyDown = (e: React.KeyboardEvent) => {
        const newTyped = secretTyped + e.key.toLowerCase();
        if ('hireme'.startsWith(newTyped)) {
            setSecretTyped(newTyped);
            if (newTyped === 'hireme') {
                setHireRevealed(true);
                setSecretTyped('');
            }
        } else {
            setSecretTyped('');
        }
    };

    return (
        <PageTransition>
            <div
                className="min-h-screen pt-32 pb-20 px-8 relative z-10"
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="mb-16 text-center">
                        <motion.p variants={fadeInUp} className="text-neutral-500 font-mono text-sm mb-4">
                            06 / Contact
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 text-neutral-100">
                            Let's Connect
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-neutral-400 max-w-lg mx-auto">
                            I'm currently open to new opportunities. Whether you have a project in mind
                            or just want to chat, feel free to reach out.
                        </motion.p>
                    </motion.div>

                    {/* Easter egg revealed */}
                    {hireRevealed && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/30 text-center"
                        >
                            <p className="text-emerald-400 font-mono">
                                ✨ You typed "hireme"! I'm definitely interested in great opportunities!
                            </p>
                        </motion.div>
                    )}

                    {/* Email CTA - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mb-10"
                    >
                        <motion.button
                            onClick={copyEmail}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full group relative overflow-hidden border border-neutral-800 bg-neutral-900/50 p-8 text-left hover:border-neutral-700 hover:bg-neutral-900/70 transition-all"
                        >
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <p className="text-neutral-500 font-mono text-xs uppercase tracking-wider mb-3">Email Address</p>
                                    <p className="text-2xl md:text-3xl font-medium text-neutral-100 group-hover:text-white transition-colors">
                                        {contactInfo.email}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 px-5 py-3 bg-neutral-800/80 group-hover:bg-neutral-700/80 transition-colors">
                                    {copied ? (
                                        <>
                                            <Check className="w-5 h-5 text-emerald-400" />
                                            <span className="text-emerald-400 text-sm">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-5 h-5 text-neutral-300" />
                                            <span className="text-neutral-300 text-sm">Copy</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <div className="grid md:grid-cols-2 gap-4 mb-10">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -3 }}
                                className="group flex items-center justify-between p-5 bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-neutral-800/80 group-hover:bg-neutral-700/80 transition-colors">
                                        <link.icon className="w-5 h-5 text-neutral-300" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-neutral-200">{link.name}</p>
                                        <p className="text-neutral-500 text-sm font-mono">{link.handle}</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-8 text-neutral-500 mb-20"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-neutral-900">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span>{contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-neutral-900">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <span>{contactInfo.location}</span>
                        </div>
                    </motion.div>

                    {/* Available Status */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-3 bg-emerald-500/10 border border-emerald-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-emerald-400 text-sm font-mono">AVAILABLE_FOR_OPPORTUNITIES</span>
                        </div>
                    </motion.div>

                    {/* Hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-center text-neutral-700 text-xs mt-8 font-mono"
                    >
                        {/* psst... try typing something */}
                    </motion.p>

                    {/* Footer */}
                    <motion.footer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="mt-24 pt-8 border-t border-neutral-900 text-center"
                    >
                        <p className="text-neutral-600 text-sm">
                            © {new Date().getFullYear()} Vishva Teja Guduguntla. Built with React & Framer Motion.
                        </p>
                    </motion.footer>
                </div>
            </div>
        </PageTransition>
    );
};
