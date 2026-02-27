import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, Droplets, Shield, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import CountUp from "react-countup";

import team1 from "@/assets/team1.jpeg";
import hero4 from "@/assets/hero4.jpg";
import palabek1 from "@/assets/palabek1.jpeg";
import team4 from "@/assets/team4.jpeg";
import washImage from "@/assets/wash-program.jpg";
import kids from "@/assets/kids.jpeg";
import protection from "@/assets/protection.png";
import wash from "@/assets/wash.png";
import education1 from '@/assets/education1.jpg';
import bor from "@/assets/bor.jpeg";
import gambella from "@/assets/gambella.jpeg";
import palebek from "@/assets/palebek.jpeg";
import kakuma from "@/assets/kakuma.jpeg";

import unhcr_logo from "@/assets/donors/unhcr_logo.jpg";
import unicef_logo from "@/assets/donors/unicef_logo.jpg";
import fao_logo from "@/assets/donors/fao_logo.jpg";
import nrc_logo from "@/assets/donors/nrc_logo.jpg";
import wfp_logo from "@/assets/donors/wfp_logo.jpg";
import shaci from "@/assets/donors/shaci.jpg";
import zoa_logo from "@/assets/donors/zoa_logo.jpeg";
import unops_logo from "@/assets/donors/unops_logo.jpeg";
import ocha_logo from "@/assets/donors/ocha_logo.jpeg";

const heroSlides = [
  {
    image: team1,
    badge: "Protection for every child",
    title: "Transforming Lives Through",
    highlight: ["Protection", "Empowerment", "Relief"],
  },
  {
    image: hero4,
    badge: "Education for Every Child",

    title: "Building Futures Through",
    highlight: ["Education", "Knowledge", "Skills"],
  },
  {
    image: palabek1,
    badge: "Clean Water, Healthy Lives",
    title: "Creating Change Through",
    highlight: ["Community", "Health", "Hope"],
  },
];

const programs = [
  {
    icon: Shield,
    title: "Child Protection, Women Empowerment and GBV/PSEA Prevention",
    description:
      " This program focuses on safeguarding children and empowering women by addressing Gender Based Violence (GBV) and Prevention of Sexual Exploitation and Abuse (PSEA). It offers comprehensive psychosocial support, including counseling and emotional healing. ",
    image: protection,
    href: "/programs/child-protection",
    color: "bg-trust",
  },
  {
    icon: BookOpen,
    title: "Education, Peacebuilding and Social Cohesion ",
    description:
      "Focused on quality education, this program offers early childhood, primary, and special needs education. It includes teacher training, school rehabilitation, and educational materials, promoting inclusivity and peacebuilding within communities.  ",
    image: education1,
    href: "/programs/education",
    color: "bg-hope",
  },
  {
    icon: Droplets,
    title: "WASH (Water, Sanitation, and Hygiene)",
    description:
      "Implementation of integrated Water, Sanitation, and Hygiene interventions including borehole construction, latrine building, hygiene promotion, and community water management training. These activities aim to improve access to safe and reliable water sources, reduce waterborne diseases, and strengthen community capacity to maintain WASH infrastructure.",
    image: wash,
    href: "/programs/wash",
    color: "bg-trust",
  },
];

const stats = [
  { value: 2000, suffix: "+", label: "Lives Impacted" },
  { value: 20, suffix: "+", label: "Dedicated Staff" },
  { value: 8, suffix: "", label: "Active Programs" },
];

const values = [
  "Child-centered approach in all our work",
  "Community-led sustainable development",
  "Transparency and accountability",
  "Partnership and collaboration",
];


// Add this data at the top with other constants
const donorsAndPartners = [
  { logo: unhcr_logo },
  { logo: unicef_logo },
  { logo: fao_logo },
  { logo: nrc_logo },
  { logo: wfp_logo },
  { logo: shaci },
  { logo: zoa_logo },
  { logo: unops_logo },
  { logo: ocha_logo },
  // Add more donors/partners as needed
];


