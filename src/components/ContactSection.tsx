import { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent Successfully',
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
              Get In Touch
            </span>
            <h2 className="section-title mb-6">
              We're Here <span className="text-gradient">For You</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Have questions about our capabilities or interested in partnership opportunities? 
              Our team is ready to assist you. Reach out to us and let's discuss how we can work together.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-sm transition-all duration-300 hover:border-primary/50 hover:shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">Corporate Headquarters</h4>
                  <p className="text-muted-foreground text-sm">
                    HOBS Corporate House<br />
                    Defence Technology Park, Sector 42<br />
                    New Delhi - 110001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-sm transition-all duration-300 hover:border-primary/50 hover:shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    +91 11 2345 6789<br />
                    +91 11 2345 6790
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-sm transition-all duration-300 hover:border-primary/50 hover:shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    info@hobsdefence.com<br />
                    careers@hobsdefence.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="bg-card border border-border rounded-sm p-8 shadow-elevated">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Share to hear back from us
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="capabilities">Capabilities Information</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  By continuing, you agree to our{' '}
                  <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
