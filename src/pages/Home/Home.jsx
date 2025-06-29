import HeroSection from "../../components/shared/HeroSection";
import CustomerFeedback from "./CustomerFeedback";
import OurTeam from "./OurTeam";
import Services from "./Services";
import FAQ from "../../pages/Home/FAQ";
import OurProgress from "./OurProgress";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-">
      <HeroSection />
      <Services />
      <OurProgress />
      <CustomerFeedback />
      <OurTeam />
      <FAQ />
    </div>
  );
};

export default Home;