export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <Layout>
      {/* Hero Carousel Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Images with Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt="Children in South Sudan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium mb-6">
                  {heroSlides[currentSlide].badge}
                </span>

                <h1 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                  {heroSlides[currentSlide].title}{" "}
                  {heroSlides[currentSlide].highlight.map((word, i) => (
                    <span key={word}>
                      <span className="text-secondary">{word}</span>
                      {i < heroSlides[currentSlide].highlight.length - 1 &&
                        (i === heroSlides[currentSlide].highlight.length - 2
                          ? " & "
                          : ", ")}
                    </span>
                  ))}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-secondary w-8"
                    : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animation="fade-up"
                delay={index * 0.1}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  <CountUp end={stat.value} duration={30} separator="," />
                  {stat.suffix}
                </div>

                <div className="text-primary-foreground/70 font-medium">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32 bg-gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <span className="inline-block px-4 py-2 bg-trust/10 text-trust rounded-full text-sm font-medium mb-6">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-foreground mb-6">
                Building a Brighter Future for{" "}
                <span className="text-trust">Every Child</span>
              </h2>
              <p className="text-black text-lg leading-relaxed mb-8">
                Children Affairs Relief Services (CARS) is a youth-led non-profit humanitarian and developmental organization dedicated to protecting,
                 empowering, and transforming the lives of vulnerable children, women, and men affected by conflict, displacement, and natural disasters.
              </p>
              <div className="space-y-4 mb-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-growth flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="trust" size="lg" className="gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" className="relative">
              <div className="relative">
                <img
                  src={team4}
                  alt="CARS education program"
                  className="rounded-2xl shadow-strong w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-strong">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-hope rounded-full flex items-center justify-center">
                      <Users className="w-7 h-7 text-foreground" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-2xl text-foreground">
                        2000+
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Lives Impacted
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Help Needed Section (Hero-style) */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${kids})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <h2 className="font-display text-4xl md:text-5xl lg:text-4xl font-bold text-primary-foreground leading-tight mb-6">
                Every Child Deserves a <span>Chance</span> to{" "}
                <span>Thrive</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                In South Sudan, millions of children face unimaginable
                challenges—conflict, displacement, hunger, and lack of access to
                education. But together, we can change their story. Your support
                provides food, shelter, education, and hope to children who need
                it most.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate">
                  <Button variant="hero-outline" size="xl" className="gap-2">
                    Make a Difference Today
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection
            animation="fade-up"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-trust/10 text-trust rounded-full text-sm font-medium mb-6">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-foreground mb-6">
              Creating Lasting Change Through{" "}
              <span className="text-trust">Comprehensive Programs</span>
            </h2>
            
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimatedSection
                key={program.title}
                animation="fade-up"
                delay={index * 0.1}
              >
                <Link to={program.href} className="group block">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-70 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div
                        className={`absolute bottom-4 left-4 w-12 h-12 ${program.color} rounded-xl flex items-center justify-center shadow-medium`}
                      >
                        <program.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-trust transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {program.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-trust font-medium group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" className="text-center mt-12">
            <Link to="/programs">
              <Button variant="default" size="lg" className="gap-2">
                View All Programs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
       
       {/* Events Section */}
<section className="py-10 lg:py-32">
  <div className="container mx-auto px-4 lg:px-8">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
        Recent Food Distribution Events
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Through our emergency response and community support initiatives,
        we continue to reach vulnerable families across refugee camps and
        conflict-affected communities.
      </p>
    </div>

    {/* Events Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Kakuma */}
      <div className="bg-background shadow-sm border-2 overflow-hidden hover:shadow-md transition-shadow">
        <img
          src={kakuma}
          alt="Food Distribution in Kakuma Refugee Camp"
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            In <span className="font-semibold text-foreground">Kakuma Refugee Camp, Kenya</span>,
            <span className="font-semibold text-primary"> 128 individuals</span> received
            essential food assistance, helping families meet their immediate
            nutritional needs.
          </p>
        </div>
      </div>

      {/* Bor POC */}
      <div className="bg-background border-2 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <img
          src={bor}
          alt="Food Distribution in Bor POC"
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            In <span className="font-semibold text-foreground">POC Bor, Jonglei State, South Sudan</span>,
            <span className="font-semibold text-primary"> 95 individuals</span> benefited
            from food distribution, supporting displaced families facing
            critical shortages.
          </p>
        </div>
      </div>

      {/* Kule */}
      <div className="bg-background border-2 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <img
          src={gambella}
          alt="Food Distribution in Kule Refugee Camp"
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            In <span className="font-semibold text-foreground">Kule Refugee Camp, Gambella, Ethiopia</span>,
            <span className="font-semibold text-primary"> 165 individuals</span> received
            food assistance, strengthening resilience among refugee households.
          </p>
        </div>
      </div>

      {/* Palebek */}
      <div className="bg-background border-2 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <img
          src={palebek}
          alt="Food Distribution in Palebek Refugee Camp"
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            In <span className="font-semibold text-foreground">Palebek Refugee Camp, Uganda</span>,
            <span className="font-semibold text-primary"> 178 individuals</span> benefited
            from food distribution, ensuring vulnerable families had access
            to basic sustenance.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


{/* partners and donors */}
<section className="py-20 lg:py-22 overflow-hidden">
  <div className="container mx-auto px-4 lg:px-8">
    <AnimatedSection
      animation="fade-up"
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-foreground mb-6">
        Our Donors and Partners
      </h2>
    </AnimatedSection>

    {/* Scrolling Wrapper */}
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll gap-8 w-max">
        
        {/* Duplicate array for seamless infinite scroll */}
        {[...donorsAndPartners, ...donorsAndPartners].map((donor, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[180px]"
          >
            <img
              src={donor.logo}
              alt="Partner Logo"
              className="h-24 w-auto object-contain hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}

      </div>
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={washImage}
            alt="Community support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-trust/95 via-trust/85 to-trust/70" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <AnimatedSection
            animation="fade-up"
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Together, We Can Make a Difference
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Your support enables us to reach more children and communities in
              need. Join us in our mission to create lasting change in South
              Sudan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate">
                <Button variant="hope" size="xl" className="gap-2">
                  Donate Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
