import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { SplineSceneProps } from '../../types';

// Lazy load the heavy 3D library
const Spline = lazy(() => import('@splinetool/react-spline'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-900/50 rounded-lg border border-neutral-800">
    <div className="flex flex-col items-center gap-2">
      <div className="w-6 h-6 border-2 border-white/20 border-t-emerald-500 rounded-full animate-spin"></div>
      <span className="text-xs text-neutral-500 font-mono">LOADING 3D ASSETS...</span>
    </div>
  </div>
);

export const SplineScene: React.FC<SplineSceneProps> = ({ scene, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only load once
        }
      },
      { rootMargin: '100px' } // Start loading 100px before visible
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <Suspense fallback={<LoadingFallback />}>
          <Spline scene={scene} className="w-full h-full" />
        </Suspense>
      ) : (
        <LoadingFallback />
      )}
    </div>
  );
};
