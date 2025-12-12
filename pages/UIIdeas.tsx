import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Plus, Copy, Check, X } from 'lucide-react';
import { Background3D } from '../components/Background3D';
import { LiquidEffectAnimation } from '../components/ui/liquid-effect-animation';

// Integration prompt for copy-paste
const LIQUID_EFFECT_PROMPT = `Liquid Effect
You are given a task to integrate an existing React component in the codebase
The codebase should support:
- shadcn project structure
- Tailwind CSS
- Typescript
If it doesn't, provide instructions on how to setup project via shadcn CLI, install
Tailwind or Typescript.
Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on
why it's important to create this folder
Copy-paste this component to /components/ui folder:
\`\`\`tsx
liquid-effect-animation.tsx
"use client"
import { useEffect, useRef } from "react"
export function LiquidEffectAnimation() {
const canvasRef = useRef<HTMLCanvasElement>(null)
const appRef = useRef<any>(null)
useEffect(() => {
if (!canvasRef.current) return
// Load the script dynamically
const script = document.createElement("script")
script.type = "module"
script.textContent = \\\`

import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-
components@0.0.22/build/backgrounds/liquid1.min.js';

const canvas = document.getElementById('liquid-canvas');
if (canvas) {
const app = LiquidBackground(canvas);
app.loadImage('https://i.pinimg.com/1200x/38/71/
c9/3871c9c7a6066df6763c97dc3285c907.jpg');
app.liquidPlane.material.metalness = 0.75;
app.liquidPlane.material.roughness = 0.25;
app.liquidPlane.uniforms.displacementScale.value = 5;
app.setRain(false);
window.__liquidApp = app;
}
\\\`

document.body.appendChild(script)
return () => {
if (window.__liquidApp && window.__liquidApp.dispose) {
window.__liquidApp.dispose()
}
document.body.removeChild(script)
}
}, [])
return (
<div
className="fixed inset-0 m-0 w-full h-full touch-none overflow-hidden"
style={{ fontFamily: '"Montserrat", serif' }}
>

<canvas ref={canvasRef} id="liquid-canvas" className="fixed inset-0 w-full h-
full" />

</div>
)
}
declare global {
interface Window {
__liquidApp?: any
}
}

demo.tsx

import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-
animation";

export default function DemoOne() {
return <LiquidEffectAnimation />;
}
\`\`\`

Implementation Guidelines
1. Analyze the component structure and identify all required dependencies
2. Review the component's arguments and state
3. Identify any required context providers or hooks and install them
4. Questions to Ask
- What data/props will be passed to this component?
- Are there any specific state management requirements?
- Are there any required assets (images, icons, etc.)?
- What is the expected responsive behavior?
- What is the best place to use this component in the app?
Steps to integrate
0. Copy paste all the code above in the correct directories
1. Install external dependencies
2. Fill image assets with Unsplash stock images you know exist
3. Use lucide-react icons for svgs or logos if component requires them`;

// Placeholder for UI ideas - you can add your components here
const uiIdeas = [
    {
        id: 1,
        title: "Liquid Effect Animation",
        description: "Interactive 3D liquid background with metallic surface and dynamic displacement effects.",
        preview: (
            <div className="relative w-full h-full overflow-hidden">
                <LiquidEffectAnimation id="liquid-canvas-preview" />
            </div>
        ),
        prompt: LIQUID_EFFECT_PROMPT,
    },
];

