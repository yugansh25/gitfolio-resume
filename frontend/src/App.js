import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import { Loader2 } from 'lucide-react';
import './App.css';

// Lazy load non-critical components
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Stats = lazy(() => import('./components/Stats'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App min-h-screen bg-background text-foreground transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Suspense fallback={<LoadingFallback />}>
              <Skills />
              <Projects />
              <Stats />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={<LoadingFallback />}>
            <Footer />
          </Suspense>
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
