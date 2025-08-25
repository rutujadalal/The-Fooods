// import React from "react";

// import HeroSection from "../components/card1";
// import { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const faqs = [
//   {
//     question: "What is epicFoods?",
//     answer:
//       "epicFoods is a catering platform that delivers delicious meals crafted for every occasion.",
//   },
//   {
//     question: "How do I place an order?",
//     answer:
//       "You can place an order through our website by selecting your menu and filling out the event details.",
//   },
//   {
//     question: "Do you offer vegetarian options?",
//     answer:
//       "Yes, we provide a wide range of vegetarian, vegan, and custom dietary options.",
//   },
//   {
//     question: "Where do you deliver?",
//     answer:
//       "Currently, we serve Aurangabad and surrounding areas. More cities coming soon!",
//   },
// ];

// const imageUrl = [
//   "https://cdn.pixabay.com/photo/2017/11/29/16/12/berries-2986532_640.jpg",
// ];


// const FAQCard = ({ question, answer, isOpen, onToggle }) => (
//   <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-md">
//     <button
//       onClick={onToggle}
//       className="w-full bg-[#7a1f1f] text-white px-4 py-3 flex justify-between items-center text-left text-lg font-semibold focus:outline-none"
//     >
//       {question}
//       <span className="ml-4">
//         {isOpen ? <FaMinus /> : <FaPlus />}
//       </span>
//     </button>
//     {isOpen && (
//       <div className="bg-white px-4 py-3 text-gray-700 text-sm">
//         {answer}
//       </div>
//     )}
//   </div>
// );

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

// const Faqs = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <HeroSection
//         images={imageUrl}
//         heading="You Ask, We Answer"
//         subheading="Frequently Asked Questions"
//         intervalTime={4000}
//         gradientFrom="from-[#4b0f0f]"
//         gradientTo="to-[#7a1f1f]"
//         headingTextColor="text-white"
//         highlightTextGradient="bg-gradient-to-r from-red-300 to-yellow-100"
//         imageHeight="85vh"
//       />

//        <section className="max-w-3xl mx-auto p-6 my-12">
//       <h2 className="text-3xl font-bold text-center text-[#7a1f1f] mb-8">
//         Frequently Asked Questions
//       </h2>
//       {faqs.map((faq, index) => (
//         <FAQCard
//           key={index}
//           question={faq.question}
//           answer={faq.answer}
//           isOpen={openIndex === index}
//           onToggle={() => toggleFAQ(index)}
//         />
//       ))}
//     </section>
// </>
//   )
// };

// export default Faqs;




import React, { useState } from "react";
import HeroSection from "../components/card1";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How do you maintain the quality with each delivery?",
    answer:
      "The quality is maintained through our 5-Step Quality management solution which each order must pass through before it comes out to our customers.",
  },
  {
    question: "What precautions do you take with regards to COVID-19?",
    answer:
      "Our premises are constantly sanitized and we conduct temperature checks before allowing people into the building. We ensure that all of our staff members are prescreened and have produced a health report before allowing them onto our premises. Beyond which we offer all of our customers access to the bios and health reports of all the people involved in their food delivery process through our app-based interface.",
  },
  {
    question: "Are these meal plans suitable for children?",
    answer:
      "Yes, you can choose the appropriate meal plans and durations as per your children’s needs such that we can ensure they are given a nutritious yet delicious meal.",
  },
  {
    question: "How can we be assured that these meals will be as per my dietary needs?",
    answer:
      "This can be assured as you will be able to customize your meals and even be offered a free session with our in-house dietitian if you choose to do so. In this way, both the people that are already sure of what they are getting and those who are still deciding will be able to do so.",
  },
  {
    question: "Can we also take orders for corporate parties?",
    answer:
      "Yes, we do cater to bulk orders, this includes all kinds of corporate parties and get-togethers no matter the occasion we have got your back.",
  },
];

const imageUrl = [
  "https://cdn.pixabay.com/photo/2017/11/29/16/12/berries-2986532_640.jpg",
];

const FAQCard = ({ question, answer, isOpen, onToggle }) => (
  <div className="border border-[#7a1f1f] rounded-lg shadow-sm bg-white ">
    <button
      onClick={onToggle}
      className="w-full px-4 py-3 flex justify-between items-center text-left text-lg font-semibold text-[#7a1f1f] focus:outline-none"
    >
      {question}
      <span className="ml-4">{isOpen ? <FaMinus /> : <FaPlus />}</span>
    </button>
    {isOpen && (
      <div className="px-4 py-3 text-gray-700 text-sm border-t border-[#7a1f1f]">
        {answer}
      </div>
    )}
  </div>
);

const Faqs = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const toggleFAQ = (index) => {
    const newSet = new Set(openIndexes);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenIndexes(newSet);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        images={imageUrl}
        heading="You Ask, We Answer"
        subheading="Frequently Asked Questions"
        intervalTime={4000}
        gradientFrom="from-[#4b0f0f]"
        gradientTo="to-[#7a1f1f]"
        headingTextColor="text-white"
        highlightTextGradient="bg-gradient-to-r from-red-300 to-yellow-100"
        imageHeight="85vh"
      />

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto p-6 my-12 mt-20">
        <h2 className="text-3xl font-bold text-center text-[#7a1f1f] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <FAQCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndexes.has(index)}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Faqs;
