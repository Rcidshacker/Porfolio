import React from "react";
import { cn } from "../../lib/utils";
import {
  Brain,
  Eye,
  Layers,
  Zap,
  Cloud,
  Database,
  Box,
  Share2
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Generative AI & LLMs",
      description: "Architecting custom RAG pipelines and fine-tuning large language models for specialized enterprise tasks.",
      icon: <Brain />,
    },
    {
      title: "Computer Vision",
      description: "Building real-time gesture recognition, segmentation, and spatial tracking systems using OpenCV and MediaPipe.",
      icon: <Eye />,
    },
    {
      title: "Full Stack Engineering",
      description: "Developing scalable end-to-end applications with Next.js, FastAPI, and robust distributed backend architectures.",
      icon: <Layers />,
    },
    {
      title: "Algorithmic Optimization",
      description: "Creating high-performance metaheuristic algorithms (MHA) for complex problem-solving scenarios.",
      icon: <Zap />,
    },
    {
      title: "Cloud Infrastructure",
      description: "Deploying secure, scalable microservices and serverless functions on AWS and Google Cloud Platform.",
      icon: <Cloud />,
    },
    {
      title: "Data Engineering",
      description: "Designing efficient pipelines for processing, cleaning, and analyzing massive unstructured datasets.",
      icon: <Database />,
    },
    {
      title: "Interactive 3D Web",
      description: "Crafting immersive, high-performance user experiences with Three.js, Spline, and WebGL integration.",
      icon: <Box />,
    },
    {
      title: "Open Source",
      description: "Actively contributing to the global developer community with public libraries, tools, and technical writing.",
      icon: <Share2 />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          index={index}
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400 group-hover/feature:text-emerald-500 transition-colors">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-emerald-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
