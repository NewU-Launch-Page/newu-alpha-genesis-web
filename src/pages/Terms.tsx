
import { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Terms = () => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const termsContent = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using the NewU website or services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not access or use our platform."
    },
    {
      title: "Description of Service",
      content: "NewU provides a beta version of its AI-powered fitness and wellness platform. This includes features like personalized workout plans, AI chat support (\"Atman\"), calorie tracking, and transformation tracking. As this is a beta version, some features may be experimental or incomplete."
    },
    {
      title: "Beta Access Disclaimer",
      content: `This is a beta release and may contain bugs, errors, or other issues.

The service may be modified or discontinued at any time.

We do not guarantee any specific results or data reliability.

You use the platform at your own risk.`
    },
    {
      title: "User Responsibilities",
      content: `You agree to:

Provide accurate information when signing up.

Use the platform for personal, non-commercial purposes only.

Not misuse or interfere with the service (e.g., hacking, scraping, reverse engineering).`
    },
    {
      title: "Intellectual Property",
      content: "All content, branding, UI/UX elements, text, and visuals on the NewU platform are the property of NewU and protected under copyright laws. You may not reproduce or distribute any part without written permission."
    },
    {
      title: "Privacy",
      content: "We value your privacy. Data collected during usage is governed by our Privacy Policy. We use data to improve your experience and ensure personalized recommendations."
    },
    {
      title: "Limitation of Liability",
      content: "NewU shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the service, including but not limited to data loss, injury, or fitness-related outcomes."
    },
    {
      title: "Third-Party Tools and Analytics",
      content: "Our platform may use third-party tools (e.g., Google Analytics, PostHog) for performance tracking and improvement. By using our services, you agree to the data practices of those tools."
    },
    {
      title: "Cookies",
      content: "We may use cookies to improve your browsing experience and for analytics. You may choose to disable cookies in your browser settings, but this may affect platform functionality."
    },
    {
      title: "Modifications",
      content: "We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the service after changes means you accept the revised Terms."
    },
    {
      title: "Contact",
      content: "For questions or support, please email us at:\n📩 newu.help@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-gray-300 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/fee49e0a-00a1-4376-8dd4-b98526fff769.png" 
              alt="NewU Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-orbitron font-bold gradient-text">NewU</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-orbitron font-bold gradient-text mb-4">
              Terms & Conditions
            </h1>
            <div className="text-gray-400 space-y-2">
              <p className="text-sm">Effective Date: 29.07.2025</p>
              <p className="text-sm">Website: https://www.newu.fit</p>
              <p className="text-sm">Owner: NewU</p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-4 mb-12">
            {termsContent.map((section, index) => (
              <div 
                key={index}
                className="glass-card border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between group focus:outline-none"
                >
                  <span className="text-white font-medium text-lg group-hover:text-teal-400 transition-colors duration-300">
                    {section.title}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openSections.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openSections.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-300 leading-relaxed border-t border-white/10 pt-4 whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Acknowledgment */}
          <div className="glass-card border-white/10 rounded-2xl p-6 text-center">
            <p className="text-white font-bold text-lg">
              By continuing to access or use the NewU platform, you acknowledge and agree to these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
