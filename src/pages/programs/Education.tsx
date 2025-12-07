import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {  CheckCircle, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import education1 from '@/assets/education1.jpg';
import hero4 from '@/assets/hero4.jpg';

const keyActivities = [
  'Establishment of temporary learning spaces',
  'Teacher training and professional development',
  'Distribution of educational materials and supplies',
  'School feeding programs',
  'Back-to-school campaigns and enrollment drives',
  'Accelerated Education Programs (AEP) for over-age learners',
  'Life skills and vocational training for adolescents',
  'Parent-Teacher Association (PTA) strengthening',
];

export default function Education() {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={hero4} alt="Education Program" className="w-full h-full object-cover" />
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
              Education
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Empowering the next generation through quality education, 
              creating pathways to opportunity and a brighter future.
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
                Building Foundations for Tomorrow
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Education is a fundamental right and a powerful tool for transformation. 
                  Our Education program works to ensure that every child, regardless of 
                  their circumstances, has access to quality learning opportunities.
                </p>
                <p>
                  We focus on both formal and non-formal education, reaching children who 
                  have been out of school due to conflict, displacement, or poverty. Our 
                  programs are designed to be inclusive, child-friendly, and responsive 
                  to the unique needs of learners in emergency settings.
                </p>
                <p>
                  Through teacher training, school rehabilitation, and community engagement, 
                  we create sustainable educational environments that support long-term 
                  learning outcomes and child development.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
              <img src={education1} alt="Education activities" className="rounded-2xl shadow-strong w-full" />
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
              Our education interventions address barriers to learning and create 
              supportive environments for children to thrive.
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
