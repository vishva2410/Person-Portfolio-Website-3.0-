import { motion } from 'framer-motion';
import { PageTransition, fadeInUp, staggerContainer } from '../components/PageTransition';
import { MapPin, Mail, GraduationCap, Calendar, Code, Trophy, Rocket } from 'lucide-react';

export const About = () => {
    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-20 px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="mb-16">
                        <motion.p variants={fadeInUp} className="text-neutral-500 font-mono text-sm mb-4">
                            02 / About Me
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 text-neutral-100">
                            Who I Am
                        </motion.h1>
                    </motion.div>

                    {/* Main Grid */}
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Left Column - Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="lg:col-span-3 space-y-6"
                        >
                            <p className="text-2xl text-neutral-200 leading-relaxed font-light">
                                Backend and AI-focused Computer Science undergraduate with hands-on experience
                                building scalable backend systems, AI/ML pipelines, and real-world analytics solutions.
                            </p>

                            <p className="text-neutral-400 leading-relaxed">
                                I specialize in designing and implementing production-grade systems that solve real problems.
                                My work spans across voice-based AI systems, computer vision applications for privacy protection,
                                and healthcare AI for clinical decision support.
                            </p>

                            <p className="text-neutral-400 leading-relaxed">
                                With a strong foundation in data structures, algorithms, and system design, I approach
                                every project with a focus on scalability, maintainability, and performance. I believe
                                in writing clean, well-documented code that stands the test of time.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 text-neutral-400">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">Secunderabad, Telangana, India</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-400">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm">vishvateja10@gmail.com</span>
                                </div>
                            </div>

                            {/* What I Do */}
                            <div className="pt-8 border-t border-neutral-800">
                                <h3 className="text-lg font-semibold text-neutral-100 mb-6">What I Focus On</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { icon: Code, title: 'Backend Dev', desc: 'Scalable APIs & Microservices' },
                                        { icon: Rocket, title: 'AI/ML', desc: 'Deep Learning & NLP Systems' },
                                        { icon: Trophy, title: 'Problem Solving', desc: '240+ LeetCode Solutions' },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -3 }}
                                            className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl"
                                        >
                                            <item.icon className="w-5 h-5 text-neutral-400 mb-3" />
                                            <h4 className="font-medium text-neutral-200 mb-1">{item.title}</h4>
                                            <p className="text-xs text-neutral-500">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Education Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            <div className="sticky top-32 space-y-6">
                                <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-700/5 rounded-full blur-3xl" />

                                    <div className="relative">
                                        <div className="flex items-center gap-3 mb-6">
                                            <GraduationCap className="w-5 h-5 text-neutral-400" />
                                            <h3 className="font-semibold text-neutral-200">Education</h3>
                                        </div>

                                        <h4 className="text-lg font-medium text-neutral-100 mb-1">
                                            B.Tech in Computer Science
                                        </h4>
                                        <p className="text-neutral-400 text-sm mb-1">Data Science Specialization</p>
                                        <p className="text-neutral-500 text-sm mb-4">
                                            Vardhaman College of Engineering
                                        </p>

                                        <div className="flex items-center gap-2 text-neutral-400 text-sm mb-4">
                                            <Calendar className="w-4 h-4" />
                                            <span>Aug 2023 – Mar 2027</span>
                                        </div>

                                        <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                            <span className="text-emerald-400 font-medium text-sm">CGPA: 8.9/10.0</span>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-neutral-800">
                                            <p className="text-xs text-neutral-500">
                                                <span className="text-neutral-400">Coursework: </span>
                                                Data Structures & Algorithms, DBMS, OOP, Operating Systems, Web Technologies
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: '1475', label: 'LC Rating' },
                                        { value: '240+', label: 'Problems' },
                                        { value: '3+', label: 'Projects' },
                                        { value: '1', label: 'Publication' },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.02 }}
                                            className="p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl text-center"
                                        >
                                            <p className="text-2xl font-bold text-neutral-100">{stat.value}</p>
                                            <p className="text-xs text-neutral-500">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
