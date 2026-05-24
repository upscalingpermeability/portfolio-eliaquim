import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10 flex flex-col gap-32">
      <Hero />

      <div className="grid md:grid-cols-2 gap-16">
        <About />
        <Education />
      </div>

      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden text-neutral-200 antialiased selection:bg-white selection:text-black">
        
        {/* Background Blobs for Atmosphere */}
        <div className="blob bg-neutral-200 w-[500px] h-[500px] top-[-100px] left-[-100px]" />

        <div className="blob bg-neutral-400 w-[600px] h-[600px] bottom-[-200px] right-[-100px] rounded-full" />

        <div className="blob bg-white w-[400px] h-[400px] top-[40%] left-[30%] rounded-full opacity-5" />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Additional Pages */}
          <Route
            path="/about"
            element={
              <div className="pt-32 px-6 max-w-6xl mx-auto">
                <About />
              </div>
            }
          />

          <Route
            path="/projects"
            element={
              <div className="pt-32 px-6 max-w-6xl mx-auto">
                <Projects />
              </div>
            }
          />

          <Route
            path="/skills"
            element={
              <div className="pt-32 px-6 max-w-6xl mx-auto">
                <Skills />
              </div>
            }
          />

          <Route
            path="/contact"
            element={
              <div className="pt-32 px-6 max-w-6xl mx-auto">
                <Contact />
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}