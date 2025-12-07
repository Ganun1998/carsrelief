import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {  CheckCircle, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import protection from '@/assets/protection.png';
import hero4 from '@/assets/hero4.jpg';

const keyActivities = [
  'Individual case management for children at risk',
  'Psychosocial support and counseling services',
  'Family tracing and reunification',
  'Establishment of Child-Friendly Spaces',
  'Community-based child protection committees',
  'Training of social workers and caregivers',
  'Awareness campaigns on child rights',
  'Referral pathways to specialized services',
];


export default function ChildProtection() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={hero4} alt="Child Protection Program" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Link to="/programs" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-secondary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Programs
            </Link>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Child Protection
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Ensuring the safety, well-being, and rights of vulnerable children through 
              comprehensive protection services and community-based mechanisms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Protecting Every Child's Future
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Our Child Protection program addresses the critical needs of children affected 
                  by conflict, displacement, and poverty in South Sudan. We work to prevent and 
                  respond to violence, abuse, neglect, and exploitation of children.
                </p>
                <p>
                  Through a combination of direct services and community-based approaches, we 
                  ensure that children have access to safe environments, psychosocial support, 
                  and pathways to recovery and resilience.
                </p>
                <p>
                  We partner with communities, local authorities, and child protection networks 
                  to strengthen protective mechanisms and build sustainable systems that safeguard 
                  children's rights and well-being.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
              <img src={protection} alt="Child protection activities" className="rounded-2xl shadow-strong w-full" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Activities
            </h2>
            <p className="text-muted-foreground text-lg">
              Our comprehensive approach to child protection includes a range of 
              integrated services and community-based interventions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {keyActivities.map((activity, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 0.05}>
                <div className="bg-card p-6 rounded-xl shadow-soft flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-trust flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{activity}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
    </Layout>
  );
}
