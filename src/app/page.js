
import HeroSection from "../components/heroSection/heroSection";
import TrackingCard from "../components/trackingCard";
import CardContainer from "../components/cardContainer/cardContainer";

function Home(){
  return(
    <div>
      <HeroSection />
      <TrackingCard />
      <CardContainer />
    </div>
  );
}

export default Home;