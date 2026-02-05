import { motion } from 'framer-motion';
import { PageTransition, fadeInUp, staggerContainer } from '../components/PageTransition';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'Bodha AI',
        category: 'AI/ML • Voice Systems',
        tech: ['Python', 'LiveKit API', 'WebSockets', 'NLP'],
        shortDesc: 'Real-time voice-based AI system enabling low-latency conversational interaction.',
        fullDesc: 'A sophisticated voice-based AI system that leverages LiveKit for real-time audio streaming, enabling natural conversational experiences with near-zero latency. The system maintains conversational context across multiple turns, providing coherent and contextually aware responses.',
        details: [
            'Architected a real-time voice-based AI system enabling low-latency conversational interaction using LiveKit audio streaming',
            'Implemented NLP-driven context management to support multi-turn conversations with consistent conversational state',
            'Designed backend state handling for seamless session continuity and fault tolerance',
            'Integrated WebSocket protocols for bidirectional real-time communication'
        ],
        metrics: ['< 200ms latency', 'Multi-turn context', 'Fault tolerant'],
        secret: 'AI that listens 👂',
    },
    {
        id: 2,
        title: 'Context-Aware Privacy Eraser',
        category: 'Computer Vision • Privacy',
        tech: ['Python', 'Flask', 'YOLO', 'REST APIs'],
        shortDesc: 'Backend service that automatically detects and redacts sensitive visual entities.',
        fullDesc: 'An intelligent privacy protection service that automatically identifies and redacts personally identifiable information from images and videos. Uses state-of-the-art object detection models to find faces, license plates, and other sensitive data, then applies context-aware redaction while preserving image quality.',
        details: [
            'Developed a backend service that automatically detects and redacts sensitive visual entities such as faces and license plates',
            'Designed a modular API architecture enabling scalable integration of additional detection models',
            'Implemented RESTful endpoints for seamless integration with various client applications',
            'Optimized YOLO model inference for real-time processing capabilities'
        ],
        metrics: ['Real-time detection', 'Modular architecture', 'REST API'],
        secret: 'Privacy matters 🔒',
    },
    {
        id: 3,
        title: 'OncoDetect System',
        category: 'Healthcare AI • Deep Learning',
        tech: ['Python', 'TensorFlow', 'System Design'],
        shortDesc: 'Clinical decision-support system with automated reasoning for medical reports.',
        fullDesc: 'A comprehensive clinical decision-support platform designed for cancer screening and diagnosis. Uses deep learning models trained on medical imaging data to assist healthcare professionals in early detection. Features automated reasoning capabilities for generating structured medical reports with diagnostic insights.',
        details: [
            'Built a clinical decision-support system with automated reasoning for structured medical report generation',
            'Designed a scalable backend supporting modular multi-organ diagnostic pipelines',
            'Implemented TensorFlow-based deep learning models for medical image analysis',
            'Created interpretable AI outputs to assist clinicians in decision-making'
        ],
        metrics: ['Multi-organ support', 'Automated reports', 'Scalable backend'],
        secret: 'Saving lives 🏥',
    },
];

export const Projects = () => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
    const [secretRevealed, setSecretRevealed] = useState<number | null>(null);

    // Easter egg: Double-click to reveal secret
    const handleDoubleClick = (projectId: number) => {
        setSecretRevealed(secretRevealed === projectId ? null : projectId);
    };

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-20 px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="mb-16">
                        <motion.p variants={fadeInUp} className="text-neutral-500 font-mono text-sm mb-4">
                            03 / Featured Work
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 text-neutral-100">
                            Projects
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-neutral-400 max-w-2xl text-lg">
                            A selection of projects showcasing my expertise in AI/ML, backend development,
                            and system design. <span className="text-neutral-600 text-sm">(try double-clicking a project)</span>
                        </motion.p>
                    </motion.div>

                    {/* Projects List */}
                    <div className="space-y-6">
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                className="group"
                                onDoubleClick={() => handleDoubleClick(project.id)}
                            >
                                <div
                                    className={`relative overflow-hidden border transition-all duration-300 ${expandedProject === project.id
                                            ? 'border-neutral-600 bg-neutral-900/80'
                                            : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/60'
                                        }`}
                                >
                                    {/* Secret message */}
                                    {secretRevealed === project.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute top-2 right-2 px-3 py-1 bg-neutral-800 border border-neutral-600 text-neutral-200 text-sm font-mono z-20"
                                        >
                                            {project.secret}
                                        </motion.div>
                                    )}

                                    {/* Main content - clickable */}
                                    <div
                                        className="p-8 cursor-pointer"
                                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                            <div className="flex-1">
                                                <span className="text-xs font-mono text-neutral-500 mb-2 block">
                                                    {project.category}
                                                </span>
                                                <h2 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-3">
                                                    {project.title}
                                                </h2>
                                                <p className="text-neutral-400 leading-relaxed">
                                                    {expandedProject === project.id ? project.fullDesc : project.shortDesc}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-3 bg-neutral-800/80 hover:bg-neutral-700 transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Github className="w-5 h-5 text-neutral-300" />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-3 bg-neutral-800/80 hover:bg-neutral-700 transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <ExternalLink className="w-5 h-5 text-neutral-300" />
                                                </motion.button>
                                            </div>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-neutral-800/60 border border-neutral-700/50 text-xs text-neutral-300 font-mono"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Metrics */}
                                        <div className="flex flex-wrap gap-4">
                                            {project.metrics.map((metric, i) => (
                                                <span key={i} className="text-xs text-neutral-500">
                                                    ✓ {metric}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Expand indicator */}
                                        <div className="flex justify-center mt-4">
                                            {expandedProject === project.id ? (
                                                <ChevronUp className="w-5 h-5 text-neutral-500" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-neutral-500" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: expandedProject === project.id ? 'auto' : 0,
                                            opacity: expandedProject === project.id ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 border-t border-neutral-800">
                                            <h4 className="text-sm font-mono text-neutral-500 mt-6 mb-4">KEY IMPLEMENTATIONS</h4>
                                            <ul className="space-y-3">
                                                {project.details.map((detail, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="flex items-start gap-3 text-neutral-300"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-neutral-500 mt-2 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
