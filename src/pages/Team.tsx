import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Facebook, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import about_hero from '@/assets/about_hero.jpg';
import bol from '@/assets/leaders-img/bol.jpg';
import nhial from '@/assets/leaders-img/nhial.jpg';
import ganun1 from '@/assets/leaders-img/ganun1.jpg';
import Nyak from '@/assets/leaders-img/Nyak.jpg';
import Gach from '@/assets/leaders-img/Gach.jpg';
import Gai from '@/assets/leaders-img/Gai.png';
import mabeny from '@/assets/leaders-img/mabeny.png';
import Daniel from '@/assets/leaders-img/Daniel.png';
import Dabuol from '@/assets/leaders-img/Dabuol.jpg';
import Susan from '@/assets/leaders-img/Susan.jpg';
import dabuoln from '@/assets/leaders-img/dabuoln.png';
import chot from '@/assets/leaders-img/chot.png';
import jany from '@/assets/leaders-img/jany.jpg';
import chieng from '@/assets/leaders-img/chieng.png';
import tarir from "@/assets/leaders-img/tarir.jpg";
import reath from "@/assets/leaders-img/reath.jpg";
import galam from "@/assets/leaders-img/galam.jpg";
import hidita from "@/assets/leaders-img/hidita.jpg";
import magai from "@/assets/leaders-img/magai.jpg";
import wajia from "@/assets/leaders-img/wajia.jpg";

const leadership = [
  {
    name: "Bol Geah Puoch",
    role: "Co-founder & Chairperson",
    description:
      "Provides overall leadership and guides the organization’s strategic direction.",
    image: bol,
  },
  {
    name: "Nhial Chuol Tut",
    role: "Co-founder & Senior Advisor",
    description:
      "Offers strategic advice to ensure mission alignment and organizational effectiveness.",
    image: nhial,
  },
  {
    name: "Galam John Biel",
    role: "Secretary",
    description:
      "Maintains official records, supports meetings, and ensures effective communication.",
      image: galam,
  },

  {
    name: "Nyak Tap Toang",
    role: "Treasurer",
    description:
      "Oversees financial integrity, budgeting, and proper resource utilization.",
    image: Nyak,
  },
  {
    name: "Reath Chuol",
    role: "Technical Advisor",
    description:
      "Provides expert guidance to improve program quality and technical standards.",
      image: reath,
  },
  {
    name: "Ganun Gattang Mayiel",
    role: "Technical Assistant",
    description:
      "Supports program teams with technical tasks, data collection, and field coordination.",
    image: ganun1,
  },
];


const boardMembers = [
  {
    name: "Gai Kun Mut",
    role: "Executive Director",
    description: "Provides overall direction and represents the organization at senior levels.",
    image: Gai,
  },
  {
    name: "Susan Akuot Philip",
    role: "Head Of the Programs",
    description: "Leads program planning and ensures quality delivery across all projects.",
    image: Susan,
  },
  {
    name: "John Dabuol Nuor",
    role: "Programs Manager",
    description: "Supervises program implementation and monitors progress across field teams.",
    image: dabuoln,
  },
  {
    name: "Gai Goal Tut",
    role: "Admin & Finance Manager",
    description: "Manages finance systems, budgeting, and administrative operations.",
    image: Gach,
  },
  {
    name: "Daniel Ongejuk",
    role: "HR Manager",
    description: "Oversees recruitment, staff welfare, and workforce development.",
    image: Daniel,
  },
  {
    name: "Wajia Gloria Santino",
    role: "Programs Coordinator",
    description: "Coordinates program activities and ensures timely delivery of outputs.",
    image: wajia,
  },
  {
    name: "Chot Deng Both",
    role: "Logistics & Procurement Manager",
    description: "Manages procurement, supplies, and logistics to support field operations.",
    image: chot,
  },
  {
    name: "Peter Mabeny Majok",
    role: "M&E Manager",
    description: "Leads monitoring, evaluation, and learning to track program results.",
    image: mabeny,
  },
  {
    name: "Jany Gatkuoth Wuol",
    role: "Partnerships and MEAL Manager",
    description: "Builds partnerships and oversees MEAL systems to improve program impact.",
    image: jany,
  },
  {
    name: "Chieng Banypiny Wuol",
    role: "Project Development Officer",
    description: "Supports project design, proposal writing, and reporting to donors.",
    image: chieng,
  },
];


const fielCoodinators = [
  {
    name: "Magai Mawut Mayar",
    role: "Jonglei State Coordinator",
    description: "Coordinates activities and supports field teams across Jonglei State.",
    image: magai,
  },
  {
    name: "Hidata Raphael Esther",
    role: "Eastern Equatoria State Coordinator",
    description: "Coordinates activities and supports field teams across Eastern Equatoria State.",
    image: hidita,
  },
  {
    name: "Tarir Agany Riek",
    role: "Upper Nile State Coordinator",
    description: "Coordinates activities and supports field teams across Upper Nile State.",
    image: tarir,
  },
  {
    name: "Dabuol Mandela",
    role: "Unity State Coordinator",
    description: "Coordinates activities and supports field teams across Unity State.",
    image: Dabuol,
  },
];


export default function Team() {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img src={about_hero} alt="Our Team" className="w-full h-full object-cover" />
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
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Dedicated professionals working tirelessly to transform the lives of 
              vulnerable children and communities in South Sudan.
            </p>
          </motion.div>
        </div>
      </section>

     {/* Board of directors */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Leadership
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Board of Directors
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl bg-card shadow-elegant transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"

                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm transition-colors hover:bg-secondary">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm transition-colors hover:bg-secondary">
                      <Facebook className="h-5 w-5 text-primary-foreground" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-serif text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-secondary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Management Team
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl bg-card shadow-elegant transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain boarder-50 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm transition-colors hover:bg-secondary">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm transition-colors hover:bg-secondary">
                      <Facebook className="h-5 w-5 text-primary-foreground" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-serif text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-secondary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* field coordinators */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Field Coordinators
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {fielCoodinators.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl bg-card shadow-elegant transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm transition-colors hover:bg-secondary">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm transition-colors hover:bg-secondary">
                      <Facebook className="h-5 w-5 text-primary-foreground" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-serif text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-secondary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hope" size="lg" className="gap-2">
                  Get In Touch
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="hero-outline" size="lg" className="gap-2">
                  Support Our Work
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
