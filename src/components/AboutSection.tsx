import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '@/assets/about-team.jpg';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="HOBS - Hind Ordnance & Ballistics Systems Team"
                className="w-full h-auto rounded-sm shadow-elevated"
              />
              {/* Accent Border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-sm -z-10" />
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -left-8 bg-primary p-6 rounded-sm shadow-glow">
                <div className="text-4xl font-heading font-bold text-primary-foreground">15+</div>
                <div className="text-sm text-primary-foreground/80 uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
              About HOBS
            </span>
            <h2 className="section-title mb-6">
              Making Our Nation <span className="text-gradient">Atmanirbhar</span> in Defence
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Hind Ordnance & Ballistics Systems (HOBS) stands at the forefront of India's defence manufacturing revolution. 
              With a vision to transform the nation into a global defence manufacturing hub, we combine 
              cutting-edge technology with indigenous innovation.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive capabilities span across ordnance systems, ballistics, missiles, 
              ammunition, and advanced defence technologies. Every product we develop embodies our commitment to 
              excellence, precision, and national security.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Indigenous Development', 'Global Standards', 'Advanced R&D', 'Quality Excellence'].map(
                (feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                )
              )}
            </div>

            <Link to="/about" className="btn-primary inline-block">
              Know More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
