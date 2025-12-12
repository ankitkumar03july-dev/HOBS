import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import hero2 from '@/assets/hero-2.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero2})` }}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <nav className="text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Home</a> / <span className="text-primary">Contact Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              Contact Us
            </h1>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Map Section */}
        <section className="h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0661682738434!2d77.2090212!3d28.6128927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HOBS Defence Location"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
