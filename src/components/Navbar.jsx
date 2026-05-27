import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const closeMob = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + 120;
      const secs = ['hero', 'work', 'about', 'contact'];
      let cur = 'hero';
      secs.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      setActiveSection(cur);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`mob-menu ${isOpen ? 'open' : ''}`} id="mobMenu">
        <button className="mob-close" onClick={closeMob}>✕</button>
        <a href="#hero" onClick={closeMob}>Home</a>
        <a href="#work" onClick={closeMob}>Work</a>
        <a href="#about" onClick={closeMob}>About</a>
        <a href="#contact" onClick={closeMob}>Contact</a>
      </div>

      <nav id="mainNav">
        <a className="logo" href="#hero">MK<em>.</em></a>
        <ul className="nav-links">
          <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Home</a></li>
          <li><a href="#work" className={activeSection === 'work' ? 'active' : ''}>Work</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
        <button className="ham" id="ham" aria-label="Menu" onClick={() => setIsOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
    </>
  );
}
