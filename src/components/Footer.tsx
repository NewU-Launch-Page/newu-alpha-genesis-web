
import { useState } from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: '📺', url: '#', color: 'hover:text-red-400' },
    { name: 'Discord', icon: '💬', url: '#', color: 'hover:text-indigo-400' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:text-blue-400' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' }
  ];

  const contactEmails = [
    'newu.fitapp@gmail.com',
    'newu.help@gmail.com',
    'newu.dev@gmail.com',
    'newu.feedback1@gmail.com'
  ];

  return (
    <footer className="relative py-16 px-6 lg:px-8 border-t border-white/10">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/fee49e0a-00a1-4376-8dd4-b98526fff769.png" 
                alt="NewU Logo" 
                className="h-10 w-10 hover:rotate-12 transition-transform duration-300"
              />
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-orbitron font-bold gradient-text">
                  NewU
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full animate-pulse">
                  BETA
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              India's First AI-Powered Fitness & Nutrition Assistant. 
              Transform your health journey with intelligent technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-white font-orbitron font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white font-orbitron font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                {contactEmails.map((email, index) => (
                  <div key={email} className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors duration-300 group">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <a href={`mailto:${email}`} className="text-sm break-all">{email}</a>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors duration-300 group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+918190918754" className="text-sm">+91 8190918754</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors duration-300 group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-white font-orbitron font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`w-12 h-12 glass-card border-white/20 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:rotate-12 ${social.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <span className={hoveredSocial === social.name ? 'animate-bounce' : ''}>
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span>© 2024 NewU. Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>in India</span>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
