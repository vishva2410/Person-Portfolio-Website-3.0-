import React, { useState, Suspense, lazy } from 'react';
import { Terminal } from './components/Terminal';
import { GearMenu } from './components/GearMenu';
import { Loading } from './components/Loading';

// Lazy load components
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Achievements = lazy(() => import('./components/Achievements').then(module => ({ default: module.Achievements })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

function App() {
  const [isSystemBooted, setIsSystemBooted] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');

  const handlePowerOn = () => {
    setIsSystemBooted(true);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'achievements':
        return <Achievements />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {!isSystemBooted ? (
        <Terminal onPowerOn={handlePowerOn} />
      ) : (
        <div className="p-4 md:p-8">
          <div className="pb-4 md:pb-8">
            <GearMenu
              onSectionChange={setCurrentSection}
              currentSection={currentSection}
            />
          </div>
          <Suspense fallback={<Loading />}>
            <div className="pt-4">
              {renderSection()}
            </div>
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default App;