
import { useState } from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/newu.fitapp?utm_source=qr&igsh=NGV4MTEzaHk1MWhq',
      color: '#E4405F',
      hoverColor: 'hover:bg-[#E4405F]'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/newu-fitness-984b13377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0A66C2',
      hoverColor: 'hover:bg-[#0A66C2]'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactEmails = [
    'newu.fitapp@gmail.com',
    'newu.help@gmail.com',
    'newu.feedback1@gmail.com'
  ];

  // Premium Instagram SVG Icon
  const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  // Premium LinkedIn SVG Icon
  const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

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
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-14 h-14 glass-card border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 ${social.hoverColor} hover:border-white/40`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    color: hoveredSocial === social.name ? 'white' : social.color
                  }}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <div className={`transition-all duration-300 ${hoveredSocial === social.name ? 'scale-110' : ''}`}>
                    {social.name === 'Instagram' ? <InstagramIcon /> : <LinkedInIcon />}
                  </div>
                  
                  {/* Premium Glow Effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ 
                         background: `linear-gradient(45deg, ${social.color}20, ${social.color}10)`,
                         boxShadow: `0 0 20px ${social.color}40`
                       }}>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </div>
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
              <Link to="/terms" className="hover:text-teal-400 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="hover:text-teal-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
