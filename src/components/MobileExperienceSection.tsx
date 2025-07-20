
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

const MobileExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('mobile-experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const mobileScreens = [
    {
      title: 'Home Dashboard',
      image: '/lovable-uploads/b57a3896-ee76-4087-8751-ed41dd2ac538.png',
      description: 'Your daily overview with AI recommendations'
    },
    {
      title: 'AI Chatbot',
      image: '/lovable-uploads/26e06ea4-0b73-4261-85f8-6df91a24fb51.png',
      description: 'Chat with Atman, your personal AI assistant'
    },
    {
      title: 'Food Tracking',
      image: '/lovable-uploads/51a27fd6-2baa-496e-bcb5-540c4b507082.png',
      description: 'Log meals and track nutrition effortlessly'
    },
    {
      title: 'Exercise Calculator',
      image: '/lovable-uploads/9cf7fdaf-ec8c-40e9-a933-71e66028531d.png',
      description: 'Calculate calories burned during workouts'
    },
    {
      title: 'Progress Tracker',
      image: '/lovable-uploads/7ed0efd5-f844-4715-8799-5283ce858979.png',
      description: 'Monitor your daily fitness progress'
    },
    {
      title: 'Transformation Plan',
      image: '/lovable-uploads/a6b7466c-5e9b-4b01-9f30-f831b776180b.png',
      description: 'AI-generated personalized plans'
    }
  ];

  return (
    <section id="mobile-experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-48 sm:w-64 h-48 sm:h-64 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 sm:w-80 h-56 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-card mb-6 sm:mb-8">
            <Smartphone className="w-4 sm:w-5 h-4 sm:h-5 text-teal-400" />
            <span className="text-teal-400 font-medium text-sm sm:text-base">📱 Mobile Experience</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4 sm:mb-6">
            Designed for Mobile-First
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Every screen is crafted for the best mobile experience, making fitness tracking effortless and engaging on your smartphone
          </p>
        </div>

        {/* Mobile Screenshots Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {mobileScreens.map((screen, index) => (
            <div
              key={screen.title}
              className={`transition-all duration-1000`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="glass-card p-4 sm:p-6 hover:scale-105 transition-transform duration-300 group">
                {/* Mobile Frame */}
                <div className="relative mx-auto w-48 sm:w-56 h-96 sm:h-[28rem] bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl z-10"></div>
                    
                    {/* Screen Content */}
                    <div className="w-full h-full overflow-hidden rounded-[2rem]">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                </div>

                {/* Screen Info */}
                <div className="text-center mt-6">
                  <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                    {screen.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {screen.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass-card inline-block px-6 sm:px-8 py-4 sm:py-6 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white mb-2">
              Ready to Transform Your Fitness Journey?
            </h3>
            <p className="text-gray-300 mb-4">
              Download the NewU Beta APK and start your transformation today
            </p>
            <div className="w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileExperienceSection;
