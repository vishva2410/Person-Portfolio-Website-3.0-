import React from 'react';
import { motion } from 'framer-motion';
import { 
  Recycle, 
  Heart, 
  CreditCard, 
  Globe, 
  TrendingUp, 
  Newspaper, 
  Pencil,
  Brain,
  ScanSearch,
  Home 
} from 'lucide-react';

interface Project {
  title: string;
  icon: React.ReactNode;
  description: string;
  tech: string[];
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
    title: 'Brain Cancer Detection',
    icon: <Brain className="w-6 h-6 text-[#66FCF1]" />,
    description: 'Developed a CNN-based model to detect brain tumors from MRI scans. Utilized OpenCV for image preprocessing, TensorFlow for deep learning, and glob for image data handling.',
    tech: ['TensorFlow', 'OpenCV', 'Python', 'glob'],
  },
    {
      title: 'Green Morph Solutions',
      icon: <Recycle className="w-6 h-6 text-[#66FCF1]" />,
      description: 'AI-powered plastic waste recycling platform using computer vision and machine learning to classify and sort recyclable materials with 95% accuracy. Integrated with IoT sensors for real-time monitoring of recycling bins.',
      tech: ['React.js', 'Node.js', 'Python', 'Neural Networks'],
    },
    {
      title: 'Heart Disease Risk Prediction',
      icon: <Heart className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Machine Learning model predicting heart disease risk using patient data with 89% accuracy. Features include cholesterol levels, blood pressure, and lifestyle factors with SHAP value explanations.',
      tech: ['Scikit-learn', 'Pandas', 'XGBoost', 'SHAP'],
    },
    {
      title: 'Credit Card Fraud Detection',
      icon: <CreditCard className="w-6 h-6 text-[#66FCF1]" />,
      description: 'AI-driven fraud detection system using Isolation Forests and anomaly detection that reduced false positives by 30% while maintaining 98% detection rate on imbalanced datasets.',
      tech: ['Python', 'Isolation Forest', 'NumPy', 'Imbalanced-learn'],
    },
    {
      title: 'Personal Portfolio Website',
      icon: <Globe className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Fully responsive portfolio showcasing skills, projects, and achievements with retro CRT animations. Features dark/light mode, 3D elements, and smooth page transitions.',
      tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Stock Price Prediction',
      icon: <TrendingUp className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Built a machine learning model to predict stock prices using LSTM networks with 85% directional accuracy. Integrated with Yahoo Finance API for real-time data fetching.',
      tech: ['Python', 'LSTM', 'Pandas', 'Matplotlib', 'YFinance'],
    },
    {
      title: 'Fake News Detection',
      icon: <Newspaper className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Implemented an NLP-based model to classify real and fake news articles with 92% accuracy using ensemble methods and transformer-based embeddings.',
      tech: ['Python', 'NLTK', 'Scikit-learn', 'TF-IDF', 'BERT'],
    },
    {
    title: 'Lung Cancer Detection',
    icon: <ScanSearch className="w-6 h-6 text-[#66FCF1]" />,
    description: 'Designed a CNN model to detect lung cancer from X-ray images. Implemented image preprocessing and trained using TensorFlow and Keras, achieving 72% classification accuracy.',
    tech: ['TensorFlow', 'Keras', 'Python', 'OpenCV','CNN'],
  },
    {
      title: 'Handwritten Digit Recognition',
      icon: <Pencil className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Developed a CNN-based model achieving 99.2% accuracy on MNIST dataset. Extended to real-time recognition using OpenCV with webcam input.',
      tech: ['Python', 'TensorFlow', 'CNN', 'MNIST', 'OpenCV'],
    },
    {
      title: 'House Price Prediction',
      icon: <Home className="w-6 h-6 text-[#66FCF1]" />,
      description: 'Created a regression model to estimate house prices based on 80+ features with R² score of 0.91. Includes interactive visualization of feature importance.',
      tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'Plotly'],
    },
  ];

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
          {">"} PROJECT DATABASE
        </motion.h1>
        <motion.p 
          className="text-[#66FCF1]/80 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {">"} ACCESSING PROJECT ARCHIVES...
        </motion.p>
      </header>

      {/* Projects Grid - Updated Container */}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 pb-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/80 backdrop-blur-sm border-2 border-[#66FCF1] rounded-xl p-6 relative overflow-hidden group hover:shadow-[0_0_15px_rgba(102,252,241,0.5)] transition-all duration-300 h-full flex flex-col"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
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
              {`[PROJECT ${index + 1}]`}
            </motion.div>

            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-2 border-2 border-[#66FCF1] rounded-lg group-hover:shadow-[0_0_10px_rgba(102,252,241,0.5)] transition-all duration-300"
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                {project.icon}
              </motion.div>
              <h3 className="text-xl text-[#66FCF1] font-mono">{">"} {project.title}</h3>
            </div>
            
            {/* Scrollable Description Area */}
            <div className="flex-grow overflow-y-auto mb-4 pr-2 custom-scroll">
              <p className="text-[#66FCF1]/80 font-mono">{">"} {project.description}</p>
            </div>
            
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                  className="px-3 py-1 bg-[#66FCF1]/10 border border-[#66FCF1]/30 rounded-full text-sm text-[#66FCF1] font-mono group-hover:border-[#66FCF1] transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Animated Progress Bar */}
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-[#66FCF1]/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <motion.div
                className="h-full bg-[#66FCF1]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        ))}
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

      {/* Footer */}
      <footer className="p-4 text-center text-[#66FCF1]/50 text-sm relative z-10 font-mono">
        {">"} PRESS ESC TO EXIT // HOVER FOR PROJECT DETAILS
      </footer>

      <style jsx>{`
        @keyframes scanline {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }

        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(102, 252, 241, 0.1);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(102, 252, 241, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 252, 241, 0.5);
        }

        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(102, 252, 241, 0.2);
        }
      `}</style>
    </div>
  );
};