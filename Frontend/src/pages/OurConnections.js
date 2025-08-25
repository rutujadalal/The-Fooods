import React from "react";

import HeroSection from "../components/card1"; // Update if your path is different

const imageUrl = [
  "https://t4.ftcdn.net/jpg/11/38/20/17/360_F_1138201798_zh53GTCtjlnFFvfUGSeL4kBxnTS9SP2K.jpg",
];

const OurConnection = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        images={imageUrl}
        heading="Our Connections With"
        subheading="Corporate and Retail Sectors"
        intervalTime={4000}
        gradientFrom="from-[#4b0f0f]"
        gradientTo="to-[#7a1f1f]"
        headingTextColor="text-white"
        highlightTextGradient="bg-gradient-to-r from-red-300 to-yellow-100"
        imageHeight="85vh"
      />
{/*  */}
{/* Market Engagement Section with Split Lists */}
<div className="mt-40 max-w-6xl mx-auto bg-white text-gray-800 px-4 sm:px-8 md:px-12 py-10 shadow-md">
  <h3 className="text-2xl md:text-3xl font-bold text-[#7a1f1f] mb-6 text-center">
    Empowering Organizations with Food Solutions
  </h3>

  <p className="text-lg leading-relaxed font-medium text-gray-700 mb-4">
    To strive towards our mission, we engage with sectors of the market that require daily doses of
    deliciousness. We engage with individuals from the corporate and retail sectors to set in place
    food management systems and cafeteria management systems for organisations.
  </p>

  <p className="text-lg leading-relaxed font-medium italic text-[#4b0f0f] mb-4">
    A one-stop solution for cafeteria management, vendor management, and food management!
  </p>

  <p className="text-lg leading-relaxed font-medium text-gray-700 mb-10">
    We cater to employees that spend most of their workday standing and attending to customers or
    toiling away at their desk. We know how hard people in the retail sector work and for them, we
    have special meals that they can personalise according to their dietary preferences.
  </p>
{/* Decorative double maroon lines */}
<div className="w-full flex flex-col items-center my-10">
  <span className="block w-full h-1 bg-[#7a1f1f]" />
  <span className="block w-full h-1 bg-[#7a1f1f] mt-2" />
</div>
  {/* Retail vs Corporate Sections */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Retail Sector Column */}
    <div>
      <h4 className="text-xl font-semibold text-[#7a1f1f] mb-4">
        Why You Should Pick Us If You Work in Retail Sectors
      </h4>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        <li>We provide energising food that boosts mood</li>
        <li>Our deliveries are on-time consistently so you can optimise your breaks</li>
        <li>Nutritious, home-style meals—welcome relief from restaurant take-aways</li>
        <li>Sturdy, compact, and hygienic packaging</li>
        <li>
          Pre-order up to a month in advance—edit anytime if you change your mind!
        </li>
      </ul>
    </div>

    {/* Corporate Sector Column */}
    <div>
      <h4 className="text-xl font-semibold text-[#7a1f1f] mb-4">
        Why You Should Pick Us If You Work in Corporate Sectors
      </h4>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        <li>
          End-to-end, tech-driven cafeteria management optimised for managers and employees
        </li>
        <li>
          App automatically tracks cafeteria density—cuts wait times, boosts productivity
        </li>
        <li>Nutrient-rich meals for long-term health benefits</li>
        <li>Portions optimised to minimise food waste</li>
        <li>
          Globally-inspired flavours that turn a short lunch break into a culinary journey
        </li>
      </ul>
    </div>
  </div>
</div>




    </>
  )
};

export default OurConnection;