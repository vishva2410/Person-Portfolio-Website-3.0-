import { Route, Switch, useLocation } from 'wouter';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { NeuralNetwork } from './components/NeuralNetwork';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [location] = useLocation();
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);

  // Easter egg: Konami code
  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          setKonamiUnlocked(true);
          konamiIndex = 0;
          setTimeout(() => setKonamiUnlocked(false), 5000);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-hidden">
      {/* Neural network background */}
      <NeuralNetwork />

      {/* Navigation */}
      <Navigation />

      {/* Page content */}
      <AnimatePresence mode="wait">
        <Switch location={location} key={location}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>

      {/* Konami code easter egg */}
      {konamiUnlocked && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="px-6 py-3 bg-neutral-900 border border-neutral-600 text-neutral-100 font-mono text-lg animate-pulse">
            🎮 KONAMI CODE ACTIVATED: +30 SKILL POINTS
          </div>
        </div>
      )}
    </div>
  );
}

export default App;