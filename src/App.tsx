import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="app" style={{ overflow: 'hidden' }}>
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
