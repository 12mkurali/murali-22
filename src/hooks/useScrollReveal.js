import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    const observerTarget = document.querySelectorAll('.reveal');
    observerTarget.forEach(el => obs.observe(el));

    // Observe future added elements if necessary, but typically running once per mount is enough.
    const observer = new MutationObserver(() => {
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
        obs.disconnect();
        observer.disconnect();
    }
  }, []);
}
