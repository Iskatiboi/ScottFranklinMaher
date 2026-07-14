import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import About from './components/About';
import PageTransition from './components/PageTransition';

const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  const location = useLocation();

  return (
    <div className="app" style={{ overflow: 'hidden', background: '#0a0a0a' }}>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Suspense fallback={<div className="app" style={{ height: '100vh', background: '#0a0a0a' }} />}><PageTransition><Hero /></PageTransition></Suspense>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/projects" element={<Suspense fallback={<div className="app" style={{ height: '100vh', background: '#0a0a0a' }} />}><PageTransition><Projects /></PageTransition></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div className="app" style={{ height: '100vh', background: '#0a0a0a' }} />}><PageTransition><Contact /></PageTransition></Suspense>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
