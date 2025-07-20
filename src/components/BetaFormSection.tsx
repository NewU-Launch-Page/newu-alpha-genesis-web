
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BetaFormSection = () => {
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

    const section = document.getElementById('beta-form');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="beta-form" className="py-20 px-6 lg:px-8 relative overflow-hidden">
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
          <Badge className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 text-lg mb-6 animate-pulse">
            🚀 LIMITED BETA ACCESS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Join the NewU Beta Program
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fill this form to get early access to the NewU Beta APK. The download link will be shared after submission.
          </p>
        </div>

        {/* Form Container */}
        <Card className={`glass-card transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <CardContent className="p-0">
            <div className="h-[600px] overflow-hidden rounded-2xl">
              <iframe
                src="https://tally.so/r/nGO5rO"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="NewU Beta Join Form"
                className="rounded-2xl"
              />
            </div>
          </CardContent>
        </Card>

        {/* Migration Notice */}
        <div className={`mt-12 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="glass-card border-amber-500/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-400 text-lg">ℹ️</span>
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold text-white mb-2">User Migration Notice</h3>
                  <p className="text-gray-300">
                    We are gradually migrating existing users to this new platform. Your data and progress will be preserved during the transition after the launch of the official app.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BetaFormSection;
