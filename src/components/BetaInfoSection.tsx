
import { Card, CardContent } from '@/components/ui/card';

const BetaInfoSection = () => {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card border-yellow-400/30">
          <CardContent className="p-8 md:p-12 text-center">
            {/* Beta Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🚧</span>
              <span className="text-black font-bold">BETA VERSION</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              You're using NewU Beta – Limited Features
            </h2>

            {/* Info Points */}
            <div className="space-y-4 text-lg text-gray-300 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">ℹ️</span>
                </div>
                <p className="text-left">
                  We are migrating old users to this platform gradually
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">🔓</span>
                </div>
                <p className="text-left">
                  All features will be fully unlocked in final launch
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">🎯</span>
                </div>
                <p className="text-left">
                  Your feedback helps us improve the platform
                </p>
              </div>
            </div>

            {/* Current Beta Features */}
            <div className="glass-card p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Currently Available in Beta:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Food Scanning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Bill Scanner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Atman Chatbot</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">⏳</span>
                  <span className="text-gray-400">Gym Finder</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">⏳</span>
                  <span className="text-gray-400">Community</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">⏳</span>
                  <span className="text-gray-400">Full Calendar</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="text-center">
              <h3 className="text-xl font-semibold gradient-text mb-4">
                Expected Full Launch: Q2 2024
              </h3>
              <p className="text-gray-400">
                Stay tuned for updates and be the first to experience the complete NewU ecosystem!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BetaInfoSection;
