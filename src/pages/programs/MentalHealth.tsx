import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import mhpss from "@/assets/mhpss.jpg";

const keyActivities = [
  "Individual and group counseling",
  "Community-based psychosocial support",
  "Child-friendly spaces and safe play",
  "Trauma healing and emotional support sessions",
  "Psychological First Aid (PFA) training",
  "Mental health awareness and stigma reduction campaigns",
  "Support for survivors of violence and trauma",
  "Capacity building for community counselors",
];

export default function MHPSS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={mhpss} alt="MHPSS Program" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-secondary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Programs
            </Link>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Mental Health & Psychosocial Support (MHPSS)
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Promoting emotional wellbeing, resilience, and trauma recovery for 
              children, youth, and families.
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
                Healing Minds & Strengthening Resilience
              </h2>

              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Our MHPSS program supports individuals and communities facing
                  trauma, stress, or psychological distress.
                </p>

                <p>
                  We combine counseling, safe spaces, and psychosocial support
                  activities to help children, youth, and families rebuild emotional
                  strength.
                </p>

                <p>
                  By training community counselors and raising mental health
                  awareness, we ensure support is accessible and sustainable.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="bg-hope/10 p-8 rounded-2xl">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Why MHPSS Matters</h3>

                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust" />
                    <span>Improves emotional wellbeing and social functioning</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust" />
                    <span>Supports trauma recovery for children and adults</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust" />
                    <span>Strengthens community resilience during crises</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust" />
                    <span>Reduces stigma around mental health</span>
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
              Supporting mental wellbeing through emotional care, counseling, and community healing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {keyActivities.map((activity, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 0.05}>
                <div className="bg-card p-6 rounded-xl shadow-soft flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-trust mt-0.5" />
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
