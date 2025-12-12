import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import capabilityUas from '@/assets/capability-uas.jpg';
import capabilityAero from '@/assets/capability-aero.jpg';
import capabilityMissiles from '@/assets/capability-missiles.jpg';
import capabilityAmmo from '@/assets/capability-ammo.jpg';
import capabilityLand from '@/assets/capability-land.jpg';
import capabilityNaval from '@/assets/capability-naval.jpg';

const capabilities = [
  {
    id: 'ordnance',
    title: 'Ordnance Systems',
    description: 'Advanced ordnance solutions for modern warfare and tactical operations.',
    image: capabilityUas,
    link: '/capabilities#ordnance',
  },
  {
    id: 'ballistics',
    title: 'Ballistics Technology',
    description: 'Precision ballistics systems and advanced projectile technologies.',
    image: capabilityAero,
    link: '/capabilities#ballistics',
  },
  {
    id: 'missiles',
    title: 'Missiles & Weapons',
    description: 'Cutting-edge missile systems and precision-guided munitions.',
    image: capabilityMissiles,
    link: '/capabilities#missiles',
  },
  {
    id: 'ammunition',
    title: 'Ammunition',
    description: 'State-of-the-art ammunition manufacturing with AI-driven quality control.',
    image: capabilityAmmo,
    link: '/capabilities#ammunition',
  },
  {
    id: 'land',
    title: 'Land Systems',
    description: 'Armored vehicles, artillery systems, and tactical land equipment.',
    image: capabilityLand,
    link: '/capabilities#land',
  },
  {
    id: 'naval',
    title: 'Naval Systems',
    description: 'Advanced naval platforms and maritime defence solutions.',
    image: capabilityNaval,
    link: '/capabilities#naval',
  },
];

const CapabilitiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
            Our Capabilities
          </span>
          <h2 className="section-title mb-6">
            Comprehensive Defence <span className="text-gradient">Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From unmanned aerial systems to naval platforms, we deliver end-to-end defence 
            solutions that meet the highest standards of quality and performance.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <Link
              key={capability.id}
              to={capability.link}
              className={`capability-card group rounded-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(capability.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredCard === capability.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link to="/capabilities" className="btn-outline inline-block">
            View All Capabilities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
