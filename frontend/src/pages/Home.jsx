import React from "react";
import "./Home.module.css";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Portfolio from "../components/Portfolio/Portfolio";
import Plans from "../components/Plans/Plans";

function Home() {
  return <>
    <Hero />
    <About />
    <Plans />
    {/* <Portfolio /> */}
    <Contact />
  </>;
}

export default Home;
