import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Lightbulb, Palette, Wand2 } from 'lucide-react';

export function UIIdeasSection() {
    return (
        <section className="relative z-10 py-24 bg-black/40 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                            <span className="text-purple-400 font-medium tracking-wide uppercase text-xs">
                                Creative Lab
                            </span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
                            UI Ideas
                        </h2>
                        <p className="text-neutral-400 max-w-lg">
                            A playground for experimental components, animations, and design concepts that push creative boundaries.
                        </p>
                    </div>

                    <Link
                        to="/ui-ideas"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full 
                       bg-gradient-to-r from-purple-600 to-pink-600 
                       hover:from-purple-500 hover:to-pink-500
                       text-white font-medium transition-all duration-300
                       shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
                       hover:scale-105"
                    >
                        <span>Explore Ideas</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Preview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 
                          border border-white/10 hover:border-purple-500/30 transition-all duration-500
                          overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4
                              group-hover:scale-110 transition-transform duration-300">
                                <Lightbulb className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-white mb-2">Animations</h3>
                            <p className="text-neutral-400 text-sm">
                                Smooth transitions, micro-interactions, and motion design experiments.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 
                          border border-white/10 hover:border-pink-500/30 transition-all duration-500
                          overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4
                              group-hover:scale-110 transition-transform duration-300">
                                <Palette className="w-6 h-6 text-pink-400" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-white mb-2">Components</h3>
                            <p className="text-neutral-400 text-sm">
                                Reusable UI elements with creative styling and interactions.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 
                          border border-white/10 hover:border-cyan-500/30 transition-all duration-500
                          overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4
                              group-hover:scale-110 transition-transform duration-300">
                                <Wand2 className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-white mb-2">Effects</h3>
                            <p className="text-neutral-400 text-sm">
                                Visual effects, shaders, and creative CSS techniques.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative Line */}
                <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            </div>
        </section>
    );
}

export default UIIdeasSection;
