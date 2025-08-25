// import React from "react";
// import {
//   FaUtensils,
//   FaPaintBrush,
//   FaUsers,
//   FaLeaf,
//   FaMoneyBillWave,
//   FaClock,
// } from "react-icons/fa";

// const About = () => {
//   return (
//     <div className="min-h-screen pt-24 px-4 py-10 md:px-12 lg:px-20 bg-gradient-to-br from-white via-rose-50 to-purple-50 text-gray-800">
//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-fuchsia-700 mb-8 font-fancy tracking-wide">
//         About Us
//       </h2>

//       {/* Intro */}
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-700">
//           Welcome to <span className="text-fuchsia-600 font-semibold">Catering Bliss</span> — where
//           exquisite taste meets artistic presentation. Whether you're planning a lavish wedding, a
//           chic corporate event, or an intimate house party, we're here to bring your dream
//           celebration to life with food, flair, and flawless service.
//         </p>
//       </div>

//       {/* Mission & Vision */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-pink-300 transition cursor-pointer h-[220px] flex flex-col justify-between">
//           <div>
//             <h3 className="text-xl font-semibold text-fuchsia-700 mb-3">Our Mission</h3>
//             <p className="text-gray-700 font-medium">
//               To serve delightful flavors paired with stunning ambiance that makes every occasion
//               unforgettable and every guest feel special.
//             </p>
//           </div>
//           <FaUtensils className="text-pink-500 text-3xl self-end mt-4" />
//         </div>

//         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-pink-300 transition cursor-pointer h-[220px] flex flex-col justify-between">
//           <div>
//             <h3 className="text-xl font-semibold text-fuchsia-700 mb-3">Our Vision</h3>
//             <p className="text-gray-700 font-medium">
//               To be a household name in the world of catering and decor, known for passion, quality,
//               and magical event experiences.
//             </p>
//           </div>
//           <FaPaintBrush className="text-purple-500 text-3xl self-end mt-4" />
//         </div>
//       </div>

//       {/* Why Choose Us */}
//       <div className="mt-16 max-w-6xl mx-auto text-center">
//         <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6">Why Choose Us?</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               icon: <FaUtensils />,
//               title: "Custom Menus",
//               desc: "We design menus that align with your theme, taste, and budget — no two events are ever the same.",
//               color: "text-rose-500",
//             },
//             {
//               icon: <FaPaintBrush />,
//               title: "Stylish Decorations",
//               desc: "Visually captivating setups tailored to reflect your personality and elevate the vibe.",
//               color: "text-purple-500",
//             },
//             {
//               icon: <FaUsers />,
//               title: "Expert Team",
//               desc: "A team of culinary artists and decor stylists bringing creativity and professionalism to your event.",
//               color: "text-fuchsia-600",
//             },
//             {
//               icon: <FaLeaf />,
//               title: "Fresh Ingredients",
//               desc: "From farm to plate — we use only the freshest produce and top-quality ingredients.",
//               color: "text-green-500",
//             },
//             {
//               icon: <FaMoneyBillWave />,
//               title: "Value-Packed Plans",
//               desc: "Flexible pricing without compromising elegance. Quality that fits your budget.",
//               color: "text-yellow-500",
//             },
//             {
//               icon: <FaClock />,
//               title: "Punctual Delivery",
//               desc: "We set up, serve, and pack up on schedule — so you can relax and enjoy every moment.",
//               color: "text-blue-500",
//             },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl p-5 shadow-md hover:shadow-pink-300 transition transform hover:scale-105 cursor-pointer h-[210px] flex flex-col justify-between"
//             >
//               <div className="text-left">
//                 <h4 className="text-lg font-semibold text-fuchsia-600 mb-2">{item.title}</h4>
//                 <p className="text-sm text-gray-700">{item.desc}</p>
//               </div>
//               <div className={`text-2xl mt-4 self-end ${item.color}`}>{item.icon}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="mt-20 text-center">
//         <h4 className="text-2xl font-semibold text-fuchsia-700 mb-3">Let’s Design Your Dream Event</h4>
//         <p className="text-gray-700 mb-6">
//           Get in touch today — whether it’s an elegant wedding, a joyful birthday, or a lively
//           corporate affair.
//         </p>
//         <button className="bg-fuchsia-600 text-white px-6 py-2 rounded-full font-medium hover:bg-fuchsia-700 transition">
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaPaintBrush,
  FaUsers,
  FaLeaf,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";
