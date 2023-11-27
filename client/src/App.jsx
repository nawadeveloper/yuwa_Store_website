import Header from "./components/Header";
import Hero from "./components/Hero";
import InnovateSection from "./components/InnovateSection";
import DisplaySection from "./components/DisplaySection";
import FrameSection from "./components/FrameSection";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InnovateSection />
        <DisplaySection />
        <FrameSection />
      </main>
      <Offer />
      <Footer />
    </>
  );
}

export default App;
