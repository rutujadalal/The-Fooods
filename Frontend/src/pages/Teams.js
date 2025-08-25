import React from "react";
import Card from "../components/Card";
import HeroSection from "../components/card1";

const teamMembers = [
  {
    name: "Alice Johnson",
    post: "Founder & CEO",
    image:
      "https://img.freepik.com/premium-photo/close-up-portrait-very-handsome-man-portrait-happy-man-black-background-fashion-guy_265223-52359.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: "Bob Smith",
    post: "Co-Founder & CTO",
    image:
      "https://media.istockphoto.com/id/1368076322/photo/portrait-of-a-confident-businesswoman-in-an-office.jpg?s=612x612&w=0&k=20&c=C55I_Kag1Ha7azdIjfsYPZQZXeztho4agsTHxNpYQNw=",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: "Clara Martinez",
    post: "Chief Design Officer",
    image:
      "https://img.freepik.com/free-photo/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt_8353-1116.jpg?semt=ais_hybrid&w=740",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: "David Lee",
    post: "Head of Operations",
    image:
      "https://img.freepik.com/free-photo/man-portrait-posing-loft-modern-space_158595-5365.jpg?semt=ais_hybrid&w=740",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const imageUrl = [
  "https://t4.ftcdn.net/jpg/11/38/20/17/360_F_1138201798_zh53GTCtjlnFFvfUGSeL4kBxnTS9SP2K.jpg",
];

const Teams = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        images={imageUrl}
        heading="Ready To Serve"
        subheading="Our Team"
        intervalTime={4000}
        gradientFrom="from-[#4b0f0f]"
        gradientTo="to-[#7a1f1f]"
        headingTextColor="text-white"
        highlightTextGradient="bg-gradient-to-r from-red-300 to-yellow-100"
        imageHeight="85vh"
      />

      {/* Intro Card Section */}
      <Card
        subtitle="Our Team"
        title=""
        emoji="🍴"
        description={`Our Team is thoroughly blessed by the initiatives and continuous support of the directors, advisory board members. We’re also grateful to all our staff members, who make sure we can deliver our best.

The FoOods is backed by a team of well-trained chefs that cook for passion. These experienced chefs select only the best raw ingredients from the best vendors in town. Your food reaches you promptly by a motivated delivery team that is always on time, and takes utmost care of your meal till it is safe in your hands`}
        image1="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        image2="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
      />
{/* Meet Our Team Section */}
<div className="min-h-screen bg-white py-12 px-4">
  <div className="text-center pt-8">
    <h1 className="text-[#4b0f0f] font-semibold text-[32px] md:text-[40px] mb-12">
      Meet Our Teams
    </h1>

    <div className="space-y-16 max-w-7xl mx-auto">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-[80px] ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
          style={{ minHeight: "320px" }} // Keeps all rows same minimum height
        >
          {/* Circular Image */}
          <div className="flex-shrink-0 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-rose-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info Card */}
          <div className="flex flex-col justify-center w-full max-w-2xl bg-white rounded-xl shadow-xl border border-rose-100 p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#4b0f0f] text-center md:text-left">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1 text-center md:text-left">{member.post}</p>
            <p className="text-gray-500 text-sm mt-4 text-center md:text-left">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </>
  );
};

export default Teams;
