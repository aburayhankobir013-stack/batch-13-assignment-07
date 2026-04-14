"use client";
import HeroSection from "../components/heroSection/heroSection";
import TrackingCard from "../components/trackingCard";
import CardContainer from "../components/cardContainer/cardContainer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <TrackingCard />
      <CardContainer />
    </div>
  );
}

export default Home;
