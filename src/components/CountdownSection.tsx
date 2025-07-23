
import { useState, useEffect } from 'react';
import { Clock, Users, Zap } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(300); // Starting with 300 seats left out of 1500

  // Target date: August 5, 2025
  const targetDate = new Date('2025-08-05T00:00:00').getTime();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('countdown-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="countdown-section" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            ⏳ Countdown to Public Beta Launch
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We're opening the gates to transformation. Only <span className="text-teal-400 font-bold">1500</span> beta seats available!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <div key={item.label} className="glass-card p-6 md:p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-2">
                  {formatNumber(item.value)}
                </div>
                <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-teal-400 mr-3" />
              <span className="text-2xl md:text-3xl font-orbitron font-bold text-white">
                Join 1,200+ early users on the waitlist
              </span>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-xl md:text-2xl text-orange-400 font-semibold">
                🚀 Hurry! Only <span className="text-white font-bold">{seatsLeft}</span> Beta Access Invites Remaining
              </span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-teal-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${((1500 - seatsLeft) / 1500) * 100}%` }}
              />
            </div>
            
            <p className="text-gray-400">
              <span className="font-semibold text-white">{1500 - seatsLeft}</span> out of 1500 seats claimed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
