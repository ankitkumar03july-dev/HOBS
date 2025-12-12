import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Home, Users, Lightbulb, Newspaper, Briefcase, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import hobsLogo from '@/assets/hobs-logo.jpg';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  {
    name: 'Our Capabilities',
    href: '/capabilities',
    icon: Lightbulb,
    submenu: [
      { name: 'Unmanned Systems', href: '/capabilities#unmanned' },
      { name: 'Aerostructures', href: '/capabilities#aerostructures' },
      { name: 'Missiles & Weapons', href: '/capabilities#missiles' },
      { name: 'Ammunition', href: '/capabilities#ammunition' },
      { name: 'Land Systems', href: '/capabilities#land' },
      { name: 'Naval Systems', href: '/capabilities#naval' },
    ],
  },
  { name: 'Media', href: '/media', icon: Newspaper },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'Contact Us', href: '/contact', icon: Phone },
  { name: 'Corporate Responsibility', href: '/about#responsibility', icon: Globe },
];

const desktopNavItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Capabilities', href: '/capabilities' },
  { name: 'Media', href: '/media' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background shadow-card py-2'
          : 'bg-background py-3'
      }`}
    >
      {/* Red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button (Hamburger) */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0 bg-background">
                <nav className="py-6">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <Collapsible
                          open={openSubmenu === item.name}
                          onOpenChange={(open) => setOpenSubmenu(open ? item.name : null)}
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-4">
                              <item.icon className="w-5 h-5" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="bg-muted/30">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-14 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Link
                          to={item.href}
                          className="flex items-center gap-4 px-6 py-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-auto flex items-center">
                <img 
                  src={hobsLogo} 
                  alt="HOBS" 
                  className="h-full w-auto object-contain mix-blend-multiply"
                />
              </div>
              <div className="hidden sm:block border-l border-border pl-3">
                <span className="text-muted-foreground text-sm font-medium">Hind Ordnance & <br />Ballistics Systems</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Right side */}
          <nav className="hidden lg:flex items-center gap-8">
            {desktopNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </header>
  );
};

export default Header;
