import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import StatsSection from '@/components/StatsSection';
import MediaSection from '@/components/MediaSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <CapabilitiesSection />
        <StatsSection />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
