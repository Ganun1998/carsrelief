import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Programs', href: '/programs' },
  { name: 'Contact', href: '/contact' },
  { name: 'Donate', href: '/donate' },
];

const programs = [
  { name: 'Child Protection', href: '/programs/child-protection' },
  { name: 'Education', href: '/programs/education' },
  { name: 'WASH', href: '/programs/wash' },
  { name: 'Nutrition', href: '/programs/nutrition' },
  { name: 'Health', href: '/programs/health' },
  { name: 'Livelihoods', href: '/programs/livelihoods' },
];

export function Footer() {
  return (
    <footer className="bg-trust text-primary-foreground mt-20">

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About */}
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="flex items-center gap-3 mb-6">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-soft group-hover:shadow-glow transition-all duration-300">
                  <img
                    src={logo}
                    alt="CARS Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-display font-bold text-xl">CARS</span>
                  <p className="text-md text-hope">
                    Children Affairs Relief Services
                  </p>
                </div>
              </Link>
            </div>

            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Transforming lives through protection, empowerment, and humanitarian relief for vulnerable children and communities in South Sudan.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection animation="fade-up" delay={0.1}>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Programs */}
          <AnimatedSection animation="fade-up" delay={0.2}>
            <h4 className="font-display font-semibold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection animation="fade-up" delay={0.3}>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Juba, South Sudan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+211 926 559 555" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300">
                  +211 926 559 555<br/> +211 929 995 792
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="info@carsrelief.org" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300">
                  info@carsrelief.org
                </a>
              </li>
            </ul>
          </AnimatedSection>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Children Affairs Relief Services (CARS). All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors duration-300"><strong>Designed by GMTS</strong></a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
