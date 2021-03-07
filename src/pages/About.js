import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import img_2 from "../img/img_3.jpg";

const About = () => {
  return (
    <>
      
        <Header />
        <Hero image={img_2} title="Bo'ri" desc="Yirtqich hayvon" />
        <Footer />
     
    </>
  );
};

export default About;
