import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

export const ProjectCard: React.FC<Project> = ({ title, category, description, tags, link, icon }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-neutral-900/40 border border-neutral-800 hover:border-neutral-600 rounded-xl transition-all duration-500 overflow-hidden relative h-full flex flex-col"
    >
       {/* Hover Glow Effect */}
       <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
       
       <div className="p-6 flex-1 flex flex-col">
         <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-black/50 rounded-lg border border-neutral-800 text-neutral-300 group-hover:text-white transition-colors">
              {icon}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 bg-white text-black rounded-full">
              <ArrowUpRight className="w-4 h-4" />
            </div>
         </div>
         
         <p className="text-xs font-mono text-emerald-500/80 uppercase tracking-widest mb-2">{category}</p>
         <h3 className="text-2xl font-display font-bold text-neutral-100 group-hover:text-white transition-colors mb-3">
           {title}
         </h3>
         <p className="text-neutral-400 leading-relaxed text-sm mb-6 flex-1">
           {description}
         </p>
         
         <div className="flex flex-wrap gap-2 mt-auto">
           {tags.map((tag) => (
             <span key={tag} className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded bg-black/20 uppercase tracking-wider">
               {tag}
             </span>
           ))}
         </div>
       </div>
    </a>
  );
};
