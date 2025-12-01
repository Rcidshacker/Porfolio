import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ShaderPlane } from './ui/background-paper-shaders';

// Augment JSX.IntrinsicElements to include React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any
      group: any
    }
  }
}

export const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <group scale={[6, 6, 1]} rotation={[0, 0, Math.PI / 4]}>
                <ShaderPlane 
                  position={[0, 0, -2]} 
                  color1="#10b981"  /* Emerald-500 equivalent */
                  color2="#000000" 
                />
            </group>
        </Suspense>
      </Canvas>
    </div>
  );
};