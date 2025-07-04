
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Free',
    price: '₹0',
    period: '',
    description: 'Get started for free',
    features: [
      '1 Food Scan/Day',
      '1 Bill Scanner',
      '10 Atman Queries',
      '1 Diet Generator'
    ],
    buttonText: 'Get Started',
    popular: false,
    gradient: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Daily',
    price: '₹15',
    period: '/day',
    description: 'Perfect for daily users',
    features: [
      'Everything in Free',
      'Daily Reports',
      '3D Form Check',
      'Smart Reminders'
    ],
    buttonText: 'Choose Plan',
    popular: true,
    gradient: 'from-teal-400 to-blue-500'
  },
  {
    name: 'Monthly',
    price: '₹399',
    period: '/mo',
    description: 'Best value for commitment',
    features: [
      'All Above Features',
      'AI Timeline',
      'Mental Health Tracker',
      'Smart Meals',
      'Community Access'
    ],
    buttonText: 'Choose Plan',
    popular: false,
    gradient: 'from-purple-400 to-pink-500'
  }
];

const PricingSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start your journey with our flexible pricing options
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative glass-card transition-all duration-500 group cursor-pointer ${
                plan.popular 
                  ? 'scale-105 ring-2 ring-teal-400/50' 
                  : hoveredIndex === index 
                    ? 'scale-105' 
                    : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <span>⭐</span>
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                {/* Plan Name */}
                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full font-semibold py-3 rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'glow-button text-white'
                      : 'glass-card border-white/30 text-white hover:bg-white/10'
                  }`}
                  onClick={() => {
                    if (plan.name !== 'Free') {
                      alert('Please ask the developer for payment integration API setup');
                    }
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            All plans include 24/7 support and regular updates. 
            <span className="text-teal-400 ml-2">Cancel anytime.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
