
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className={`mx-4 lg:mx-8 rounded-2xl transition-all duration-500 ${
        isScrolled 
          ? 'glass-card backdrop-blur-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/fee49e0a-00a1-4376-8dd4-b98526fff769.png" 
                alt="NewU Logo" 
                className="h-10 w-10"
              />
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-orbitron font-bold gradient-text">
                  NewU
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full animate-pulse">
                  BETA
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
                Pricing
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-white/10"
              >
                Sign In
              </Button>
              <Button className="glow-button text-white font-semibold px-6 py-2 rounded-full">
                Join Beta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
