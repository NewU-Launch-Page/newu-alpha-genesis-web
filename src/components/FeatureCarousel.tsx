
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
    gradient: 'from-green-400 to-teal-500'
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
    gradient: 'from-blue-400 to-cyan-500'
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
    gradient: 'from-teal-400 to-blue-500'
  },
  {
    icon: '📓',
    title: 'Food + Exercise Logging',
    description: 'Simple interface to track what you eat and how you move every day.',
    gradient: 'from-violet-400 to-purple-500'
  }
];

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const getVisibleFeatures = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % features.length;
      visible.push(features[index]);
    }
    return visible;
  };

  return (
    <section id="features" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-6">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover powerful AI-driven tools designed to transform your fitness journey
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="sm"
            className="glass-card border-white/30 text-white hover:bg-white/10"
          >
            ← Previous
          </Button>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isAutoPlaying ? '⏸️' : '▶️'} {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="sm"
            className="glass-card border-white/30 text-white hover:bg-white/10"
          >
            Next →
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getVisibleFeatures().map((feature, index) => (
            <Card
              key={`${feature.title}-${currentIndex}-${index}`}
              className="glass-card hover:scale-105 transition-all duration-500 group cursor-pointer animate-fade-in"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <CardContent className="p-8">
                <div className="text-center">
                  {/* Icon with gradient background */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-teal-400 scale-125'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
