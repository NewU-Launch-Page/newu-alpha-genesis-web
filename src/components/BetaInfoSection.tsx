
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, Users, Zap, Clock } from 'lucide-react';

const BetaInfoSection = () => {
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

    const section = document.getElementById('beta-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="beta-info" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Badge className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 text-lg animate-pulse">
              🚀 BETA VERSION
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            You're Using NewU Beta
          </h2>
          <p className="text-xl text-gray-300">
            Experience the future of fitness technology
          </p>
        </div>

        {/* Main Info Card */}
        <Card className={`glass-card mb-8 transition-all duration-1000 delay-200 hover:scale-102 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <CardContent className="p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                  Limited Features Available
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You're experiencing a preview version of NewU with core features enabled. 
                  We're continuously improving and adding new capabilities based on your feedback.
                </p>
              </div>
            </div>

            {/* Feature Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                { name: 'AI Food Tracking', status: '✅ Active', color: 'text-green-400' },
                { name: 'Bill Scanner', status: '✅ Active', color: 'text-green-400' },
                { name: 'Gym Finder', status: '⏳ Coming Soon', color: 'text-yellow-400' },
                { name: 'Community Features', status: '🔧 In Development', color: 'text-blue-400' }
              ].map((feature, index) => (
                <div 
                  key={feature.name}
                  className={`flex items-center justify-between p-3 rounded-lg bg-white/5 transition-all duration-300 delay-${index * 100} hover:bg-white/10 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                >
                  <span className="text-gray-300">{feature.name}</span>
                  <span className={feature.color}>{feature.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Migration Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className={`glass-card transition-all duration-1000 delay-400 hover:scale-102 group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-xl font-orbitron font-bold text-white">User Migration</h3>
              </div>
              <p className="text-gray-300">
                We are gradually migrating existing users to this new platform. 
                Your data and progress will be preserved during the transition.
              </p>
            </CardContent>
          </Card>

          <Card className={`glass-card transition-all duration-1000 delay-600 hover:scale-102 group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-orbitron font-bold text-white">Full Launch</h3>
              </div>
              <p className="text-gray-300">
                All features will be fully unlocked in the final launch. 
                Beta users get exclusive early access and special pricing.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <Clock className="w-5 h-5" />
            <span>Beta Phase: Active</span>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span>Full Launch: Q2 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaInfoSection;
