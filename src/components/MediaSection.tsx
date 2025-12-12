import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    category: 'Press Release',
    date: 'December 05, 2024',
    title: 'HOPS Defence Signs Strategic Partnership with Global Defence Leader',
    description: 'A landmark cooperation agreement to advance defence manufacturing capabilities and technology transfer.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    category: 'News',
    date: 'November 28, 2024',
    title: 'Chairman Visits State-of-the-Art Ammunition Complex',
    description: 'Witness innovation and commitment in action at our cutting-edge manufacturing facility.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    category: 'Achievement',
    date: 'November 15, 2024',
    title: 'HOPS Achieves Major Export Contract for Ammunition',
    description: 'Multi-year export deals mark a significant milestone in our global expansion strategy.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  },
];

const MediaSection = () => {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
              Latest Updates
            </span>
            <h2 className="section-title">
              Media & <span className="text-gradient">News</span>
            </h2>
          </div>
          <Link
            to="/media"
            className="flex items-center gap-2 text-primary font-heading font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className={`group bg-card border border-border rounded-sm overflow-hidden transition-all duration-700 hover:shadow-elevated hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {item.description}
                </p>
                <Link
                  to={`/media/${item.id}`}
                  className="flex items-center gap-2 text-primary font-heading font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
