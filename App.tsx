import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { FeaturesSectionWithHoverEffects } from './components/ui/FeaturesSection';
import { FooterSection } from './components/ui/footer-section';
// Background3D moved to index.tsx for route persistence
import { UIIdeasSection } from './components/UIIdeasSection';
import { Brain, Cpu, Layers } from 'lucide-react';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    // REMOVED "bg-black" so the background is visible
    <main className="min-h-screen text-neutral-200 selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden font-sans">

      {/* Background3D and noise texture are now in index.tsx for route persistence */}

      <Hero />

      {/* --- PROJECTS SECTION --- */}
      {/* Changed bg-neutral-950/80 to bg-black/30 so it is see-through */}
      <section id="projects" className="relative z-10 py-24 bg-black/30 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Selected Works</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="MHA Flow"
              category="AI & Optimization Library"
              description="A production-ready Python library featuring 130+ metaheuristic algorithms. Includes a secure Streamlit web app with AI-powered recommendations."
              tags={["Python", "Streamlit", "AutoML"]}
              link="https://pypi.org/project/mha-flow/"
              icon={<Brain className="w-8 h-8 text-purple-400" />}
            />

            <ProjectCard
              title="Nutria Health"
              category="Healthcare AI"
              description="Personalized diet plan generator for Diabetes and PCOS patients. Uses FastAPI pipelines and React frontend for seamless user experience."
              tags={["FastAPI", "React", "MongoDB"]}
              link="https://github.com/Rcidshacker/Nutria-in-react"
              icon={<Cpu className="w-8 h-8 text-emerald-400" />}
            />

            <ProjectCard
              title="Air Canvas"
              category="Computer Vision"
              description="Gesture-controlled digital canvas using OpenCV and MediaPipe. Integrated Depth-Anything V2 for high-accuracy spatial tracking."
              tags={["OpenCV", "MediaPipe", "Deep Learning"]}
              link="https://github.com/Rcidshacker/Air-canvas-new"
              icon={<Layers className="w-8 h-8 text-blue-400" />}
            />
          </div>
        </div>
      </section>

      {/* --- EXPERTISE / FEATURES SECTION --- */}
      {/* Changed bg-neutral-950 to transparent so background continues */}
      <section className="py-24 border-t border-white/10 bg-black/40 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">Technical Arsenal</h2>
            <p className="text-neutral-400 max-w-2xl">
              A comprehensive suite of tools and methodologies leveraged to build intelligent, scalable systems.
            </p>
          </div>

          <FeaturesSectionWithHoverEffects />

        </div>
      </section>

      {/* --- UI IDEAS SECTION --- */}
      <UIIdeasSection />

      {/* --- FOOTER --- */}
      <FooterSection />
    </main>
  );
}

export default App;