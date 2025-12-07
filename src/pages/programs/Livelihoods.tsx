import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import hero3 from '@/assets/hero3.jpg';

const keyActivities = [
  'Vocational skills training programs',
  'Small business grants and startup support',
  'Village Savings and Loan Associations (VSLAs)',
  'Agricultural inputs and training',
  'Market linkage and value chain development',
  'Business skills and financial literacy training',
  'Cooperative formation and strengthening',
  'Youth employment and apprenticeship programs',
];

export default function Livelihoods() {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={hero3} alt="Livelihoods Program" className="w-full h-full object-cover" />
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
              Livelihoods & Economic Empowerment
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Building economic resilience and self-reliance through skills training, 
              business support, and sustainable income generation.
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
                Empowering Self-Reliance
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Sustainable development requires economic empowerment. Our Livelihoods 
                  program equips vulnerable families with the skills, resources, and 
                  opportunities they need to build stable incomes and secure futures.
                </p>
                <p>
                  We focus on vocational training, small business development, and savings 
                  groups that enable participants to generate income, save money, and invest 
                  in their families and communities.
                </p>
                <p>
                  Special emphasis is placed on women and youth, recognizing their critical 
                  role in household economics and community development. Our approach builds 
                  individual capacity while strengthening local markets and value chains.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
              <div className="bg-hope/10 p-8 rounded-2xl">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Why Livelihoods Matter</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Stable income enables families to meet basic needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Economic empowerment reduces vulnerability to shocks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Skills training opens doors to employment opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Savings groups build community solidarity and resilience</span>
                  </li>
                </ul>
              </div>
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
              Our livelihoods interventions combine skills building with access 
              to capital and markets.
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
