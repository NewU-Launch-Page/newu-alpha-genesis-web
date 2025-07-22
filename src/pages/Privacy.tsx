
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Privacy = () => {
  const navigate = useNavigate();

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
              Privacy Policy
            </h1>
            <div className="text-gray-400 space-y-2">
              <p className="text-sm">Effective Date: 29.07.2025</p>
              <p className="text-sm">Website: https://www.newu.fit</p>
              <p className="text-sm">Owner: NewU</p>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                At NewU, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and beta services. By accessing or using the NewU platform, you consent to the practices described in this policy.
              </p>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-teal-400 mb-2">a. Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">When you sign up or interact with our platform, we may collect:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Name</li>
                    <li>• Email address</li>
                    <li>• Age or birth year</li>
                    <li>• Gender</li>
                    <li>• Height, weight, and fitness goals (if provided)</li>
                    <li>• Profile picture (optional)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-teal-400 mb-2">b. Usage Data</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">We may collect anonymized data about how you use the website, including:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Browser type and version</li>
                    <li>• IP address</li>
                    <li>• Device type and OS</li>
                    <li>• Pages viewed and features used</li>
                    <li>• Clickstream data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-teal-400 mb-2">c. Cookies & Tracking Tools</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies and similar technologies to enhance your experience and gather analytics. You can control cookies via your browser settings.
                  </p>
                </div>
              </div>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-2">We use the collected data to:</p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>• Personalize your fitness and wellness experience</li>
                <li>• Improve platform features and performance</li>
                <li>• Offer customer support</li>
                <li>• Send occasional service updates</li>
                <li>• Monitor traffic and usage patterns using third-party analytics</li>
              </ul>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-2">We use third-party tools like:</p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>• Google Analytics for traffic monitoring</li>
                <li>• PostHog for feature usage analysis</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-2">
                These services may collect anonymous information under their respective privacy policies.
              </p>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Storage and Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We use Supabase to securely store user data. All user data is encrypted during transmission. However, please note that no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-2">You have the right to:</p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>• Access the data we hold about you</li>
                <li>• Request correction or deletion of your data</li>
                <li>• Withdraw consent at any time</li>
                <li>• Disable cookies through browser settings</li>
              </ul>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
              </p>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                NewU is not intended for users under the age of 13. We do not knowingly collect personal data from children without parental consent.
              </p>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">9. International Users</h2>
              <p className="text-gray-300 leading-relaxed">
                If you are accessing NewU from outside India, please be aware that your data may be stored and processed in servers located within India or elsewhere.
              </p>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">10. Updates to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically. When we do, we will revise the "Effective Date" above. Continued use of our platform signifies your acceptance of the updated policy.
              </p>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, you can contact us at:<br />
                📩 newu.help@gmail.com
              </p>
            </section>

            <section className="glass-card border-white/10 rounded-2xl p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">✅ Your Consent</h2>
              <p className="text-white font-semibold">
                By using our website or services, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
