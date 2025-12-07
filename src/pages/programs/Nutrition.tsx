import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import nutrition from '@/assets/nutrition.png';
import hero4 from '@/assets/hero4.jpg';

const keyActivities = [
  'Nutrition screening and assessment (MUAC)',
  'Treatment of moderate acute malnutrition (MAM)',
  'Supplementary feeding programs',
  'Infant and young child feeding counseling',
  'Micronutrient supplementation',
  'Agricultural support and kitchen gardens',
  'Food distributions during emergencies',
  'Nutrition education and cooking demonstrations',
];

export default function Nutrition() {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={hero4} alt="Nutrition Program" className="w-full h-full object-cover" />
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
              Nutrition
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Combating malnutrition through screening, 
              treatment, and sustainable food systems.
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
                Nourishing Hope, Building Resilience
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Malnutrition remains one of the leading causes of child mortality in 
                  South Sudan. Our Nutrition & Food Security program addresses the immediate 
                  and underlying causes of malnutrition through an integrated approach.
                </p>
                <p>
                  We conduct community-based nutrition screening to identify malnourished 
                  children early, provide treatment through supplementary feeding programs, 
                  and support families with nutrition education and agricultural assistance.
                </p>
                <p>
                  Our programs prioritize pregnant and lactating women, children under five, 
                  and other vulnerable groups, ensuring that the most at-risk receive 
                  life-saving nutrition support.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
              <img src={nutrition} alt="Child protection activities" className="rounded-2xl shadow-strong w-full" />
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
              Our nutrition interventions combine treatment with prevention 
              for sustainable impact.
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
