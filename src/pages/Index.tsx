
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import FeatureCarousel from '@/components/FeatureCarousel';
import MobileExperienceSection from '@/components/MobileExperienceSection';
import AtmanAISection from '@/components/AtmanAISection';
import BetaFormSection from '@/components/BetaFormSection';
import BetaBadgeSection from '@/components/BetaBadgeSection';
import BetaInfoSection from '@/components/BetaInfoSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingCountdownWidget from '@/components/FloatingCountdownWidget';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <FeatureCarousel />
      <MobileExperienceSection />
      <AtmanAISection />
      <BetaFormSection />
      <BetaBadgeSection />
      <BetaInfoSection />
      <FAQSection />
      <Footer />
      <FloatingCountdownWidget />
    </div>
  );
};

export default Index;
