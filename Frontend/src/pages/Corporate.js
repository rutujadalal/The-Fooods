import HeroSection from "../components/card1";
import WhoAreWe from "../section/WhoAreWe";


const imageUrl = [
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Corporate = () => {
  return (
    <div>
    
      <HeroSection
        images={imageUrl}
        heading="Corporate Sector"
        subheading=""
        intervalTime={4000}
        gradientFrom="from-[#4b0f0f]"
        gradientTo="to-[#7a1f1f]"
        headingTextColor="text-white"
        highlightTextGradient="bg-gradient-to-r from-red-300 to-yellow-100"
        imageHeight="85vh"
      />

      {/* Importance of Diet and Food Intake Management Section */}
      <section
        className="py-16 px-6 md:px-20 font-sans"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto">
          <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase">
            Importance of Diet and Food Intake Management
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Nutrition is the key to healthy living. Food Intake Management and
            good dietary packages are essential not only for the health freaks
            out there but also for those of us who are simply looking to lead a
            more wholesome life.
            <br />
            <br />
            Studies show that happiness is directly proportional to your
            increased productivity.
            <br />
            <br />
            A proper diet and optimized food intake management will let you
            grab the food of your choice at the times you choose.
            <br />
            <br />
            As we all know the key to our happiness often lies in our tummy. A
            good diet not only keeps us happy but also ensures that we stay
            rejuvenated throughout the day ensuring our productivity.
            <br />
            <br />
            With our assorted meal plans and customisable menu options, you can
            opt for the options that serve you with the best.
          </p>
        </div>
      </section>

      <WhoAreWe
        subtitle="Revolutionizing Everyday Meals"
        title="What Sets The FoOods corporate Apart"
        emoji="🍽️"
        description={`What makes us the best and how do we stand out? Well here are just a few things that we believe make us a leader within the subscription food industry.
- App-based integration designed to satisfy the needs of our belly
- Comprehensive reports of consumed calories, carbs, proteins, and other essential information
- Offered a free consultation with our in-house dietician
- Customisable meal plans for all diets`}
        image1="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        image2="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
      />
    </div>
  );
};

export default Corporate;
