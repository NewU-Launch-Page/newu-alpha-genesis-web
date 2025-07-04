
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureCarousel from '@/components/FeatureCarousel';
import PricingSection from '@/components/PricingSection';
import BetaInfoSection from '@/components/BetaInfoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeatureCarousel />
      <PricingSection />
      <BetaInfoSection />
      <Footer />
    </div>
  );
};

export default Index;
