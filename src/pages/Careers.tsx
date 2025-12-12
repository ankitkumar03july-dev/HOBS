import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Briefcase, Clock, Search, ArrowRight, Building2, Users, GraduationCap, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import hero1 from '@/assets/hero-1.jpg';

const departments = ['All', 'Engineering', 'Manufacturing', 'R&D', 'Corporate', 'Operations'];

const jobs = [
  {
    id: 1,
    title: 'Senior Aerospace Engineer',
    department: 'Engineering',
    location: 'New Delhi',
    type: 'Full-time',
    experience: '8-12 years',
    description: 'Lead the design and development of advanced aerospace systems and components.',
  },
  {
    id: 2,
    title: 'UAV Systems Specialist',
    department: 'R&D',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '5-8 years',
    description: 'Work on next-generation unmanned aerial systems and autonomous technologies.',
  },
  {
    id: 3,
    title: 'Quality Control Manager',
    department: 'Manufacturing',
    location: 'Kanpur',
    type: 'Full-time',
    experience: '10-15 years',
    description: 'Ensure world-class quality standards across ammunition manufacturing operations.',
  },
  {
    id: 4,
    title: 'Embedded Systems Developer',
    department: 'Engineering',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Develop embedded software for defence electronics and missile systems.',
  },
  {
    id: 5,
    title: 'Business Development Manager',
    department: 'Corporate',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '8-12 years',
    description: 'Drive strategic partnerships and business growth in defence sector.',
  },
  {
    id: 6,
    title: 'Production Supervisor',
    department: 'Operations',
    location: 'Kanpur',
    type: 'Full-time',
    experience: '5-8 years',
    description: 'Oversee production operations and manage manufacturing teams.',
  },
];

const benefits = [
  { icon: Building2, title: 'World-Class Facilities', description: 'Work in state-of-the-art research and manufacturing facilities.' },
  { icon: GraduationCap, title: 'Learning & Growth', description: 'Continuous learning opportunities and career advancement programs.' },
  { icon: Users, title: 'Collaborative Culture', description: 'Work with industry experts in a collaborative environment.' },
  { icon: Heart, title: 'Comprehensive Benefits', description: 'Health insurance, retirement plans, and wellness programs.' },
];

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const { toast } = useToast();

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = activeDepartment === 'All' || job.department === activeDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const handleApply = () => {
    toast({
      title: 'Application Submitted',
      description: "We'll review your application and get back to you soon.",
    });
    setSelectedJob(null);
  };

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
              <a href="/" className="hover:text-primary">Home</a> / <span className="text-primary">Careers</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Be part of India's defence revolution. Build your career with the nation's leading defence manufacturer.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                Why HOBS
              </span>
              <h2 className="section-title">
                Shape the Future of <span className="text-gradient">Defence</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-card border border-border p-6 rounded-sm text-center hover:shadow-elevated hover:-translate-y-2 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-4">
                Open Positions
              </span>
              <h2 className="section-title">
                Current <span className="text-gradient">Opportunities</span>
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between">
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveDepartment(dept)}
                    className={`px-4 py-2 font-heading font-medium text-sm transition-all ${
                      activeDepartment === dept
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border text-foreground hover:border-primary'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-full md:w-64"
                />
              </div>
            </div>

            {/* Jobs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-card border border-border p-6 rounded-sm hover:shadow-elevated hover:border-primary/50 transition-all cursor-pointer"
                  onClick={() => setSelectedJob(job)}
                >
                  <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4">
                    {job.department}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{job.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-heading font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No positions found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Job Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-sm max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-border">
                <h3 className="text-2xl font-heading font-bold text-foreground">{selectedJob.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              <form
                className="p-6 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleApply();
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Resume Link *</label>
                  <input
                    type="url"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Cover Letter</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us why you're interested in this role..."
                  />
                </div>
                <div className="flex gap-4">
                  <button type="submit" className="btn-primary flex-1">
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="btn-outline"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
