import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, Droplets, Shield, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import CountUp from "react-countup";

import hero2 from "@/assets/hero2.jpg";
import hero4 from "@/assets/hero4.jpg";
import hero3 from "@/assets/hero3.jpg";
import team4 from "@/assets/team4.jpeg";
import washImage from "@/assets/wash-program.jpg";
import kids from "@/assets/kids.jpeg";
import protection from "@/assets/protection.png";
import wash from "@/assets/wash.png";
import education1 from '@/assets/education1.jpg';

import jonglei from "@/assets/statelogos/jonglei.png";
import equatoria from "@/assets/statelogos/equatoria.jpg";
import unity1 from "@/assets/statelogos/unity1.jpg";
import uppernilestate from "@/assets/statelogos/uppernilestate.jpg";
import pibor_logo from "@/assets/statelogos/pibor_logo.jpg";

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
    image: hero2,
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
    image: hero3,
    badge: "Clean Water, Healthy Lives",
    title: "Creating Change Through",
    highlight: ["Community", "Health", "Hope"],
  },
];

const programs = [
  {
    icon: Shield,
    title: "Child Protection",
    description:
      "Ensuring safety and well-being of vulnerable children through comprehensive protection programs.",
    image: protection,
    href: "/programs/child-protection",
    color: "bg-trust",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Providing quality education and learning opportunities to empower the next generation.",
    image: education1,
    href: "/programs/education",
    color: "bg-hope",
  },
  {
    icon: Droplets,
    title: "WASH",
    description:
      "Clean water, sanitation, and hygiene programs for healthier communities.",
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

const areasOfOperation = [
  {
    state: 'Jonglei State',
    stateLogo: jonglei, // STATE LOGO
    counties: [
      { name: 'Ayod County', logo: jonglei },
      { name: 'Akobo County', logo: jonglei },
      { name: 'Duk County', logo: jonglei },
      { name: 'Bor South County', logo: jonglei },
      { name: 'Fangak County', logo: jonglei },
      { name: 'Uror County', logo: jonglei },
      { name: 'Nyirol County', logo: jonglei },
      { name: 'Pigi County', logo: jonglei },
      { name: 'Twic East County', logo: jonglei },
    ],
    mapUrl: 'https://www.google.com/maps/place/Jonglei,+South+Sudan',
  },

  {
    state: 'Upper Nile State',
    stateLogo: uppernilestate,
    counties: [
      { name: 'Maiwut County', logo: uppernilestate }, // example, replace with real
      { name: 'Ulang County', logo: uppernilestate },
      { name: 'Renk County', logo: uppernilestate },
      { name: 'Makal County', logo: uppernilestate },
    ],
    mapUrl: 'https://www.google.com/maps/place/Upper+Nile,+South+Sudan',
  },

  {
    state: 'Eastern Equatoria State',
    stateLogo: equatoria,
    counties: [
      { name: 'Kapoeta East County', logo: equatoria },
      { name: 'Kapoeta North County', logo: equatoria },
      { name: 'Kapoeta South County', logo: equatoria },
      { name: 'Torit County', logo: equatoria },
    ],
    mapUrl:
      'https://www.google.com/maps/place/Eastern+Equatoria,+South+Sudan',
  },

  {
    state: 'Unity State',
    stateLogo: unity1,
    counties: [
      { name: 'Guit County', logo: unity1 },
      { name: 'Mayom County', logo: unity1 },
      { name: 'Leer County', logo: unity1 },
      { name: 'Rubkona County', logo: unity1 },
    ],
    mapUrl: 'https://www.google.com/maps/place/Unity,+South+Sudan',
  },

  {
    state: 'Pibor Administrative Area',
    stateLogo: pibor_logo,
    counties: [
      { name: 'Pibor County', logo: pibor_logo },
      { name: 'Pochalla County', logo: pibor_logo },
    ],
    mapUrl: 'https://www.bing.com/maps/search?FORM=KC2MAP&q=Greater+Pibor+Administrative+Area&ss=id.sid%3A0510d088-4c15-259b-ebb2-f7a89a27681e&cp=6.394451%7E33.835765&lvl=8&style=r',
  },
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
  const [expandedState, setExpandedState] = useState<string | null>(null);

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
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Children Affairs Relief Services (CARS) is a national,
                non-governmental, non-profit humanitarian and developmental
                organization registered with the South Sudan Relief and
                Rehabilitation Commission (RRC). Founded on 21-May-2024 CARS is
                driven by a deep passion to protect, empower, and transform the
                lives of vulnerable children, women, and men affected by
                conflict, displacement, and natural disasters.
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
  

       {/* Areas of Operations Section */}
<section className="py-20 lg:py-32 bg-trust">
  <div className="container mx-auto px-4 lg:px-8">
    <AnimatedSection
      animation="fade-up"
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-muted mb-6">
        Where We Work
      </h2>

      <p className="text-white text-lg">
        We operate across multiple states in South Sudan, reaching vulnerable
        communities with life-changing programs.
      </p>
    </AnimatedSection>

    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
      {areasOfOperation.map((area, index) => (
        <AnimatedSection
          key={area.state}
          animation="fade-up"
          delay={index * 0.1}
        >
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
            {/* STATE BUTTON */}
            <button
              onClick={() =>
                setExpandedState(
                  expandedState === area.state ? null : area.state
                )
              }
              className="w-full p-10 flex items-center justify-between text-left hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                {/* STATE IMAGE LOGO */}
                <a
                  href={area.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-trust flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  title={`View ${area.state} on map`}
                >
                  <img
                    src={area.stateLogo}
                    alt={`${area.state} Logo`}
                    className="w-12 h-12 object-contain"
                  />
                </a>

                <h3 className="font-display text-lg font-bold text-foreground">
                  {area.state}
                </h3>
              </div>

              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  expandedState === area.state ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* COUNTY LIST */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedState === area.state ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6">
                <ul className="space-y-2">
                  {area.counties.map((county) => (
                    <li
                      key={county.name}
                      className="flex items-center justify-between text-muted-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-hope rounded-full" />
                        {county.name}
                      </div>

                      {/* COUNTY ICON */}
                      <img
                        src={county.logo}
                        alt={`${county.name} Logo`}
                        className="w-6 h-6 object-contain opacity-90"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>


{/* partners and donors */}
<section className="py-20 lg:py-22">
  <div className="container mx-auto px-4 lg:px-8">
    <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-foreground mb-6">
        Our Donors and Partners
      </h2>
    </AnimatedSection>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> {/* Reduced gap */}
      {donorsAndPartners.map((donor, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={donor.logo} className="w-auto h-40 md:h-50 object-contain" /> {/* Increased size */}
        </div>
      ))}
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
