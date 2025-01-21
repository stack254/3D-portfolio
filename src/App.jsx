import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  //Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 style={{ backgroundColor: 'var(--color-bg-primary)'">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <ThemeSwitcher />
      </div>
    </BrowserRouter>
  );
};

export default App;
