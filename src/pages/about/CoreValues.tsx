import { motion } from 'framer-motion';
import { Heart, Shield, Users, Lightbulb, Handshake, Scale, Target } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import about_hero from "@/assets/about_hero.jpg";

const coreValues = [
  {
    icon: Shield,
    title: 'Protection',
    description: 'Centering the safety and rights of affected individuals in every humanitarian decision and response.',
    color: 'bg-trust',
  },
  {
    icon: Lightbulb,
    title: 'Empowerment',
    description: 'Building local capacity through inclusive community involvement and participatory decision-making.',
    color: 'bg-hope',
  },
  {
    icon: Scale,
    title: 'Accountability',
    description: 'Ensuring transparent, effective, and responsive services that uphold dignity and humanitarian principles.',
    color: 'bg-trust',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'Working hand-in-hand with communities, partners, and stakeholders while embracing diversity and human rights.',
    color: 'bg-hope',
  },
  {
    icon: Target,
    title: 'Dedication',
    description: 'Acting with unwavering commitment to uphold the value of every human life.',
    color: 'bg-trust',
  },
  {
    icon: Heart,
    title: 'Respect',
    description: 'Fostering compassion, empathy, and understanding in all our interactions.',
    color: 'bg-hope',
  },
  {
    icon: Users,
    title: 'Voluntarism',
    description: 'Harnessing the power of volunteer action for social responsibility and solidarity.',
    color: 'bg-trust',
  },
];

export default function CoreValues() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img src={about_hero} alt="Core Values" className="w-full h-full object-cover" />
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
              Our Core Values
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              The principles that guide everything we do and shape our commitment to 
              transforming the lives of vulnerable children in South Sudan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 lg:py-32 bg-gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Values That <span className="text-trust">Guide Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values define who we are and how we work with communities, 
              partners, and each other to create lasting change.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <AnimatedSection
                key={value.title}
                animation="scale"
                delay={index * 0.1}
              >
                <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 h-full text-center group">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <div className="text-6xl text-primary-foreground/30 mb-6">"</div>
            <blockquote className="font-display text-2xl md:text-3xl text-primary-foreground leading-relaxed mb-8">
              Our values are not just words on paper—they are the foundation of every 
              decision we make and every life we touch. They remind us why we do this work 
              and keep us accountable to the children and communities we serve.
            </blockquote>
            <cite className="text-primary-foreground/80">
              — CARS Leadership Team
            </cite>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
