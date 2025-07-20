
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBetaForm = () => {
    const betaForm = document.getElementById('beta-form');
    if (betaForm) {
      betaForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Beta Badge */}
        <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full glass-card mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
          <span className="text-teal-400 font-medium">🚀 Now Live in Beta</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="block gradient-text mb-2">Welcome to</span>
          <span className="block bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
            NewU Beta
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          India's First <span className="text-teal-400 font-semibold">AI-Powered</span> Fitness & Nutrition Assistant
        </p>

        {/* Feature Highlights */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {['AI Meal Tracking', 'Smart Bill Scanner', 'Personalized Workouts'].map((feature, index) => (
            <div key={feature} className="glass-card px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            onClick={scrollToBetaForm}
            className="glow-button text-white font-semibold px-8 py-4 rounded-full text-lg group"
          >
            Join Beta Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="ghost" 
            className="glass-card border-white/30 text-white px-8 py-4 rounded-full text-lg hover:bg-white/10 group"
          >
            Explore Features
            <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>

        {/* Floating AI Hologram */}
        <div className={`absolute top-1/2 right-8 hidden lg:block transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse opacity-30"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 animate-spin opacity-60"></div>
            <div className="absolute inset-8 rounded-full bg-white animate-ping"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-gray-400 text-sm">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
