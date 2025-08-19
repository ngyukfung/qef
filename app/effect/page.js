"use client";

import { useEffect, useState } from 'react';
import { useRef } from 'react';

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref]);

  return isIntersecting;
}

export default function Home() {
  const animatedRef = useRef(null);
  const isVisible = useIsVisible(animatedRef);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Spacer to allow scrolling */}
      <div className="h-[100vh]"></div>

      <div
        ref={animatedRef}
        className={`w-64 h-32 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg
          transition-all duration-700 ease-in-out
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
      >
        Slide in from left!
      </div>
    </div>
  );
}