import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import StarCanvas from "./components/StarField";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import LoadingScreen from "./components/LoadingScreen"; // import your loader

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait until window is fully loaded
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (isLoading) return <LoadingScreen />; // show loader while loading

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <CursorGlow />
      <StarCanvas />
    </>
  );
}
