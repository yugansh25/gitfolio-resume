import React from 'react';
import { GitBranch, Star, Users, Activity } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../data/portfolio-data';

const Stats = () => {
  const { stats } = portfolioData;

  const statCards = [
    {
      icon: GitBranch,
      label: 'Repositories',
      value: stats.totalRepos,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Activity,
      label: 'Contributions',
      value: stats.totalContributions,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Users,
      label: 'Followers',
      value: stats.followers,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Star,
      label: 'Stars Earned',
      value: stats.following,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            GitHub{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My contribution activity and engagement on GitHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Language Distribution */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Most Used Languages</h3>
            <div className="space-y-4">
              {stats.topLanguages.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-foreground/60">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Stats;
