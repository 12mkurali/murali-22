export default function About() {
  return (
    <>
      <section id="about">
        <div className="sec-pad">
          <div className="reveal">
            <p className="sec-label">About Me</p>
            <h2 className="sec-title">Designing with <em>intention.</em></h2>
          </div>

          <div className="about-grid">
            <div className="about-body reveal">
              <p>Software Developer with 1+ year of experience in Graphic Design and UI/UX — focused on creating user-friendly, responsive designs that solve real problems.</p>
              <p>Bachelor of Computer Science from Saraswathi Narayanan College, Madurai (76%). Frontend internship at Kevell Guru — delivered 3 major projects.</p>
              <p>I believe the best interfaces are the ones users don't notice. They just work, feel right, and leave an impression that's hard to articulate but impossible to forget.</p>
              <div className="about-quote">
                <p>"Great design is invisible — I make it unforgettable."</p>
              </div>
            </div>

            <div className="reveal">
              <p className="skills-label">Skills &amp; Tools</p>
              <div className="skills-wrap">
                <span className="skill">Figma</span>
                <span className="skill">Adobe XD</span>
                <span className="skill">HTML5</span>
                <span className="skill">CSS3</span>
                <span className="skill">Bootstrap</span>
                <span className="skill">React.js</span>
                <span className="skill">JavaScript</span>
                <span className="skill">Canva</span>
                <span className="skill">Photoshop</span>
                <span className="skill">GitHub</span>
              </div>
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-val">5+</div>
                  <div className="stat-key">Projects Delivered</div>
                </div>
                <div className="stat">
                  <div className="stat-val">6+</div>
                  <div className="stat-key">Design Tools</div>
                </div>
                <div className="stat">
                  <div className="stat-val" style={{ fontSize: '30px', lineHeight: 1.15, paddingTop: '4px' }}>Kevell</div>
                  <div className="stat-key">Internship</div>
                </div>
                <div className="stat">
                  <div className="stat-val" style={{ fontSize: '30px', lineHeight: 1.15, paddingTop: '4px' }}>Madurai</div>
                  <div className="stat-key">Location, TN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}
