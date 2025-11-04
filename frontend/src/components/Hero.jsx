import React from 'react';
import { Github, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { profile } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-mono text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
                  {profile.tagline}
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70">
                {profile.bio}
              </p>
              <div className="flex items-center space-x-2 text-foreground/60">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                onClick={() => window.open(profile.githubUrl, '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
