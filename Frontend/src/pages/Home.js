
import QualityStandards from "../section/QualityStandards";
import HeroSection from "../components/HeroSection";
// import Header from "../components/Header";
// import Slider from "../components/Slider";
import WhoAreWe from "../section/WhoAreWe";
import AboutFood from "../section/AboutFood";
import ContactDetails from "../section/ContactDetails"
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-[#FBC6A4]">
      <Navbar/>
      <HeroSection />
      <WhoAreWe />
      <QualityStandards />
      <AboutFood/>
      <ContactDetails />
    </div>
  );
};

export default Home;