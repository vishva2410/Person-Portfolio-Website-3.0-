import { motion } from 'framer-motion';
import { PageTransition, fadeInUp, staggerContainer } from '../components/PageTransition';
import { useState } from 'react';

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            { name: 'Python', level: 'Advanced' },
            { name: 'Java', level: 'Intermediate' },
            { name: 'SQL', level: 'Advanced' },
            { name: 'C++', level: 'Intermediate' },
        ],
    },
    {
        title: 'Backend & APIs',
        skills: [
            { name: 'Flask', level: 'Advanced' },
            { name: 'FastAPI', level: 'Advanced' },
            { name: 'RESTful APIs', level: 'Advanced' },
            { name: 'Microservices', level: 'Intermediate' },
        ],
    },
    {
        title: 'AI / ML',
        skills: [
            { name: 'TensorFlow', level: 'Advanced' },
            { name: 'Keras', level: 'Advanced' },
            { name: 'YOLO', level: 'Intermediate' },
            { name: 'LLM Integration', level: 'Intermediate' },
            { name: 'Prompt Engineering', level: 'Advanced' },
        ],
    },
    {
        title: 'Data & Databases',
        skills: [
            { name: 'PostgreSQL', level: 'Advanced' },
            { name: 'MySQL', level: 'Advanced' },
            { name: 'Pandas', level: 'Advanced' },
            { name: 'NumPy', level: 'Advanced' },
            { name: 'Tableau', level: 'Intermediate' },
        ],
    },
    {
        title: 'DevOps & Tools',
        skills: [
            { name: 'Git', level: 'Advanced' },
            { name: 'GitHub', level: 'Advanced' },
            { name: 'Docker', level: 'Intermediate' },
            { name: 'Postman', level: 'Advanced' },
            { name: 'AWS (EC2, S3)', level: 'Intermediate' },
        ],
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', level: 'Advanced' },
            { name: 'CSS', level: 'Advanced' },
            { name: 'JavaScript', level: 'Intermediate' },
            { name: 'Streamlit', level: 'Advanced' },
        ],
    },
];

export const Skills = () => {
    const [clickedSkills, setClickedSkills] = useState<Set<string>>(new Set());
    const [allUnlocked, setAllUnlocked] = useState(false);

    // Easter egg: Click on skills to "collect" them
    const handleSkillClick = (skillName: string) => {
        const newClicked = new Set(clickedSkills);
        newClicked.add(skillName);
        setClickedSkills(newClicked);

        // Check if all skills are collected
        const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
        if (newClicked.size >= totalSkills) {
            setAllUnlocked(true);
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-20 px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="mb-16">
                        <motion.p variants={fadeInUp} className="text-neutral-500 font-mono text-sm mb-4">
                            04 / Expertise
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 text-neutral-100">
                            Technical Skills
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-neutral-400 max-w-2xl flex items-center gap-4">
                            Technologies and tools I've worked with extensively.
                            {clickedSkills.size > 0 && (
                                <span className="text-xs font-mono text-neutral-600">
                                    [{clickedSkills.size} collected]
                                </span>
                            )}
                        </motion.p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                                whileHover={{ y: -4 }}
                                className="group relative"
                            >
                                <div className="relative bg-neutral-900/50 border border-neutral-800 p-5 h-full hover:border-neutral-700 transition-all duration-300">
                                    {/* Grid pattern */}
                                    <div
                                        className="absolute inset-0 opacity-[0.03]"
                                        style={{
                                            backgroundImage: `
                        linear-gradient(to right, white 1px, transparent 1px),
                        linear-gradient(to bottom, white 1px, transparent 1px)
                      `,
                                            backgroundSize: '20px 20px',
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <h3 className="text-sm font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                                            {category.title}
                                        </h3>

                                        <div className="space-y-2">
                                            {category.skills.map((skill, i) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 + index * 0.08 + i * 0.05 }}
                                                    onClick={() => handleSkillClick(skill.name)}
                                                    className={`flex items-center justify-between cursor-pointer transition-all ${clickedSkills.has(skill.name)
                                                            ? 'bg-neutral-800/50 px-2 py-1 -mx-2'
                                                            : 'hover:bg-neutral-800/30 px-2 py-1 -mx-2'
                                                        }`}
                                                >
                                                    <span className={`text-sm transition-colors ${clickedSkills.has(skill.name) ? 'text-neutral-100' : 'text-neutral-200'
                                                        }`}>
                                                        {clickedSkills.has(skill.name) ? '✓ ' : ''}{skill.name}
                                                    </span>
                                                    <span className={`text-[10px] px-2 py-0.5 font-mono ${skill.level === 'Advanced'
                                                            ? 'bg-neutral-700/50 text-neutral-300'
                                                            : 'bg-neutral-800/50 text-neutral-500'
                                                        }`}>
                                                        {skill.level}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Easter egg message */}
                    {allUnlocked && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-12 p-4 bg-neutral-900 border border-neutral-600 text-center"
                        >
                            <p className="text-neutral-200 font-mono">
                                🎉 ALL SKILLS COLLECTED! You found the easter egg!
                            </p>
                        </motion.div>
                    )}

                    {/* Footer note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-center text-neutral-500 text-sm mt-12"
                    >
                        Continuously learning and adapting to new technologies.
                    </motion.p>
                </div>
            </div>
        </PageTransition>
    );
};
