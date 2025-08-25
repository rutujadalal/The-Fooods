import HeroSection from "../components/card1";

import WhoAreWe from "../components/WhoAreWe";


 const imageUrl = [
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

const Retail = () => {
 

  return (
    <div className="min-h-screen">
    
      <HeroSection
        images={imageUrl}
        heading="Retail Sector"
        subheading=""
        intervalTime={4000}
        gradientFrom="from-[#4b0f0f]"
        gradientTo="to-[#7a1f1f]"
        headingTextColor="text-white"
        highlightTextGradient="bg-gradient-to-r from-red-300 to-yellow-100"
        imageHeight="85vh"
      />
      {/* Section from Image: Why Choose Food Subscription Services & Importance of Diet and Food Intake Management */}
    <section className="py-16 px-6 md:px-20 font-sans mt-10"
  style={{ fontFamily: "'Poppins', sans-serif" }}
>
  <div className="max-w-5xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column: Why Choose Food Subscription Services */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase">
          Why Choose Food Subscription Services
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          The FoOods is a premier food-tech company that has emerged to provide its services within the retail sector. The technological revolution has struck the world hard, it is our mission at The FoOods to leverage these technologies in an effort to solve a problem many face on a daily basis.
          <br /><br />
          Employees of all sectors, those who are craving a delicious meal, or even those looking to stick to a diet would all be able to utilize our services. A tasty meal is something that everyone desires, but it is a luxury that often evades us due to a lack of time.
          <br /><br />
          This is where food subscription services come in, with our stellar food subscription platform we strive to optimize your nutritional needs. Pick out the food of your choice whenever and wherever, enjoy a myriad of the best options as you navigate through a plethora of options.
          <br /><br />
          The FoOods can help you commit to eating healthy or sticking to a diet. With our assorted meal plans and customizable menu options, you can opt for the options that serve you with the best.
        </p>
      </div>

      {/* Right Column: Importance of Diet and Food Intake Management */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase">
          Importance of Diet and Food Intake Management
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Nutrition is the key to healthy living. Food Intake Management and good dietary packages are essential not only for the health freaks out there but also for those of us who are simply looking to lead a more wholesome life.
          <br /><br />
          Studies show that happiness is directly proportional to your increased productivity.
          <br /><br />
          A proper diet and optimized food intake management will let you grab the food of your choice at the times you choose.
          <br /><br />
          As we all know the key to our happiness often lies in our tummy. A good diet not only keeps us happy but also ensures that we stay rejuvenated throughout the day ensuring our productivity.
          <br /><br />
          With our assorted meal plans and customisable menu options, you can opt for the options that serve you with the best.
        </p>
      </div>
    </div>
  </div>
</section>
    



      <WhoAreWe
  subtitle="Our Mission In Retail"
  title="Redefining Everyday Meals"
  emoji="🛒"
  description="At The FoOods, our retail mission is to make healthy, flavorful, and affordable meals available for everyone—anywhere, anytime. From busy professionals to fitness enthusiasts, our customizable meal plans cater to diverse dietary needs while ensuring taste and nutrition are never compromised. Say goodbye to fast food and hello to convenience with care."
  image1="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  image2="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
/>

     
    </div>
  );
};

export default Retail;