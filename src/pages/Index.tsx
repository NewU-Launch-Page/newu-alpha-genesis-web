
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureCarousel from '@/components/FeatureCarousel';
import AtmanAISection from '@/components/AtmanAISection';
import BetaFormSection from '@/components/BetaFormSection';
import BetaBadgeSection from '@/components/BetaBadgeSection';
import BetaInfoSection from '@/components/BetaInfoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeatureCarousel />
      <AtmanAISection />
      <BetaFormSection />
      <BetaBadgeSection />
      <BetaInfoSection />
      <Footer />
    </div>
  );
};

export default Index;
