import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight, Search, Filter } from 'lucide-react';
import hero3 from '@/assets/hero-3.jpg';

const mediaCategories = ['All', 'Press Releases', 'News', 'Videos', 'Events'];

const mediaItems = [
  {
    id: 1,
    category: 'Press Releases',
    date: 'December 05, 2024',
    title: 'HOPS Defence Signs Strategic Partnership with Global Defence Leader',
    description: 'A landmark cooperation agreement across strategic defence and military domains, combining expertise in missiles, weapons, unmanned platforms, and cyber systems.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    id: 2,
    category: 'News',
    date: 'November 28, 2024',
    title: 'Chairman Visits State-of-the-Art Ammunition Complex',
    description: 'A landmark visit to our facility, where cutting-edge ammunition manufacturing drives India\'s defence self-reliance.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop',
    featured: true,
  },
  {
    id: 3,
    category: 'News',
    date: 'November 15, 2024',
    title: 'HOPS Achieves Major Export Contract for Ammunition',
    description: 'Multi-year export deals mark a significant milestone in our global expansion strategy.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
  },
  {
    id: 4,
    category: 'Events',
    date: 'October 20, 2024',
    title: 'HOPS at DefExpo 2024: Showcasing Indigenous Capabilities',
    description: 'Our participation at DefExpo 2024 highlighted our commitment to Atmanirbhar Bharat.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
  },
  {
    id: 5,
    category: 'Press Releases',
    date: 'October 10, 2024',
    title: 'Launch of New UAV Platform for Maritime Surveillance',
    description: 'Our latest unmanned platform designed for extended maritime operations and coastal security.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop',
  },
  {
    id: 6,
    category: 'Videos',
    date: 'September 25, 2024',
    title: 'Inside HOPS: Manufacturing Excellence Documentary',
    description: 'Go behind the scenes of our world-class manufacturing facilities.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
  },
];

const Media = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMedia = mediaItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredItems = mediaItems.filter((item) => item.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero3})` }}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <nav className="text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Home</a> / <span className="text-primary">Media</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              Media Center
            </h1>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Featured Stories</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredItems.map((item) => (
                <article
                  key={item.id}
                  className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-elevated transition-all"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1 rounded w-fit mb-4">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <a
                        href={`/media/${item.id}`}
                        className="flex items-center gap-2 text-primary font-heading font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Media */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {mediaCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 font-heading font-medium text-sm transition-all ${
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border text-foreground hover:border-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search media..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-full md:w-64"
                />
              </div>
            </div>

            {/* Media Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((item) => (
                <article
                  key={item.id}
                  className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-elevated hover:-translate-y-2 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1">
                      {item.category}
                    </span>
                  </div>
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
                    <a
                      href={`/media/${item.id}`}
                      className="flex items-center gap-2 text-primary font-heading font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {filteredMedia.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No media items found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
