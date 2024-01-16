// App.js
import React from "react";
import Navbar from "./components/Nabar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Portfolio from "./components/Portafolio.js";
import Contact from "./components/Contact.js";
import DynamicBackground from "./components/DynamicBackground.js";

const App = () => {
  return (
    <>
      <DynamicBackground />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
