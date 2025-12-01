import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Spotlight } from './ui/Spotlight';
import { SplineScene } from './ui/SplineScene';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col md:flex-row items-center justify-center overflow-hidden pt-20 md:pt-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row h-full items-center">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center order-2 md:order-1 mt-10 md:mt-0">
          <div className="inline-flex items-center gap-2 border border-neutral-800 bg-neutral-900/50 rounded-full px-3 py-1 w-fit mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-neutral-400 font-medium tracking-wide font-mono">AVAILABLE FOR HIRE</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
            RUCHIT DAS.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-lg mb-10 font-light leading-relaxed">
            Architecting intelligence. Specializing in <span className="text-white font-medium">Generative AI</span>, <span className="text-white font-medium">LLMs</span>, and <span className="text-white font-medium">Computer Vision</span>. 
            Bridging the gap between raw algorithms and human experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group"
            >
              View Work <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex gap-2 justify-center sm:justify-start">
              <SocialLink href="https://github.com/Rcidshacker" icon={<Github className="w-5 h-5"/>} />
              <SocialLink href="https://linkedin.com/in/ruchit-das-3b6a8a252" icon={<Linkedin className="w-5 h-5"/>} />
              <SocialLink href="mailto:ruchitdas36@gmail.com" icon={<Mail className="w-5 h-5"/>} />
            </div>
          </div>
        </div>

        {/* Right Spline Scene */}
        <div className="flex-1 relative h-[400px] md:h-[600px] w-full order-1 md:order-2">
          <SplineScene 
            // Using a tech-focused spline scene (cube/robot abstract)
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:text-white transition-all text-neutral-400 hover:border-neutral-600"
    >
      {icon}
    </a>
  );
}
