import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import healthImage from '@/assets/health-program.jpg';

const keyActivities = [
  'Primary healthcare service delivery',
  'Maternal and child health services',
  'Immunization and vaccination campaigns',
  'Disease surveillance and outbreak response',
  'Health facility rehabilitation and support',
  'Community health worker training',
  'Health education and awareness campaigns',
  'Referral systems to secondary care',
];

export default function Health() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={healthImage} alt="Health Program" className="w-full h-full object-cover" />
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
              Health
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Improving community health through accessible healthcare services, 
              disease prevention, and health education.
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
                Healthcare for Every Community
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Access to quality healthcare is a fundamental right. Our Health program 
                  works to strengthen health systems and deliver essential healthcare 
                  services to underserved communities in South Sudan.
                </p>
                <p>
                  We focus on primary healthcare, maternal and child health, and disease 
                  prevention. Through health facility support, community health workers, 
                  and outreach services, we reach those with the greatest need.
                </p>
                <p>
                  Our approach integrates health services with our other programs, 
                  recognizing the interconnection between health, nutrition, water, 
                  and overall well-being.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
              <div className="bg-trust/10 p-8 rounded-2xl">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Health Challenges in South Sudan</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Limited access to health facilities in rural areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>High maternal and child mortality rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Outbreak-prone diseases including malaria and cholera</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <span>Shortage of trained health workers</span>
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
              Our health interventions focus on prevention, treatment, and 
              health system strengthening.
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
