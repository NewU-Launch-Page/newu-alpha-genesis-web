
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/fee49e0a-00a1-4376-8dd4-b98526fff769.png" 
                alt="NewU Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-orbitron font-bold gradient-text">NewU</span>
            </div>
            <p className="text-gray-400 text-sm">
              India's First AI-Powered Fitness & Nutrition Assistant. Transform your health journey with cutting-edge technology.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">AI Food Scanner</span></li>
              <li><span className="text-gray-400">Smart Bill Analysis</span></li>
              <li><span className="text-gray-400">Atman Chatbot</span></li>
              <li><span className="text-gray-400">Workout Planner</span></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="mailto:support@newu.fit" className="text-gray-400 hover:text-white transition-colors block">
                support@newu.fit
              </a>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <span className="sr-only">YouTube</span>
                  📺
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <span className="sr-only">Discord</span>
                  🎮
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 NewU. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-400">Made with</span>
            <span className="text-red-400">❤️</span>
            <span className="text-gray-400">in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
