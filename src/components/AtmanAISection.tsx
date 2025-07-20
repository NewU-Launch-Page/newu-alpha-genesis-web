
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, MessageCircle, Sparkles, Zap } from 'lucide-react';

const AtmanAISection = () => {
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

    const section = document.getElementById('atman-ai');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="atman-ai" className="py-20 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Badge className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 text-sm mb-6">
            🤖 AI Demo
          </Badge>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Meet <span className="gradient-text">Atman AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your intelligent fitness companion that understands Indian food, your lifestyle, and helps you make better health decisions every day
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chat Interface Mockup */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="glass-card bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/20">
              <CardContent className="p-6">
                {/* Chat Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-orbitron font-bold">Atman AI</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Online</span>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4 mb-4">
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl px-4 py-3 max-w-xs">
                      <div className="text-teal-400 text-sm font-medium mb-1">340 kcal</div>
                      <div className="text-xs text-gray-400">P: 18g  C: 28g  F: 12g</div>
                      <div className="text-xs text-gray-500 mt-1">2:31 PM</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl px-4 py-3 max-w-xs">
                      <div className="text-white">Yes, suggest a 15-minute workout</div>
                      <div className="text-xs text-teal-100 mt-1">2:32 PM</div>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl px-4 py-3 max-w-sm">
                      <div className="text-white text-sm">
                        Perfect! Try this 15-min home workout: 3 rounds of 10 push-ups, 15 squats, 20 jumping jacks, 30-sec plank. This will burn ~80 kcal and complement your meal perfectly! 💪
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span className="text-amber-400 text-xs">Personalized workout suggested</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">2:33 PM</div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
                  <input 
                    type="text" 
                    placeholder="Type your message to Atman AI..."
                    className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 outline-none text-sm"
                    disabled
                  />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features List */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">Understands Indian Food</h3>
                  <p className="text-gray-300">
                    Recognizes dal, sabzi, roti, rice portions and provides accurate nutritional information for Indian cuisine.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">Contextual Conversations</h3>
                  <p className="text-gray-300">
                    Remembers your preferences, goals, and past conversations to provide increasingly personalized advice.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">Real-time Suggestions</h3>
                  <p className="text-gray-300">
                    Get instant workout recommendations, meal adjustments, and motivational tips based on your current activity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2">
                ✨ Beta Access Included
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtmanAISection;
