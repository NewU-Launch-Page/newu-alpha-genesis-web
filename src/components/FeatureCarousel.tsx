
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: '🍱',
    title: 'Food Calorie Tracking with AI',
    description: 'Log meals and instantly see calories, macros, and hidden ingredients.',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    icon: '🧾',
    title: 'Smart Bill Scanner',
    description: 'Upload your grocery bill and get AI breakdown of healthy/unhealthy items.',
    gradient: 'from-green-400 to-blue-500'
  },
  {
    icon: '🏋️',
    title: 'Find Gyms Near You',
    description: 'Use GPS or city selector to find real nearby gyms with directions, contact, and reviews.',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: '🧠',
    title: 'Atman Chatbot',
    description: 'Personalized AI chatbot for nutrition, fitness analysis, and real-time suggestions.',
    gradient: 'from-teal-400 to-cyan-500'
  },
  {
    icon: '📆',
    title: 'NewU Calendar',
    description: 'Auto-logs your progress, meals, exercise, mood, and recommends daily tasks.',
    gradient: 'from-indigo-400 to-purple-500'
  },
  {
    icon: '🏘️',
    title: 'FitTalk Community',
    description: 'Join discussions, ask experts, or find workout partners nearby.',
    gradient: 'from-pink-400 to-rose-500'
  },
  {
    icon: '📈',
    title: 'Daily Progress & Mood Tracker',
    description: 'Upload photos, log calories, track mood, and visualize timeline improvements.',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '🥗',
    title: 'Custom AI Diet Generator',
    description: 'Get personalized Indian diet plans based on your fitness goal.',
    gradient: 'from-lime-400 to-green-500'
  },
  {
    icon: '💪',
    title: 'AI-Based Workout Planner',
    description: 'Auto-suggests daily workouts (home or gym) with reps, calories burned.',
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    icon: '📓',
    title: 'Food + Exercise Logging',
    description: 'Simple interface to track what you eat and how you move every day.',
    gradient: 'from-emerald-400 to-teal-500'
  }
];

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
  };

  const getVisibleFeatures = () => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % features.length;
      result.push({ ...features[index], displayIndex: i });
    }
    return result;
  };

  return (
    <section id="features" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-6 animate-fade-in">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Experience the future of fitness and nutrition with our AI-powered tools
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass-card border-white/20 text-white hover:bg-white/10 w-12 h-12 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass-card border-white/20 text-white hover:bg-white/10 w-12 h-12 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Feature Cards */}
          <div className="flex gap-6 px-16 overflow-hidden">
            {getVisibleFeatures().map((feature, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className={`glass-card transition-all duration-700 transform hover:scale-105 group cursor-pointer flex-1 min-w-0 animate-scale-in`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateX(${index * 10}px) rotateY(${index * 2}deg)`
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Feature Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-gray-300 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  {/* Animated Border */}
                  <div className={`mt-6 h-1 bg-gradient-to-r ${feature.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-teal-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
