import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const curRef = useRef(null);
  const curRRef = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const curR = curRRef.current;
    if (!cur || !curR) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    };

    let animationFrameId;
    const loop = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      curR.style.left = rx + 'px';
      curR.style.top = ry + 'px';
      animationFrameId = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMouseMove);
    loop();

    const addHover = () => document.body.classList.add('hov');
    const removeHover = () => document.body.classList.remove('hov');

    const attachHoverEvents = () => {
      document.querySelectorAll('a, button, .proj-item, .skill').forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    attachHoverEvents();

    const observer = new MutationObserver(() => {
      attachHoverEvents();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef}></div>
      <div id="cur-r" ref={curRRef}></div>
    </>
  );
}
