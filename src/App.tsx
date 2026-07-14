import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import PageTransition from './components/PageTransition';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  const location = useLocation();

  return (
    <div className="app" style={{ overflow: 'hidden', background: '#0a0a0a' }}>
      <Header />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div style={{ height: '100vh', background: '#0a0a0a' }} />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </div>
  );
}

export default App;
