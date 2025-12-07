import React from 'react';
import { Code2, Terminal, Atom, Server, Zap, Database, BarChart3, Brain, GitBranch, Container, Monitor } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/portfolio-data';

const iconMap = {
  Code2,
  Terminal,
  Atom,
  Server,
  Zap,
  Database,
  BarChart3,
  Brain,
  GitBranch,
  Container,
  Monitor
};

const Skills = () => {
  const { skills } = portfolioData;

  const categories = {
    language: { title: 'Languages', color: 'from-blue-500 to-cyan-500' },
    framework: { title: 'Frameworks', color: 'from-cyan-500 to-teal-500' },
    database: { title: 'Databases', color: 'from-teal-500 to-green-500' },
    domain: { title: 'Domains', color: 'from-purple-500 to-pink-500' },
    tool: { title: 'Tools', color: 'from-orange-500 to-red-500' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const categoryInfo = categories[category];
            return (
              <Card
                key={category}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className={`text-lg font-semibold bg-gradient-to-r ${categoryInfo.color} bg-clip-text text-transparent`}>
                      {categoryInfo.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => {
                      const Icon = iconMap[skill.icon];
                      return (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="flex items-center gap-1.5 py-1.5 px-3 hover:scale-105 transition-transform"
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {skill.name}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
