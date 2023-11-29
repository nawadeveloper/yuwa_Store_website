import Hero from "./Hero";
import InnovateSection from "./InnovateSection";
import DisplaySection from "./DisplaySection";
import FrameSection from "./FrameSection";
import Offer from "./Offer";

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <InnovateSection />
        <DisplaySection />
        <FrameSection />
      </main>
      <Offer />
    </>
  );
};

export default HomePage;
