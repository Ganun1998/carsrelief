import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import hero4 from '@/assets/hero4.jpg';
import wash from '@/assets/wash.png';

const keyActivities = [
  'Borehole drilling and water point rehabilitation',
  'Household and institutional latrine construction',
  'Hygiene promotion and behavior change campaigns',
  'Water quality testing and treatment',
  'Community water management committee training',
  'Menstrual hygiene management programs',
  'Solid waste management initiatives',
  'Emergency water trucking and distribution',
];

export default function WASH() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={hero4} alt="WASH Program" className="w-full h-full object-cover" />
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
              Water, Sanitation & Hygiene
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Providing access to clean water and sanitation facilities, 
              promoting hygiene practices for healthier communities.
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
                Clean Water, Healthy Lives
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Access to clean water and proper sanitation is essential for health, 
                  dignity, and survival. Our WASH program addresses the critical water 
                  and sanitation needs of communities in South Sudan.
                </p>
                <p>
                  We construct and rehabilitate water points, build latrines, and conduct 
                  hygiene promotion activities to reduce waterborne diseases and improve 
                  overall community health outcomes.
                </p>
                <p>
                  Through community-based approaches, we ensure sustainability by training 
                  local water management committees and empowering communities to maintain 
                  their water and sanitation facilities.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
              <img src={wash} alt="Child protection activities" className="rounded-2xl shadow-strong w-full" />
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
              Our WASH interventions combine infrastructure development with 
              behavior change to achieve lasting impact.
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
