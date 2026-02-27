import React from "react";
import { Layout } from "@/components/layout/Layout";
import kakuma from "@/assets/kakuma.jpeg";
import bor from "@/assets/bor.jpeg";
import gambella from "@/assets/gambella.jpeg";
import palebek from "@/assets/palebek.jpeg";

const EventsPage: React.FC = () => {
  return (
    <Layout>

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 px-4 text-white"
        style={{ backgroundImage: `url(${bor})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Recent Humanitarian Response
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Through coordinated emergency food distribution initiatives,
            we continue to support displaced families and vulnerable
            communities across refugee camps and conflict-affected areas
            in East Africa.
          </p>
        </div>
      </section>

      {/* ================= EVENTS SECTION ================= */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Recent Food Distribution Events
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our emergency response programs aim to address immediate
              food insecurity while restoring dignity and hope among
              displaced populations.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Kakuma */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={kakuma}
                alt="Food Distribution in Kakuma Refugee Camp"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  In <span className="font-semibold text-gray-900">Kakuma Refugee Camp, Kenya</span>,
                  <span className="font-semibold text-blue-600"> 128 individuals</span> received
                  essential food assistance to meet urgent nutritional needs.
                </p>
              </div>
            </div>

            {/* Bor */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={bor}
                alt="Food Distribution in Bor POC"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  In <span className="font-semibold text-gray-900">POC Bor, Jonglei State, South Sudan</span>,
                  <span className="font-semibold text-blue-600"> 95 individuals</span> benefited
                  from food distribution during critical shortages.
                </p>
              </div>
            </div>

            {/* Kule */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={gambella}
                alt="Food Distribution in Kule Refugee Camp"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  In <span className="font-semibold text-gray-900">Kule Refugee Camp, Gambella, Ethiopia</span>,
                  <span className="font-semibold text-blue-600"> 165 individuals</span> received
                  food assistance to strengthen household resilience.
                </p>
              </div>
            </div>

            {/* Palebek */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={palebek}
                alt="Food Distribution in Palebek Refugee Camp"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  In <span className="font-semibold text-gray-900">Palebek Refugee Camp, Uganda</span>,
                  <span className="font-semibold text-blue-600"> 178 individuals</span> benefited
                  from food support, ensuring access to basic sustenance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
};

export default EventsPage;