import Header from "./components/Header";
import Hero from "./components/Hero";
import InnovateSection from "./components/InnovateSection";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InnovateSection />
        <div className="h-44"></div>
      </main>
    </>
  );
}

export default App;
