
import { useState, useEffect } from 'react';
import { X, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const FloatingCountdownWidget = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [seatsLeft, setSeatsLeft] = useState(300);
  const [isMinimized, setIsMinimized] = useState(false);

  // Target date: August 5, 2025
  const targetDate = new Date('2025-08-05T00:00:00').getTime();

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

  const scrollToBetaForm = () => {
    const betaForm = document.getElementById('beta-form');
    if (betaForm) {
      betaForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`glass-card transition-all duration-300 ${
        isMinimized ? 'w-16 h-16' : 'w-80 max-w-[90vw]'
      }`}>
        {isMinimized ? (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-full h-full flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200"
          >
            🚀
          </button>
        ) : (
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🚀</span>
                <span className="text-sm font-semibold text-white">Join Fast! Beta Access Closing Soon!</span>
              </div>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center space-x-1 text-xs text-gray-300 mb-1">
                <Clock className="w-3 h-3" />
                <span>⏳ Time Left:</span>
              </div>
              <div className="text-sm font-mono text-teal-400">
                {formatNumber(timeLeft.days)}d {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
              </div>
            </div>
            
            <div className="mb-3">
              <div className="text-xs text-orange-400 mb-1">
                🎫 Only <span className="font-bold text-white">{seatsLeft}</span> Seats Left
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((1500 - seatsLeft) / 1500) * 100}%` }}
                />
              </div>
            </div>
            
            <button
              onClick={scrollToBetaForm}
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Claim Your Spot Now!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCountdownWidget;
