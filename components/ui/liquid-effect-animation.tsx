"use client"

import { useEffect, useRef } from "react"

interface LiquidEffectAnimationProps {
    id?: string;
}

export function LiquidEffectAnimation({ id = 'liquid-canvas' }: LiquidEffectAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const scriptRef = useRef<HTMLScriptElement | null>(null)
    const cleanupRef = useRef<(() => void) | null>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        // SANITIZATION: Ensure ID only contains safe characters to prevent XSS
        const safeId = id.replace(/[^a-zA-Z0-9_-]/g, '');
        const canvasId = safeId;
        const appKey = `__liquidApp_${safeId}`;
        let mounted = true;

        // Load the script dynamically
        const script = document.createElement("script")
        script.type = "module"
        script.textContent = `
      import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';
      
      const canvas = document.getElementById('${canvasId}');
      if (canvas && !window['${appKey}']) {
        try {
          const app = LiquidBackground(canvas);
          // Use a purple/black gradient image that matches the theme
          app.loadImage('https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop&q=80');
          
          // Optimized material properties for better performance
          app.liquidPlane.material.metalness = 0.7;
          app.liquidPlane.material.roughness = 0.3;
          
          // Reduced displacement for smoother performance
          app.liquidPlane.uniforms.displacementScale.value = 3.5;
          
          // Disable rain for better performance
          app.setRain(false);
          
          window['${appKey}'] = app;
        } catch (error) {
          console.error('Liquid effect initialization error:', error);
        }
      }
    `

        document.body.appendChild(script)
        scriptRef.current = script;

        // Cleanup function
        cleanupRef.current = () => {
            if (!mounted) return;

            try {
                if (window[appKey]) {
                    if (typeof window[appKey].dispose === 'function') {
                        window[appKey].dispose();
                    }
                    delete window[appKey];
                }
            } catch (error) {
                console.error('Cleanup error:', error);
            }

            if (scriptRef.current && document.body.contains(scriptRef.current)) {
                try {
                    document.body.removeChild(scriptRef.current);
                } catch (error) {
                    console.error('Script removal error:', error);
                }
            }
        };

        return () => {
            mounted = false;
            if (cleanupRef.current) {
                cleanupRef.current();
            }
        }
    }, [id])

    return (
        <div
            className="fixed inset-0 m-0 w-full h-full touch-none overflow-hidden bg-gradient-to-br from-black via-purple-950 to-black"
            style={{ fontFamily: '"Montserrat", serif' }}
        >
            <canvas
                ref={canvasRef}
                id={id}
                className="fixed inset-0 w-full h-full opacity-90"
            />
        </div>
    )
}

declare global {
    interface Window {
        [key: string]: any;
    }
}
