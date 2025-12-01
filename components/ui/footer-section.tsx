import * as React from "react"
import { Button } from "./button"
import { Input } from "./input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react"

export function FooterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter logic would go here
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/80 backdrop-blur-xl text-neutral-200 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-display font-bold tracking-tight text-white">Ruchit Das</h2>
            <p className="mb-6 text-neutral-400 text-sm">
              Architecting the future with AI. Join the network for updates on new libraries and research.
            </p>
            <form className="relative" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-neutral-900 border-neutral-800 focus:border-emerald-500 focus:ring-emerald-500/20 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Navigation</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-emerald-400 text-neutral-400">
                Home
              </a>
              <a href="#projects" className="block transition-colors hover:text-emerald-400 text-neutral-400">
                Works
              </a>
              <a href="https://github.com/Rcidshacker" target="_blank" className="block transition-colors hover:text-emerald-400 text-neutral-400">
                Open Source
              </a>
              <a href="https://linkedin.com/in/ruchit-das-3b6a8a252" target="_blank" className="block transition-colors hover:text-emerald-400 text-neutral-400">
                Experience
              </a>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <address className="space-y-2 text-sm not-italic text-neutral-400">
              <p>Remote / Global</p>
              <p>Available for contracts</p>
              <p className="pt-2">ruchitdas36@gmail.com</p>
            </address>
          </div>

          {/* Column 4: Socials */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://github.com/Rcidshacker" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white hover:border-emerald-500/50">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                        </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://linkedin.com/in/ruchit-das-3b6a8a252" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white hover:border-emerald-500/50">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                        </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="mailto:ruchitdas36@gmail.com">
                        <Button variant="outline" size="icon" className="rounded-full bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white hover:border-emerald-500/50">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                        </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send an Email</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-900 pt-8 text-center md:flex-row">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Ruchit Das. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-neutral-500">
            <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                System Operational
            </span>
          </nav>
        </div>
      </div>
    </footer>
  )
}