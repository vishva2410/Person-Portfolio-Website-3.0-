import { motion } from 'framer-motion';
import { PageTransition, fadeInUp, staggerContainer } from '../components/PageTransition';
import { Calendar, MapPin, Briefcase, BookOpen, Award, Trophy, MessageSquare, Code } from 'lucide-react';

const experience = {
    title: 'Data Analyst Intern',
    company: 'CraftyourCareer',
    location: 'Remote',
    period: 'Dec 2024 – Mar 2025',
    description: 'Contributed to data-driven decision making through analytics dashboards and performance reporting.',
    points: [
        'Built interactive Tableau dashboards analyzing 5K+ weekly user sessions, improving stakeholder visibility into traffic and engagement trends',
        'Performed exploratory data analysis on Google Analytics logs to monitor KPIs such as session duration, bounce rate, and conversion funnels',
        'Translated raw web metrics into weekly performance reports supporting data-driven marketing and UX decisions',
    ],
};

const publication = {
    title: 'Green Morph Solutions',
    journal: 'International Journal of Science & Advanced Technology',
    volume: 'Vol. 16, Issue 2, 2025',
    doi: 'DOI: 10.71097/IJSAT.v16.i2.4382',
    description: 'Authored research on sustainable engineering practices, exploring innovative approaches to environmental technology solutions.',
};

const achievements = [
    {
        icon: Code,
        title: 'Competitive Programming',
        description: 'Solved 240+ problems across LeetCode (Rating: 1475) and GeeksforGeeks. Strong foundation in DSA and algorithmic thinking.',
        highlight: '1475 Rating',
    },
    {
        icon: Trophy,
        title: 'Smart India Hackathon',
        description: 'Developed prototype solutions for SIH 2025 in the Mental Health domain, focusing on accessible technology for wellbeing.',
        highlight: 'SIH 2025',
    },
    {
        icon: MessageSquare,
        title: 'Debate & Communication',
        description: 'Winner of 10+ debate competitions, demonstrating strong articulation, logical reasoning, and public speaking skills.',
        highlight: '10+ Wins',
    },
];

export const Experience = () => {
    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-20 px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="mb-16">
                        <motion.p variants={fadeInUp} className="text-neutral-500 font-mono text-sm mb-4">
                            05 / Journey
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 text-neutral-100">
                            Experience
                        </motion.h1>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-semibold text-neutral-200">Work Experience</h2>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-3 top-6 bottom-6 w-px bg-gradient-to-b from-neutral-600 via-neutral-700 to-transparent" />

                            <div className="relative pl-10">
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-neutral-900 border-2 border-neutral-600 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-neutral-400" />
                                </div>

                                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-100">{experience.title}</h3>
                                            <p className="text-neutral-300">{experience.company}</p>
                                            <p className="text-neutral-500 text-sm mt-1">{experience.description}</p>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-1">
                                            <div className="flex items-center gap-2 text-neutral-400 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{experience.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                                <MapPin className="w-4 h-4" />
                                                <span>{experience.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mt-6">
                                        {experience.points.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                                className="flex items-start gap-3 text-neutral-400 text-sm"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-1.5 flex-shrink-0" />
                                                <span>{point}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Publication */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-semibold text-neutral-200">Research Publication</h2>
                        </div>

                        <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 border border-neutral-800 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-neutral-100 mb-2">{publication.title}</h3>
                            <p className="text-neutral-400 italic text-sm mb-1">{publication.journal}</p>
                            <p className="text-neutral-500 text-xs font-mono mb-4">
                                {publication.volume} • {publication.doi}
                            </p>
                            <p className="text-neutral-400 text-sm">{publication.description}</p>
                        </div>
                    </motion.section>

                    {/* Achievements */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-semibold text-neutral-200">Achievements</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-5 hover:border-neutral-700 transition-all"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <achievement.icon className="w-6 h-6 text-neutral-400" />
                                        <span className="text-xs font-mono px-2 py-1 bg-neutral-800 rounded-full text-neutral-300">
                                            {achievement.highlight}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-neutral-200 mb-2">{achievement.title}</h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">{achievement.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>
        </PageTransition>
    );
};
