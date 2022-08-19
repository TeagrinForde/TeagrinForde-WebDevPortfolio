import React from "react";
import Navigation from "./components/Navigation.js"; //importing child components
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";
import SkillsTools from "./components/SkillsTools.js";
import Testimonials from "./components/Testimonials.js";
import MyStory from "./components/MyStory.js";

import "./App.css";

export default function App() { //parent component
  return (
    <div>
      <Navigation />
      <About />      
      <Projects />      
      <Testimonials />
      <MyStory />
      <SkillsTools />
      <Contact />
    </div>
  );
}
