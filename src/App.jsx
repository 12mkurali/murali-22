import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';

function App() {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
}

export default App;
