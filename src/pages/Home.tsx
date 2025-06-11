import HeroSection from '../components/portfolio/HeroSection';
import GallerySection from '../components/portfolio/GallerySection';
import AboutSection from '../components/portfolio/AboutSection';
import ServicesSection from '../components/portfolio/ServicesSection';
import TestimonialsSection from '../components/portfolio/TestimonialsSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';
import FloatingWhatsApp from '../components/portfolio/FloatingWhatsApp';

export default function Home() {

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir="rtl">
      <HeroSection onContactClick={scrollToContact} />
      <GallerySection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}