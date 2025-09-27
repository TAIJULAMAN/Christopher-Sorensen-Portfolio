import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Works from "./components/Works/Works";
import Service from "./components/Service/Service";
import Footer from "./common/Footer/Footer";
import Navbar from "./common/Navbar/Navbar";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Works />
      <Service />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
