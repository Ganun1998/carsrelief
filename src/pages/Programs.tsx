import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Droplets, Apple, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import hero4 from '@/assets/hero4.jpg';
import protection from '@/assets/protection.png';
import education1 from '@/assets/education1.jpg';
import wash from '@/assets/wash.png';
import nutrition from '@/assets/nutrition.png';
import children1 from '@/assets/children1.jpg';
import hero3 from '@/assets/hero3.jpg';

const programs = [
  {
    icon: Shield,
    title: 'Child Protection',
    description: 'Comprehensive protection services ensuring the safety, well-being, and rights of vulnerable children through case management, psychosocial support, and community-based protection mechanisms.',
    image: protection,
    href: '/programs/child-protection',
    color: 'bg-trust',
    /* stats: { beneficiaries: '5,000+', communities: '25+' }, */
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Quality education programs that provide access to learning, teacher training, school rehabilitation, and educational materials for out-of-school children and youth.',
    image: education1,
    href: '/programs/education',
    color: 'bg-hope',
    /*stats: { beneficiaries: '3,500+', schools: '15+' },*/
  },
  {
    icon: Droplets,
    title: 'WASH',
    description: 'Water, Sanitation, and Hygiene interventions including borehole construction, latrine building, hygiene promotion, and community water management training.',
    image: wash,
    href: '/programs/wash',
    color: 'bg-trust',
    /*stats: { beneficiaries: '8,000+', boreholes: '30+' },*/
  },
  {
    icon: Apple,
    title: 'Nutrition',
    description: 'Nutrition screening, supplementary feeding, agricultural support, and food assistance programs addressing malnutrition and food insecurity.',
    image: nutrition,
    href: '/programs/nutrition',
    color: 'bg-hope',
    /*stats: { beneficiaries: '4,000+', programs: '10+' },*/
  },
  {
    icon: Heart,
    title: 'Health',
    description: 'Primary healthcare services, maternal and child health programs, disease prevention, and health education to improve community health outcomes.',
    image: children1,
    href: '/programs/health',
    color: 'bg-trust',
    /*stats: { beneficiaries: '6,000+', clinics: '8+' },*/
  },
  {
    icon: TrendingUp,
    title: 'Livelihoods',
    description: 'Vocational training, small business support, savings groups, and income-generating activities that build economic resilience and self-reliance.',
    image: hero3,
    href: '/programs/livelihoods',
    color: 'bg-hope',
    /*stats: { beneficiaries: '2,000+', groups: '50+' },*/
  },
];

export default function Programs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={hero4} alt="CARS Programs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              What We Do
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Our integrated programs address the holistic needs of children and communities, 
              building resilience and creating sustainable change across South Sudan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Six Thematic Areas of Impact
            </h2>
            <p className="text-muted-foreground text-lg">
              We implement comprehensive programs across six key thematic areas, 
              each designed to address specific needs while contributing to overall 
              community resilience and child well-being.
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <AnimatedSection
                key={program.title}
                animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <div className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative group overflow-hidden rounded-2xl shadow-strong">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div className={`absolute bottom-6 left-6 w-14 h-14 ${program.color} rounded-xl flex items-center justify-center shadow-medium`}>
                        <program.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex gap-6 mb-6">
                      <div>
                        <div className="font-display text-2xl font-bold text-trust">
                        </div>
                      </div>
                      <div>
                        <div className="font-display text-2xl font-bold text-hope">
                        </div>
                        <div className="text-sm text-muted-foreground">

                        </div>
                      </div>
                    </div>
                    <Link to={program.href}>
                      <Button variant="default" size="lg" className="gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Support Our Programs
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Your donation directly supports our life-changing programs. Help us reach 
              more children and communities in need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate">
                <Button variant="hope" size="lg" className="gap-2">
                  Donate Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
