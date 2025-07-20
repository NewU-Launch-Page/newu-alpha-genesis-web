
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Mail, Star, Crown } from 'lucide-react';

const BetaBadgeSection = () => {
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

    const section = document.getElementById('beta-badge');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="beta-badge" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 text-lg mb-6">
            🎖️ EXCLUSIVE REWARD
          </Badge>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Claim Your Provisional Beta User Badge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As a founding beta user of NewU, you'll receive a provisional digital badge after completing the form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Badge Mockup */}
          <div className={`flex justify-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-30 animate-pulse scale-110"></div>
              
              {/* Badge */}
              <Card className="glass-card bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-400/30 relative z-10 w-64 h-64 flex items-center justify-center">
                <CardContent className="text-center p-6">
                  <div className="mb-4">
                    <Crown className="w-16 h-16 text-amber-400 mx-auto mb-2 animate-float" />
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 mx-auto flex items-center justify-center mb-2">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white font-orbitron font-bold text-lg mb-1">FOUNDING USER</h3>
                  <p className="text-amber-300 text-sm font-medium">NewU Beta 2024</p>
                  <div className="mt-3 text-xs text-gray-400">Digital Badge</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Information */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Mail className="w-8 h-8 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2">How to Claim</h3>
                    <p className="text-gray-300 mb-4">
                      This badge will be emailed to you after form submission and can be claimed via your submitted email address.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2">Exclusive Benefits</h3>
                    <p className="text-gray-300 mb-4">
                      This badge is exclusive to early users and gives you priority access to future updates, rewards, and official recognition as a founding user.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Priority support access</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Early feature previews</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Founding user recognition</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Special rewards program</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaBadgeSection;
