// // 

// import React, { useState, useEffect, useCallback } from "react";
// import "@fontsource/poppins"; // Import Poppins font

// const HeroSection = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1447078806655-40579c2520d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8fDA%3D",
//     "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = useCallback(() => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   }, [images.length]);

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextImage, 3000);
//     return () => clearInterval(interval);
//   }, [nextImage]);

//   return (
//     <section
//       className="min-h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center text-center relative font-poppins"
//       style={{
//         backgroundImage: `url('${images[currentImageIndex]}')`,
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         backgroundBlendMode: "overlay",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         transition: "background-image 0.5s ease-in-out",
//       }}
//     >
//       {/* Navigation buttons */}
//       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 z-20">
//         <button
//           onClick={prevImage}
//           className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
//         >
//           &lt;
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 z-20">
//         <button
//           onClick={nextImage}
//           className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Content */}
//       <div className="max-w-2xl px-4 sm:px-6 lg:px-8 z-10">
//         <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
//           Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 italic">food</span> makes good times even better
//         </h1>
//         <p className="mt-4 text-base sm:text-lg lg:text-xl text-white drop-shadow-md">
//           Elevate your meals with premium private chefs near you.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// HomePageHero.jsx

import HeroSection from "./card1"; // card1 should export the reusable HeroSection

const imageUrls = [
  "https://images.unsplash.com/photo-1447078806655-40579c2520d6?w=600&auto=format&fit=crop&q=60",
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
];

const HomePageHero = () => {
  return (
    <HeroSection
      images={imageUrls}
      heading="Great food makes good times even better"
      subheading="Order from our top chefs now!"
      imageHeight="100vh"
      intervalTime={4000}
    />
  );
};

export default HomePageHero;
