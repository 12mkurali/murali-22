export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="hero">
        <div className="hero-bg-text" aria-hidden="true">UI/UX</div>
        <div className="hero-orb" aria-hidden="true"></div>

        <p className="hero-eyebrow">UI / UX Designer &amp; Frontend Developer</p>
        <h1 className="hero-name">
          Murali<br />
          <em>krishnan</em><br />
          <span className="outline">S</span>
        </h1>
        <p className="hero-sub">
          Human-centered. Detail-obsessed. Always iterating.<br />
          Great design is invisible — I make it <strong>unforgettable.</strong>
        </p>
        <div className="cta-row">
          <button className="btn-fill" onClick={scrollToWork}>View Work</button>
          <a className="btn-ghost" href="mailto:senthilgopal273@gmail.com">Get in Touch</a>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">Scroll to explore</div>
      </section>
      
      <div className="divider"></div>
    </>
  );
}
