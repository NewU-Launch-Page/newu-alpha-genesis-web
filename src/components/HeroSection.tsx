
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-blue-900/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-20 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Beta Announcement Banner */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full">
            <span className="text-2xl">🚀</span>
            <span className="text-white font-medium">Now Live in Beta</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="gradient-text">Welcome to</span>
          <br />
          <span className="gradient-text">NewU Beta</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          India's First AI-Powered Fitness & Nutrition Assistant
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="glow-button text-white font-semibold px-8 py-4 rounded-full text-lg">
            ✨ Join Beta Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass-card border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg"
          >
            ⚡ Explore Features
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span>100% Free Beta</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <span>Indian Users</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