import HeroSection from "../components/card1"; // Update if your path is different

const imageUrl = [
  "https://t4.ftcdn.net/jpg/11/38/20/17/360_F_1138201798_zh53GTCtjlnFFvfUGSeL4kBxnTS9SP2K.jpg",
];

const About = () => {
  const features = [
    {
      icon: <FaUtensils />,
      title: "Custom Menus",
      desc: "We design menus that align with your theme, taste, and budget — no two events are ever the same.",
      color: "text-[#7a1f1f]",
    },
    {
      icon: <FaPaintBrush />,
      title: "Stylish Decorations",
      desc: "Visually captivating setups tailored to reflect your personality and elevate the vibe.",
      color: "text-[#7a1f1f]",
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      desc: "A team of culinary artists and decor stylists bringing creativity and professionalism to your event.",
      color: "text-[#7a1f1f]",
    },
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      desc: "From farm to plate — we use only the freshest produce and top-quality ingredients.",
      color: "text-[#7a1f1f]",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Value-Packed Plans",
      desc: "Flexible pricing without compromising elegance. Quality that fits your budget.",
      color: "text-[#7a1f1f]",
    },
    {
      icon: <FaClock />,
      title: "Punctual Delivery",
      desc: "We set up, serve, and pack up on schedule — so you can relax and enjoy every moment.",
      color: "text-[#7a1f1f]",
    },
  ];
   
   const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/contact"); // Adjust the route if needed
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        images={imageUrl}
        heading="All About Us"
        subheading="Our Story"
        intervalTime={4000}
        gradientFrom="from-[#4b0f0f]"
        gradientTo="to-[#7a1f1f]"
        headingTextColor="text-white"
        highlightTextGradient="bg-gradient-to-r from-red-300 to-yellow-100"
        imageHeight="85vh"
      />

      {/* About Content */}
      <div className="min-h-screen pt-16 px-4 py-10 md:px-12 lg:px-20 bg-white text-gray-800 font-poppins mt-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7a1f1f] mb-8 tracking-wide">
          About Us
        </h2>

        {/* Intro */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-700">
            Welcome to{" "}
            <span className="text-[#4b0f0f] font-semibold">Catering Bliss</span> — where exquisite
            taste meets artistic presentation. Whether you're planning a lavish wedding, a chic
            corporate event, or an intimate house party, we're here to bring your dream celebration
            to life with food, flair, and flawless service.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg border border-[#7a1f1f] transition cursor-pointer h-[220px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#7a1f1f] mb-3">Our Mission</h3>
              <p className="text-gray-700 font-medium">
                To serve delightful flavors paired with stunning ambiance that makes every occasion
                unforgettable and every guest feel special.
              </p>
            </div>
            <FaUtensils className="text-[#7a1f1f] text-3xl self-end mt-4" />
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg border border-[#7a1f1f] transition cursor-pointer h-[220px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#7a1f1f] mb-3">Our Vision</h3>
              <p className="text-gray-700 font-medium">
                To be a household name in the world of catering and decor, known for passion,
                quality, and magical event experiences.
              </p>
            </div>
            <FaPaintBrush className="text-[#7a1f1f] text-3xl self-end mt-4" />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#7a1f1f] mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-md border border-[#7a1f1f] hover:shadow-lg transition transform hover:scale-105 cursor-pointer h-[210px] flex flex-col justify-between"
              >
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-[#7a1f1f] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
                <div className={`text-2xl mt-4 self-end ${item.color}`}>{item.icon}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h4 className="text-2xl font-semibold text-[#7a1f1f] mb-3">Let’s Design Your Dream Event</h4>
          <p className="text-gray-700 mb-6">
            Get in touch today — whether it’s an elegant wedding, a joyful birthday, or a lively
            corporate affair.
          </p>
          <button
      onClick={handleRedirect}
      className="bg-[#7a1f1f] text-white px-6 py-2 rounded-full font-medium hover:bg-[#4b0f0f] transition"
      aria-label="Contact Us"
    >
      Contact Us
    </button>

        </div>
      </div>
    </>
  );
};

export default About;
