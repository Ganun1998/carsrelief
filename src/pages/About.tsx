import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import about_hero from "@/assets/about_hero.jpg";
import team4 from "@/assets/team4.jpeg";

import jonglei from "@/assets/statelogos/jonglei.png";
import equatoria from "@/assets/statelogos/equatoria.jpg";
import unity1 from "@/assets/statelogos/unity1.jpg";
import uppernilestate from "@/assets/statelogos/uppernilestate.jpg";
import pibor_logo from "@/assets/statelogos/pibor_logo.jpg";

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
    state: 'Greater Pibor Administrative Area',
    stateLogo: pibor_logo,
    counties: [
      { name: 'Pibor County', logo: pibor_logo },
      { name: 'Pochalla County', logo: pibor_logo },
    ],
    mapUrl: 'https://www.bing.com/maps/search?FORM=KC2MAP&q=Greater+Pibor+Administrative+Area&ss=id.sid%3A0510d088-4c15-259b-ebb2-f7a89a27681e&cp=6.394451%7E33.835765&lvl=8&style=r',
  },
];

export default function About() {

    const [expandedState, setExpandedState] = useState<string | null>(null);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

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
              transforming the lives of vulnerable children, women and men in
              South Sudan.
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
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  Children Affairs Relief Services (CARS) is a youth-led
                  non-profit humanitarian and developmental organization
                  dedicated to protecting, empowering, and transforming the
                  lives of vulnerable children, women, and men affected by
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
                src={team4}
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
                  A world where every child and community member lives with
                  dignity, enjoys their rights, and has access to basic needs
                  that ensure their physical, mental, and emotional well-being.
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
                  To deliver holistic humanitarian assistance that prioritizes
                  children and women affected by crises. CARS seeks to
                  strengthen resilience, protection, and self-reliance among
                  vulnerable populations through inclusive, rights-based, and
                  participatory approaches.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection
            animation="fade-up"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-trust/10 text-trust rounded-full text-sm font-medium mb-6">
              Strategic Objectives
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Aim to Achieve
            </h2>
          </AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up" delay={0.1}>
                <p className="text-black text-lg leading-relaxed">
                  Promote access to quality services in food security,
                  nutrition, health, education, and sexual and reproductive
                  health, ensuring inclusivity for persons with disabilities.
                  Implement programs in nutrition, protection, education, and
                  health to support vulnerable groups. Support agricultural
                  initiatives and small businesses to build community
                  self-reliance. Provide clean water through the installation of
                  hand pumps and water systems. Expand healthcare services from
                  cities to remote villages. Facilitate adult education and
                  vocational training for lifelong learning. Improve food
                  security and nutrition among vulnerable and malnourished
                  children in rural areas. Empower communities through
                  capacity-building in agriculture, enterprise, and
                  peacebuilding. Advocate for peacebuilding initiatives to
                  mitigate tribal conflict, cattle rustling, and inter-communal
                  violence. Foster partnerships with government agencies, INGOs,
                  and donors to strengthen humanitarian impact. Promote access
                  to health services, technological innovation, and educational
                  sports programs. Undertake research and data collection to
                  inform policy and improve community welfare. Engage in
                  conflict prevention and disaster preparedness in collaboration
                  with national and international partners. Mobilize financial
                  and in-kind support from humanitarian actors and civil society
                  to achieve organizational objectives.
                </p>
            </AnimatedSection>
          </div>
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
              We operate across multiple states in South Sudan, reaching
              vulnerable communities with life-changing programs.
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
                        expandedState === area.state ? null : area.state,
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
    </Layout>
  );
}
