import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Check } from 'lucide-react';
import hero2 from '@/assets/hero-2.jpg';
import capabilityUas from '@/assets/capability-uas.jpg';
import capabilityAero from '@/assets/capability-aero.jpg';
import capabilityMissiles from '@/assets/capability-missiles.jpg';
import capabilityAmmo from '@/assets/capability-ammo.jpg';
import capabilityLand from '@/assets/capability-land.jpg';
import capabilityNaval from '@/assets/capability-naval.jpg';

const capabilities = [
  {
    id: 'unmanned',
    title: 'Unmanned Systems',
    subtitle: 'Next-Generation UAV Technology',
    description: 'Our unmanned aerial systems represent the pinnacle of indigenous drone technology. From tactical surveillance to strategic reconnaissance, our platforms deliver unmatched performance.',
    image: capabilityUas,
    features: [
      'Drishti 10 (Starliner) - Multi-Role MALE UAS',
      'STANAG 4671 Certified Platform',
      'Over-the-horizon capabilities',
      'SATCOM-based autonomous operations',
      'Multi-payload integration',
      'Indigenous ecosystem development',
    ],
    specs: [
      { label: 'Endurance', value: '24+ Hours' },
      { label: 'Altitude', value: '30,000 ft' },
      { label: 'Payload', value: '500 kg' },
      { label: 'Range', value: '2000+ km' },
    ],
  },
  {
    id: 'aerostructures',
    title: 'Aerostructures',
    subtitle: 'Precision Aerospace Manufacturing',
    description: 'World-class aerostructure manufacturing capabilities delivering precision components for military and commercial aircraft. Our facilities meet the highest international standards.',
    image: capabilityAero,
    features: [
      'Aircraft fuselage manufacturing',
      'Wing and empennage assemblies',
      'Composite structures',
      'Precision machining',
      'Surface treatment facilities',
      'AS9100D certified processes',
    ],
    specs: [
      { label: 'Precision', value: '±0.001"' },
      { label: 'Facility', value: '500,000 sqft' },
      { label: 'Certifications', value: 'NADCAP' },
      { label: 'Clients', value: '15+ OEMs' },
    ],
  },
  {
    id: 'missiles',
    title: 'Missiles & Weapons',
    subtitle: 'Advanced Precision Strike Systems',
    description: 'Cutting-edge missile and weapons systems development, from precision-guided munitions to advanced air defence solutions. Partnership with global defence leaders.',
    image: capabilityMissiles,
    features: [
      'Precision-guided munitions',
      'Air-to-air missile systems',
      'Surface-to-air missile systems',
      'Anti-tank guided missiles',
      'Loitering munitions',
      'Fire control systems',
    ],
    specs: [
      { label: 'Accuracy', value: 'CEP <1m' },
      { label: 'Range', value: 'Up to 300km' },
      { label: 'Guidance', value: 'GPS/INS' },
      { label: 'Platforms', value: 'Multi-role' },
    ],
  },
  {
    id: 'ammunition',
    title: 'Ammunition',
    subtitle: 'State-of-the-Art Manufacturing',
    description: 'Our AI-driven ammunition manufacturing facility produces cutting-edge small arms and artillery ammunition meeting global standards. Export-ready quality.',
    image: capabilityAmmo,
    features: [
      'Small arms ammunition',
      'Artillery shells',
      'Tank ammunition',
      'Aircraft ammunition',
      'AI-driven quality control',
      'Export-grade manufacturing',
    ],
    specs: [
      { label: 'Capacity', value: '500M rounds/year' },
      { label: 'Calibers', value: '20+ types' },
      { label: 'Quality', value: '99.99%' },
      { label: 'Exports', value: '15+ countries' },
    ],
  },
  {
    id: 'land',
    title: 'Land Systems',
    subtitle: 'Armored & Tactical Solutions',
    description: 'Comprehensive land systems portfolio including armored vehicles, artillery systems, and tactical equipment. Built for the most demanding operational environments.',
    image: capabilityLand,
    features: [
      'Armored fighting vehicles',
      'Main battle tank components',
      'Artillery systems',
      'Combat support vehicles',
      'Tactical communication systems',
      'Soldier modernization programs',
    ],
    specs: [
      { label: 'Protection', value: 'Level IV+' },
      { label: 'Mobility', value: 'All-terrain' },
      { label: 'Systems', value: '50+ types' },
      { label: 'Support', value: 'Lifecycle' },
    ],
  },
  {
    id: 'naval',
    title: 'Naval Systems',
    subtitle: 'Maritime Defence Excellence',
    description: 'Advanced naval platforms and maritime defence solutions. From warship components to submarine systems, we deliver comprehensive naval capabilities.',
    image: capabilityNaval,
    features: [
      'Warship structural components',
      'Naval weapons systems',
      'Submarine components',
      'Naval electronics',
      'Maritime surveillance systems',
      'Offshore patrol vessels',
    ],
    specs: [
      { label: 'Vessels', value: '25+ completed' },
      { label: 'Tonnage', value: 'Up to 5000T' },
      { label: 'Systems', value: 'Integrated' },
      { label: 'Depth', value: '500m rated' },
    ],
  },
];

const Capabilities = () => {
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero2})` }}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <nav className="text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Home</a> / <span className="text-primary">Capabilities</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              Our Capabilities
            </h1>
          </div>
        </section>

        {/* Capabilities Navigation */}
        <section className="py-8 bg-secondary border-b border-border sticky top-0 z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
              {capabilities.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveCapability(cap)}
                  className={`px-6 py-3 font-heading font-semibold text-sm uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeCapability.id === cap.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border text-foreground hover:border-primary'
                  }`}
                >
                  {cap.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Capability Detail */}
        <section id={activeCapability.id} className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Image */}
              <div className="relative animate-fade-in">
                <img
                  src={activeCapability.image}
                  alt={activeCapability.title}
                  className="w-full rounded-sm shadow-elevated"
                />
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {activeCapability.specs.map((spec) => (
                    <div key={spec.label} className="bg-card border border-border p-4 rounded-sm text-center">
                      <div className="text-2xl font-heading font-bold text-primary">{spec.value}</div>
                      <div className="text-sm text-muted-foreground">{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="animate-slide-in-right">
                <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                  {activeCapability.subtitle}
                </span>
                <h2 className="section-title mb-6">{activeCapability.title}</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {activeCapability.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  <h3 className="font-heading font-bold text-foreground text-lg">Key Features</h3>
                  <div className="grid gap-3">
                    {activeCapability.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Request Information
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* All Capabilities Grid */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                Explore All
              </span>
              <h2 className="section-title">
                Complete Defence <span className="text-gradient">Portfolio</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => {
                    setActiveCapability(cap);
                    window.scrollTo({ top: 600, behavior: 'smooth' });
                  }}
                  className="group text-left bg-card border border-border rounded-sm overflow-hidden hover:shadow-elevated transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">{cap.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Capabilities;
