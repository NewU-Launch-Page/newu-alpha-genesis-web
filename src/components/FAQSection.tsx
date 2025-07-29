
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "What is NewU?",
      answer: "NewU is an AI-powered fitness app designed to help you track calories, monitor daily progress, get personalized plans, and achieve transformation goals."
    },
    {
      question: "How can I join the NewU beta program?",
      answer: "Fill the onboarding form on this site. You'll receive the APK and Beta Badge via email after submission."
    },
    {
      question: "Is NewU free during beta?",
      answer: "Yes, all features are free during the beta phase. Premium plans will be introduced post-launch."
    },
    {
      question: "Will my data be saved when the app launches officially?",
      answer: "Yes, your data and progress will be securely migrated to the official app."
    },
    {
      question: "What is Atman AI?",
      answer: "Atman is your AI wellness coach inside NewU. It offers personalized fitness, diet, and motivation guidance."
    },
    {
      question: "Can I track food and calories daily?",
      answer: "Yes! You can log meals, calculate calories, and view a daily timeline of progress."
    },
    {
      question: "What do I get as a beta user?",
      answer: "Beta users receive early access to all features and a Provisional Beta Badge sent to your email."
    },
    {
      question: "How do I get support or report an issue?",
      answer: "You can contact us at newu.help@gmail.com or check contact details in the footer."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq-section" className="py-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold gradient-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about NewU and our beta program
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="glass-card border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between group focus:outline-none"
              >
                <span className="text-white font-medium text-lg group-hover:text-teal-400 transition-colors duration-300">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
