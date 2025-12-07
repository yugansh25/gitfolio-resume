import React, { useState } from 'react';
import { Github, Mail, Linkedin, Twitter, Send, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { portfolioData } from '../data/portfolio-data';
import { toast } from '../hooks/use-toast';
import { sendEmail } from '../services/emailService';

const Contact = () => {
  const { contact } = portfolioData;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await sendEmail(formData);

      toast({
        title: "Message Sent! ✉️",
        description: result.message || "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message ❌",
        description: error.message || "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: contact.github,
      color: 'hover:text-gray-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: `mailto:${contact.email}`,
      color: 'hover:text-red-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: contact.linkedin,
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'X / Twitter',
      url: contact.twitter,
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Get in{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Connect with Me</CardTitle>
                <CardDescription>
                  Find me on these platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-secondary/30 hover:bg-secondary/50 transition-all ${social.color} group`}
                    >
                      <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{social.label}</div>
                        <div className="text-sm text-foreground/60">
                          {social.label === 'Email' ? contact.email :
                            social.label === 'X / Twitter' ? 'Follow on X' :
                              social.label === 'GitHub' ? 'View Repos' : 'Connect'}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="text-4xl">💼</div>
                  <h3 className="text-xl font-semibold">Open to Opportunities</h3>
                  <p className="text-sm text-foreground/70">
                    Currently looking for new opportunities in software development and data science.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
