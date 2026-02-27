import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import about_hero from "@/assets/about_hero.jpg";
import workflow from "@/assets/workflow.png";

const governanceStructure = [
  {
    level: 'Board of Directors',
    description: 'Provides strategic oversight, policy guidance, and ensures organizational accountability. The board meets quarterly to review progress and set direction.',
    members: [
      'Co-founder & Chairperson',
      'Co-founder & Advisor',
      'Secretary',
      'Treasurer',
      'Technical Advisor',
      'Technical Assistant',
    ],
  },
  {
    level: 'Management Staff',
    description: 'Implement our six core programs across different locations, working directly with communities and beneficiaries.',
    members: [
      'Head of Programs',
      'Programs Manager',
      'Programs Coordinator',
      'HR Manager',
      'Finance Manager',
      'Logistics & Procurement Manager',
      'M&E Manager',
      'Partnerships and Meal Manager',
      'Project Development Officer',
    ],
  },
  {
    level: 'Field Coordinators',
    description: 'Provide essential administrative, financial, and logistical support to ensure smooth program delivery.',
    members: [
      'Jonglei State Coordination',
      'Upper Nile State Coordinator',
      'Eastern Equatoria State Coordinator',
      'Unity State Coordinator',
    ],
  },
];

export default function OrganizationStructure() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={about_hero}
            alt="Organization Structure"
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
              Organization Structure
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              A well-organized structure enables us to deliver effective
              humanitarian assistance and achieve our mission of transforming
              lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-20 lg:py-32 bg-gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection
            animation="fade-up"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Governance Structure
            </h2>
            <p className="text-muted-foreground text-lg">
              CARS follow a structured and transparent hierarchy designed to
              ensure efficient program Implementation, accountability, and
              sustainability.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {governanceStructure.map((level, index) => (
              <AnimatedSection
                key={level.level}
                animation="fade-up"
                delay={index * 0.1}
              >
                <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
                  <div className="bg-gradient-trust p-6">
                    <h3 className="font-display text-xl font-bold text-primary-foreground">
                      {index + 1}. {level.level}
                    </h3>
                  </div>
                  <div className="p-6 lg:p-8">
                    <p className="text-muted-foreground mb-6">
                      {level.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {level.members.map((member) => (
                        <span
                          key={member}
                          className="px-4 py-2 bg-muted rounded-full text-sm text-foreground"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 lg:py-25">
        <div className="container items-center justify-center mx-auto px-4 lg:px-8">
          <AnimatedSection
            animation="fade-up"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              CARS'S Workflow
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="scale" className="max-w-2xl mx-auto ">
            <div className="p-6 lg:p-10 rounded-2xl">
              {/* Organogram Image */}
              <div className="flex justify-center">
                <img
                  src={workflow}
                  alt="Wan Education Foundation Organizational Structure"
                  className="w-full max-w-5xl h-65 rounded-xl shadow-md object-contain"
                />
              </div>
            </div>
            <Link to="/team">
              <Button variant="hope" size="lg" className="gap-2">
                View Our Team
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
