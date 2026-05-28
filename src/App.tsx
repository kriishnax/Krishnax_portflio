import SmoothScroll from "./components/SmoothScroll";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Process from "./sections/Process";
import Gallery from "./sections/Gallery";

function App() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      
      <SmoothScroll />

      <Navbar />

      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;