import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ShaderPlane } from './ui/background-paper-shaders';

// Import R3F types to extend JSX.IntrinsicElements
import type { } from '@react-three/fiber';

// R3F JSX type declarations
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
    <div className="fixed inset-0 -z-50 pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <group scale={[30, 30, 1]} rotation={[0, 0, Math.PI / 4]}>
            <ShaderPlane
              position={[0, 0, -5]}
              color1="#000000"     /* Pure Black */
              color2="#151515"     /* Very subtle Off-Black (Charcoal) */
            />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};