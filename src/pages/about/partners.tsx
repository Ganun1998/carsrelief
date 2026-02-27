import React from "react";
import { Layout } from "@/components/layout/Layout";

import partnwes from "@/assets/partners.jpeg"
import unhcr_logo from "@/assets/donors/unhcr_logo.jpg";
import unicef_logo from "@/assets/donors/unicef_logo.jpg";
import fao_logo from "@/assets/donors/fao_logo.jpg";
import nrc_logo from "@/assets/donors/nrc_logo.jpg";
import wfp_logo from "@/assets/donors/wfp_logo.jpg";
import shaci from "@/assets/donors/shaci.jpg";
import zoa_logo from "@/assets/donors/zoa_logo.jpeg";
import unops_logo from "@/assets/donors/unops_logo.jpeg";
import ocha_logo from "@/assets/donors/ocha_logo.jpeg";

const donors = [
  { logo: unhcr_logo, website: "https://www.unhcr.org/" },
  { logo: unicef_logo, website: "https://www.unicef.org/" },
  { logo: fao_logo, website: "https://www.fao.org/" },
  { logo: wfp_logo, website: "https://www.worldfoodprogram.org/" },
  { logo: nrc_logo, website: "https://www.nrc.no/" },
  { logo: shaci, website: "https://shaci.org/" },
  { logo: zoa_logo, website: "https://www.zoa-international.com/" },
  { logo: unops_logo, website: "https://www.unops.org/" },
  { logo: ocha_logo, website: "https://www.unocha.org/" },
];

const PartnerCard: React.FC<{ logo: string; website: string }> = ({
  logo,
  website,
}) => (
  <a
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center rounded-xl p-4 hover:shadow-xl transition duration-300"
  >
    <img
      src={logo}
      alt="Partner Logo"
      className="h-full w-auto object-contain hover:grayscale-0 transition duration-300"
    />
  </a>
);

const PartnersPage: React.FC = () => {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-28 px-4 text-white"
        style={{ backgroundImage: `url(${partnwes})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Donors & Strategic Partners
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            We collaborate with international humanitarian agencies and
            development partners to deliver education, protection, food
            security, and WASH services to vulnerable communities across South
            Sudan and refugee settlements in the region.
          </p>
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {donors.map((donor, index) => (
            <PartnerCard key={index} {...donor} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PartnersPage;