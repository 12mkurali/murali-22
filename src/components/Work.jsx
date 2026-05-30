import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";

export default function Work() {
  return (
    <>
      <section id="work">
        <div className="sec-pad">
          <div className="reveal">
            <p className="sec-label">Selected Work</p>
            <h2 className="sec-title">UI / UX <em>Projects</em></h2>
          </div>
          <div className="gold-rule reveal"></div>


          <div className="uiux-section-label reveal">
            <p className="sec-label" style={{ marginBottom: '12px' }}>UI/UX Figma Showcase</p>
            <p style={{ fontSize: '12px', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.65 }}>Three Figma projects — from design systems to live prototypes. Click any card to open in Figma.</p>
          </div>

          <div className="uiux-grid">
            <div className="uiux-card reveal">
              <div className="uiux-thumb">
                <div className="uiux-thumb-fallback">
                  <svg width="48" height="48" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 57C14.748 57 19 52.748 19 47.5V38H9.5C4.252 38 0 42.252 0 47.5C0 52.748 4.252 57 9.5 57Z" fill="#0ACF83" /><path d="M0 28.5C0 23.252 4.252 19 9.5 19H19V38H9.5C4.252 38 0 33.748 0 28.5Z" fill="#A259FF" /><path d="M0 9.5C0 4.252 4.252 0 9.5 0H19V19H9.5C4.252 19 0 14.748 0 9.5Z" fill="#F24E1E" /><path d="M19 0H28.5C33.748 0 38 4.252 38 9.5C38 14.748 33.748 19 28.5 19H19V0Z" fill="#FF7262" /><path d="M38 28.5C38 33.748 33.748 38 28.5 38C23.252 38 19 33.748 19 28.5C19 23.252 23.252 19 28.5 19C33.748 19 38 23.252 38 28.5Z" fill="#1ABCFE" /></svg>
                  <p>Design System</p>
                </div>
                <div className="uiux-thumb-overlay"><span>Open in Figma ↗</span></div>
                <a href="https://www.figma.com/design/BXf4bkfHEgPJnQDsrNDeP5" target="_blank" rel="noreferrer" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></a>
              </div>
              <div className="uiux-body">
                <p className="uiux-card-num">Project 01 · Design</p>
                <h3 className="uiux-card-title">UI/UX Design System</h3>
                <p className="uiux-card-desc">A seamless, human-centered digital experience — designed with precision, iterated with purpose. Complete component library and design tokens.</p>
                <div className="uiux-card-tags">
                  <span className="uiux-card-tag">Figma</span>
                  <span className="uiux-card-tag">UI Design</span>
                  <span className="uiux-card-tag">Design System</span>
                  <span className="uiux-card-tag">Prototyping</span>
                </div>
                <a className="uiux-card-link" href="https://www.figma.com/design/BXf4bkfHEgPJnQDsrNDeP5" target="_blank" rel="noreferrer">
                  Open in Figma
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            </div>

            <div className="uiux-card reveal">
              <div className="uiux-thumb">
                <div className="uiux-thumb-fallback">
                  <svg width="48" height="48" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 57C14.748 57 19 52.748 19 47.5V38H9.5C4.252 38 0 42.252 0 47.5C0 52.748 4.252 57 9.5 57Z" fill="#0ACF83" /><path d="M0 28.5C0 23.252 4.252 19 9.5 19H19V38H9.5C4.252 38 0 33.748 0 28.5Z" fill="#A259FF" /><path d="M0 9.5C0 4.252 4.252 0 9.5 0H19V19H9.5C4.252 19 0 14.748 0 9.5Z" fill="#F24E1E" /><path d="M19 0H28.5C33.748 0 38 4.252 38 9.5C38 14.748 33.748 19 28.5 19H19V0Z" fill="#FF7262" /><path d="M38 28.5C38 33.748 33.748 38 28.5 38C23.252 38 19 33.748 19 28.5C19 23.252 23.252 19 28.5 19C33.748 19 38 23.252 38 28.5Z" fill="#1ABCFE" /></svg>
                  <p>Interactive Prototype</p>
                </div>
                <div className="uiux-thumb-overlay"><span>Open in Figma ↗</span></div>
                <a href="https://www.figma.com/proto/XxJpjvGe9SEOlpqjYoKDAa" target="_blank" rel="noreferrer" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></a>
              </div>
              <div className="uiux-body">
                <p className="uiux-card-num">Project 02 · Prototype</p>
                <h3 className="uiux-card-title">Interactive Prototype</h3>
                <p className="uiux-card-desc">Where function meets beauty — a prototype that breathes life into wireframes through fluid interaction and micro-animations.</p>
                <div className="uiux-card-tags">
                  <span className="uiux-card-tag">Prototype</span>
                  <span className="uiux-card-tag">User Flow</span>
                  <span className="uiux-card-tag">Interaction</span>
                  <span className="uiux-card-tag">High-Fidelity</span>
                </div>
                <a className="uiux-card-link" href="https://www.figma.com/proto/XxJpjvGe9SEOlpqjYoKDAa" target="_blank" rel="noreferrer">
                  Open in Figma
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            </div>

            <div className="uiux-card reveal">
              <div className="uiux-thumb">
                <div className="uiux-thumb-fallback">
                  <svg width="48" height="48" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 57C14.748 57 19 52.748 19 47.5V38H9.5C4.252 38 0 42.252 0 47.5C0 52.748 4.252 57 9.5 57Z" fill="#0ACF83" /><path d="M0 28.5C0 23.252 4.252 19 9.5 19H19V38H9.5C4.252 38 0 33.748 0 28.5Z" fill="#A259FF" /><path d="M0 9.5C0 4.252 4.252 0 9.5 0H19V19H9.5C4.252 19 0 14.748 0 9.5Z" fill="#F24E1E" /><path d="M19 0H28.5C33.748 0 38 4.252 38 9.5C38 14.748 33.748 19 28.5 19H19V0Z" fill="#FF7262" /><path d="M38 28.5C38 33.748 33.748 38 28.5 38C23.252 38 19 33.748 19 28.5C19 23.252 23.252 19 28.5 19C33.748 19 38 23.252 38 28.5Z" fill="#1ABCFE" /></svg>
                  <p>E-Commerce</p>
                </div>
                <div className="uiux-thumb-overlay"><span>Open in Figma ↗</span></div>
                <a href="https://www.figma.com/design/iZRwN1S7MBaopyfziOajEm?node-id=0-1" target="_blank" rel="noreferrer" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></a>
              </div>
              <div className="uiux-body">
                <p className="uiux-card-num">Project 03 · E-Commerce</p>
                <h3 className="uiux-card-title">E-Commerce Experience</h3>
                <p className="uiux-card-desc">Detail-obsessed layouts built for clarity. Fully responsive shopping experience with thoughtful UX research and a polished design system.</p>
                <div className="uiux-card-tags">
                  <span className="uiux-card-tag">E-commerce</span>
                  <span className="uiux-card-tag">UX Research</span>
                  <span className="uiux-card-tag">Design System</span>
                  <span className="uiux-card-tag">Figma</span>
                </div>
                <a className="uiux-card-link" href="https://www.figma.com/design/iZRwN1S7MBaopyfziOajEm?node-id=0-1" target="_blank" rel="noreferrer">
                  Open in Figma
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="uiux-section-label reveal" style={{ marginTop: '80px' }}>
            <p className="sec-label" style={{ marginBottom: '12px' }}>Graphic Design Showcase</p>
            <p style={{ fontSize: '12px', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.65 }}>A collection of creative posters and graphic design work.</p>
          </div>

          <div className="uiux-grid">
            {/* Poster 1 */}
            <div className="uiux-card reveal">
              <div className="uiux-thumb">
                <img src={Img1} alt="Poster 1" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                <div className="uiux-thumb-overlay"><span>View Poster ↗</span></div>
                <a href={Img1} target="_blank" rel="noreferrer" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></a>
              </div>
              <div className="uiux-body">
                <p className="uiux-card-num">Graphic Design · Poster</p>
                <h3 className="uiux-card-title">Cyberpunk Aesthetic</h3>
                <p className="uiux-card-desc">Visually striking poster design blending typography and futuristic color theory.</p>
                <div className="uiux-card-tags">
                  <span className="uiux-card-tag">Photoshop</span>
                  <span className="uiux-card-tag">Typography</span>
                </div>
                <a className="uiux-card-link" href={Img1} target="_blank" rel="noreferrer">
                  View High Res
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            </div>

            {/* Poster 2 */}
            <div className="uiux-card reveal">
              <div className="uiux-thumb">
                <img src={Img2} alt="Poster 2" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                <div className="uiux-thumb-overlay"><span>View Poster ↗</span></div>
                <a href={Img2} target="_blank" rel="noreferrer" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></a>
              </div>
              <div className="uiux-body">
                <p className="uiux-card-num">Graphic Design · Poster</p>
                <h3 className="uiux-card-title">Minimalist Type</h3>
                <p className="uiux-card-desc">Focusing on negative space, grid systems, and bold Swiss typography principles.</p>
                <div className="uiux-card-tags">
                  <span className="uiux-card-tag">Illustrator</span>
                  <span className="uiux-card-tag">Grid</span>
                </div>
                <a className="uiux-card-link" href="#" target="_blank" rel="noreferrer">
                  View High Res
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            </div>

            {/* Poster 3 */}
            <div className="uiux-card reveal">
              <div className="uiux-thumb">
                <img src={Img3} alt="Poster 3" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                <div className="uiux-thumb-overlay"><span>View Poster ↗</span></div>
                <a href={Img3} target="_blank" rel="noreferrer" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></a>
              </div>
              <div className="uiux-body">
                <p className="uiux-card-num">Graphic Design · Poster</p>
                <h3 className="uiux-card-title">Abstract Geometry</h3>
                <p className="uiux-card-desc">A vivid exploration of shapes, overlapping colors, and geometric balance.</p>
                <div className="uiux-card-tags">
                  <span className="uiux-card-tag">Photoshop</span>
                  <span className="uiux-card-tag">Abstract</span>
                </div>
                <a className="uiux-card-link" href={Img3} target="_blank" rel="noreferrer">
                  View High Res
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            </div>

            {/* Poster 4 */}
            <div className="uiux-card reveal">
              <div className="uiux-thumb">
                <img src={Img4} alt="Poster 4" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                <div className="uiux-thumb-overlay"><span>View Poster ↗</span></div>
                <a href={Img4} target="_blank" rel="noreferrer" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></a>
              </div>
              <div className="uiux-body">
                <p className="uiux-card-num">Graphic Design · Poster</p>
                <h3 className="uiux-card-title">Event Promo</h3>
                <p className="uiux-card-desc">High-contrast promotional poster designed for an underground music festival.</p>
                <div className="uiux-card-tags">
                  <span className="uiux-card-tag">Illustrator</span>
                  <span className="uiux-card-tag">Layout</span>
                </div>
                <a className="uiux-card-link" href={Img4} target="_blank" rel="noreferrer">
                  View High Res
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            </div>
          </div>


          <div className="dev-card reveal">
            <div>
              <p className="dev-label">Dev Work &amp; Open Source</p>
              <h3>React Innovations —<br /><em>Crafted with Precision</em></h3>
              <p>UI/UX concepts transformed into high-performance interfaces using React.js — clean component architecture with the visual language designed in Figma. Explore all 8 repositories on GitHub / 12mkurali.</p>
              <div className="dev-tags">
                <span className="dev-tag">React.js</span>
                <span className="dev-tag">HTML5</span>
                <span className="dev-tag">CSS3</span>
                <span className="dev-tag">Bootstrap</span>
                <span className="dev-tag">JavaScript</span>
              </div>
            </div>
            <a className="btn-fill" href="https://github.com/12mkurali" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>GitHub ↗</a>
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}
