import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <Code2 className="h-4 w-4" />
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using React & Tailwind</span>
          </div>

          <div className="text-sm text-foreground/60">
            © {currentYear} yugansh.dev. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
              &lt;/&gt;
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
