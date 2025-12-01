import { ReactNode } from "react";

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  icon?: ReactNode;
}

export interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label?: string;
}

export interface SplineSceneProps {
  scene: string;
  className?: string;
}
