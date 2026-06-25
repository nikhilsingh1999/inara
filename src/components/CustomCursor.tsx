'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center starting point
    cursor.style.left = '-100px';
    cursor.style.top = '-100px';

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHover = () => cursor.classList.add('cursor-hover');
    const removeHover = () => cursor.classList.remove('cursor-hover');

    window.addEventListener('mousemove', onMouseMove);

    const updateListeners = () => {
      const targets = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"], .group, .clickable-hover'
      );
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', addHover);
        target.removeEventListener('mouseleave', removeHover);
        target.addEventListener('mouseenter', addHover);
        target.addEventListener('mouseleave', removeHover);
      });
    };

    updateListeners();

    // Re-attach whenever DOM changes
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      const targets = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"], .group, .clickable-hover'
      );
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', addHover);
        target.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden md:block"
      id="cursor"
    />
  );
}
