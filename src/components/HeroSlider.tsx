import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const slides = [
  {
    image: hero1,
    subtitle: 'Leading the Future of Defence',
    title: 'Hind Ordnance & Ballistics Systems',
    description: 'Pioneering innovation in ordnance and ballistics technology, driving self-reliance and global excellence.',
    cta: 'Explore Our Capabilities',
    link: '/capabilities',
  },
  {
    image: hero2,
    subtitle: 'Advanced Ballistics Technology',
    title: 'Next-Gen Ordnance Systems',
    description: 'State-of-the-art ballistics and ordnance systems for modern warfare requirements.',
    cta: 'Learn More',
    link: '/capabilities#ammunition',
  },
  {
    image: hero3,
    subtitle: 'Defence Manufacturing Excellence',
    title: 'World-Class Ammunition',
    description: 'World-class manufacturing facilities producing cutting-edge ammunition and weapons systems.',
    cta: 'Discover More',
    link: '/capabilities#missiles',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
            <div className="max-w-3xl">
              <span
                className={`inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4 ${
                  index === currentSlide ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: '200ms' }}
              >
                {slide.subtitle}
              </span>
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight ${
                  index === currentSlide ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: '400ms' }}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl text-white/70 mb-8 max-w-xl ${
                  index === currentSlide ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: '600ms' }}
              >
                {slide.description}
              </p>
              <a
                href={slide.link}
                className={`btn-primary inline-block ${
                  index === currentSlide ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: '800ms' }}
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-primary text-white hover:text-primary-foreground border border-white/20 transition-all duration-300 rounded-sm group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-primary text-white hover:text-primary-foreground border border-white/20 transition-all duration-300 rounded-sm group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-primary'
                : 'w-6 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-white/60 uppercase tracking-widest transform rotate-90 origin-center translate-y-10">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse-slow" />
      </div>
    </section>
  );
};

export default HeroSlider;
