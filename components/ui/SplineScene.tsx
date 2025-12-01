import React, { Suspense, lazy } from 'react';
import { SplineSceneProps } from '../../types';

// Lazy load the heavy 3D library
const Spline = lazy(() => import('@splinetool/react-spline'));

export const SplineScene: React.FC<SplineSceneProps> = ({ scene, className }) => {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-neutral-900/50 rounded-lg border border-neutral-800">
          <div className="flex flex-col items-center gap-2">
             <div className="w-6 h-6 border-2 border-white/20 border-t-emerald-500 rounded-full animate-spin"></div>
             <span className="text-xs text-neutral-500 font-mono">LOADING 3D ASSETS...</span>
          </div>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
};
