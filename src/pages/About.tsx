import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutTeam from '@/assets/about-team.jpg';
import hero1 from '@/assets/hero-1.jpg';

const leadership = [
  {
    name: 'Rajesh Kumar',
    position: 'Chairman & Managing Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    position: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Vikram Singh',
    position: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Anita Desai',
    position: 'Chief Operations Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
];

const milestones = [
  { year: '2008', title: 'Foundation', description: 'Hind Ordnance & Ballistics Systems (HOBS) was established with a vision to transform defence manufacturing.' },
  { year: '2012', title: 'First Contract', description: 'Secured our first major defence contract for ammunition and ordnance manufacturing.' },
  { year: '2016', title: 'Global Expansion', description: 'Established international partnerships and began export operations.' },
  { year: '2020', title: 'Ballistics Division', description: 'Launched our advanced ballistics systems division with indigenous technology.' },
  { year: '2024', title: 'Global Leader', description: 'Recognized as a leading ordnance manufacturer with exports to 20+ countries.' },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero1})` }}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <nav className="text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Home</a> / <span className="text-primary">About Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              About HOBS
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section ref={sectionRef} className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
              >
                <div className="relative">
                  <img src={aboutTeam} alt="HOBS Team" className="w-full rounded-sm shadow-elevated" />
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-sm -z-10" />
                </div>
              </div>
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
              >
                <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                  Our Story
                </span>
                <h2 className="section-title mb-6">
                  Nation-Building Through <span className="text-gradient">Innovation</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Hind Ordnance & Ballistics Systems (HOBS) stands at the forefront of India's defence manufacturing revolution. 
                  With a vision to transform the nation into a global ordnance and ballistics hub, we combine 
                  cutting-edge technology with indigenous innovation.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Under visionary leadership, we have grown from a small manufacturing unit to a comprehensive 
                  defence conglomerate, delivering solutions across ordnance, ballistics, and advanced weapon systems. Our 
                  commitment to excellence and self-reliance drives every innovation we create.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, HOBS is recognized globally for its advanced capabilities in ordnance systems, 
                  ballistics, missiles, ammunition, and weapon systems. We continue to push boundaries, 
                  setting new standards in defence manufacturing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card border border-border p-10 rounded-sm animate-fade-in">
                <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                  Our Vision
                </span>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Leading the Future of Defence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in defence and aerospace manufacturing, driving innovation, 
                  self-reliance, and excellence while contributing to national security and economic growth. 
                  We envision a future where our technologies protect and empower nations worldwide.
                </p>
              </div>
              <div className="bg-card border border-border p-10 rounded-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
                <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                  Our Mission
                </span>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Excellence in Every Endeavor
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver world-class defence solutions through continuous innovation, strategic partnerships, 
                  and unwavering commitment to quality. We strive to exceed expectations, foster indigenous 
                  development, and build a skilled workforce that drives the future of defence technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                Leadership
              </span>
              <h2 className="section-title mb-6">
                Meet Our <span className="text-gradient">Leaders</span>
              </h2>
              <p className="section-subtitle mx-auto">
                Our leadership team brings decades of experience in defence, aerospace, and technology sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={leader.name}
                  className="group text-center animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-sm">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{leader.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                Our Journey
              </span>
              <h2 className="section-title">
                Milestones of <span className="text-gradient">Excellence</span>
              </h2>
            </div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-card border border-border p-6 rounded-sm hover:shadow-elevated transition-shadow">
                      <span className="text-primary font-heading font-bold text-2xl">{milestone.year}</span>
                      <h4 className="text-xl font-heading font-bold text-foreground mt-2 mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