export function UIIdeas() {
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIdea, setSelectedIdea] = useState<typeof uiIdeas[0] | null>(null);

    const handleCopy = async (prompt: string, id: number) => {
        try {
            await navigator.clipboard.writeText(prompt);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const openModal = (idea: typeof uiIdeas[0]) => {
        setSelectedIdea(idea);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setTimeout(() => setSelectedIdea(null), 300);
    };

    return (
        <main className="min-h-screen text-neutral-200 selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden font-sans">
            {/* 3D Background */}
            <Background3D />

            {/* GLOBAL NOISE TEXTURE */}
            <div
                className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}
            ></div>

            {/* Header */}
            <header className="relative z-10 py-8 px-6">
                <div className="container mx-auto flex items-center justify-between">
                    <Link
                        to="/"
                        className="group flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Back to Portfolio</span>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 pt-12 pb-24 px-6">
                <div className="container mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-8 h-8 text-purple-400" />
                        <span className="text-purple-400 font-medium tracking-wide uppercase text-sm">
                            Creative Lab
                        </span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
                        UI Ideas
                    </h1>

                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        A collection of experimental UI components, animations, and design concepts.
                        This is where creativity meets code.
                    </p>

                    <div className="h-1 w-32 mt-8 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent rounded-full"></div>
                </div>
            </section>

            {/* Ideas Grid */}
            <section className="relative z-10 py-12 px-6 bg-black/30 backdrop-blur-md border-t border-white/10 min-h-[50vh]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {uiIdeas.map((idea) => (
                            <div
                                key={idea.id}
                                className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-white/10 
                           hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
                            >
                                {/* Preview Area */}
                                <div
                                    className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 
                                    flex items-center justify-center border-b border-white/5 relative overflow-hidden cursor-pointer"
                                    onClick={() => openModal(idea)}
                                >
                                    {idea.preview ? (
                                        idea.preview
                                    ) : (
                                        <div className="text-neutral-600 flex flex-col items-center gap-2">
                                            <Plus className="w-8 h-8" />
                                            <span className="text-sm">Preview</span>
                                        </div>
                                    )}

                                    {/* Copy Button */}
                                    {idea.prompt && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCopy(idea.prompt!, idea.id);
                                            }}
                                            className="absolute top-3 right-3 p-2 bg-neutral-900/80 backdrop-blur-sm 
                                            border border-white/10 rounded-lg hover:border-purple-500/50 
                                            transition-all duration-300 group/btn z-10"
                                            title="Copy integration prompt"
                                        >
                                            {copiedId === idea.id ? (
                                                <Check className="w-4 h-4 text-emerald-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-neutral-400 group-hover/btn:text-purple-400" />
                                            )}
                                        </button>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-semibold text-white mb-2 
                                 group-hover:text-purple-300 transition-colors duration-300">
                                        {idea.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm">
                                        {idea.description}
                                    </p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
                                </div>

                                {/* Copy Success Toast */}
                                {copiedId === idea.id && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 
                                    bg-emerald-500/90 backdrop-blur-sm rounded-lg text-white text-sm 
                                    font-medium shadow-lg animate-pulse z-20">
                                        ✓ Copied to clipboard!
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Add New Idea Card */}
                        <div className="group relative bg-neutral-900/30 backdrop-blur-sm rounded-2xl border border-dashed 
                            border-neutral-700 hover:border-purple-500/50 transition-all duration-500 
                            flex items-center justify-center min-h-[280px] cursor-pointer">
                            <div className="flex flex-col items-center gap-3 text-neutral-500 group-hover:text-purple-400 transition-colors duration-300">
                                <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300">
                                    <Plus className="w-8 h-8" />
                                </div>
                                <span className="font-medium">Add New Idea</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Note */}
            <section className="relative z-10 py-12 px-6 text-center">
                <p className="text-neutral-500 text-sm">
                    ✨ More experiments coming soon...
                </p>
            </section>

            {/* Modal Popup */}
            {modalOpen && selectedIdea && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={closeModal}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

                    {/* Modal Content */}
                    <div
                        className="relative w-full max-w-[60vw] h-[60vh] bg-neutral-900/95 backdrop-blur-xl 
                        border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-50 p-2 bg-neutral-800/80 backdrop-blur-sm 
                            border border-white/10 rounded-lg hover:border-red-500/50 hover:bg-red-500/10
                            transition-all duration-300 group"
                            title="Close"
                        >
                            <X className="w-5 h-5 text-neutral-400 group-hover:text-red-400" />
                        </button>

                        {/* Component Preview */}
                        <div className="w-full h-full">
                            <div className="relative w-full h-full overflow-hidden">
                                <LiquidEffectAnimation id="liquid-canvas-modal" />
                            </div>
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="font-display text-2xl font-bold text-white mb-2">
                                {selectedIdea.title}
                            </h3>
                            <p className="text-neutral-300 text-sm">
                                {selectedIdea.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default UIIdeas;

