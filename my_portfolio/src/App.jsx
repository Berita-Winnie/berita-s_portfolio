import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import VaSamples from "./components/VaSamples";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="selection:bg-[var(--accent-soft)] selection:text-[var(--text)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <VaSamples />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
