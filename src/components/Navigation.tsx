
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBetaForm = () => {
    const betaForm = document.getElementById('beta-form');
    if (betaForm) {
      betaForm.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        <div className={`mx-2 sm:mx-4 lg:mx-8 rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'glass-card backdrop-blur-2xl' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img 
                  src="/lovable-uploads/fee49e0a-00a1-4376-8dd4-b98526fff769.png" 
                  alt="NewU Logo" 
                  className="h-8 w-8 sm:h-10 sm:w-10"
                />
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <span className="text-xl sm:text-2xl font-orbitron font-bold gradient-text">
                    NewU
                  </span>
                  <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full animate-pulse">
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

              {/* Desktop CTA Buttons */}
              <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
                <Button 
                  variant="ghost" 
                  className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-white/10 text-sm"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={scrollToBetaForm}
                  className="glow-button text-white font-semibold px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base"
                >
                  Join Beta
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:bg-white/10"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-4 right-4 glass-card rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">
                Pricing
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">
                Contact
              </a>
              <div className="pt-4 border-t border-white/20">
                <Button 
                  variant="ghost" 
                  className="w-full text-gray-300 hover:text-white hover:bg-white/10 mb-3"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={scrollToBetaForm}
                  className="w-full glow-button text-white font-semibold py-3 rounded-full"
                >
                  Join Beta Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
