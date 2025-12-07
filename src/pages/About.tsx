import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import about_hero from "@/assets/about_hero.jpg";
import hero4 from "@/assets/hero4.jpg";

const objectives = [
  "Protect children from violence, abuse, neglect, and exploitation",
  "Provide quality education and life skills training",
  "Improve access to clean water, sanitation, and hygiene",
  "Enhance nutrition and food security for vulnerable families",
  "Strengthen community-based child protection mechanisms",
  "Promote sustainable livelihoods and economic empowerment",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={about_hero}
            alt="About CARS"
            className="w-full h-full object-cover"
          />
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
              Who We Are
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              
              transforming the lives of vulnerable children, women and men in South Sudan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Us
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Children Affairs Relief Services (CARS) is a national,
                  non-governmental, non-profit humanitarian and developmental
                  organization registered with the South Sudan Relief and
                  Rehabilitation Commission (RRC). Founded on 21-May-2024 CARS
                  is driven by a deep passion to protect, empower, and transform
                  the lives of vulnerable children, women, and men affected by
                  conflict, displacement, and natural disasters.
                </p>
                <p>
                  With a central coordination office in Juba and steadfast
                  spread to wider areas, currently operational presence in Ayod
                  and Fangak (Jonglei State) and Renk (Upper Nile State), Torit
                  (Eastern Equatoria State) Bentiu (Unity State) CARS brings
                  life-saving and life-enhancing programs directly to the most
                  affected communities in South Sudan.
                </p>
                <p>
                  What began as a small grassroots initiative has grown into a
                  comprehensive humanitarian organization implementing
                  integrated programs across multiple states in South Sudan.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <img
                src={hero4}
                alt="CARS community work"
                className="rounded-2xl shadow-strong w-full h-70"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-up">
              <div className="bg-gradient-trust p-8 lg:p-12 rounded-2xl shadow-strong h-full">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  To provide the relevant solution to children in dire needs and
                  community development and to provide most compassionate care
                  in human development. A world where all people especially
                  children live with dignity and their rights protected, their
                  basic needs met and both their physical and mental well-being
                  ensured.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.1}>
              <div className="bg-gradient-hope p-8 lg:p-12 rounded-2xl shadow-strong h-full">
                <div className="w-16 h-16 bg-foreground/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-foreground/90 text-lg leading-relaxed">
                  To actively deliver holistic humanitarian aid with
                  a priority on children and women affected by man-made crises
                  and natural disasters. We aim to foster resilience,
                  protection, and self-reliance among vulnerable populations
                  through inclusive, rights-based, and participatory approaches.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 lg:py-32 bg-gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection
            animation="fade-up"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-trust/10 text-trust rounded-full text-sm font-medium mb-6">
              Our Objectives
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Aim to Achieve
            </h2>
            <p className="text-muted-foreground text-lg">
              Our strategic objectives guide our work and help us measure our
              impact in transforming the lives of children and communities.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 0.1}
              >
                <div className="bg-card p-6 rounded-xl shadow-soft h-full flex items-start gap-4">
                  <div className="w-8 h-8 bg-growth/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-growth font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{objective}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
