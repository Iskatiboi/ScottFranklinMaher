import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app" style={{ overflow: 'hidden' }}>
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
