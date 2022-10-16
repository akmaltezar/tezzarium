import React from "react";
import "./App.css";
import Tech from "./components/Tech";
import { SectionDivider } from "./elements/index";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Tech />
      <SectionDivider />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
