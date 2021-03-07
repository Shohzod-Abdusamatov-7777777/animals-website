import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import img_3 from "../img/img_8.jpg";

const Services = () => {
  return (
    <div>
      <Header />
      <Hero
        image={img_3}
        title="Yoʻlbars"
        desc=" Boshi yumaloq, mallarang ,  boʻladi"
      />
      <Footer />
    </div>
  );
};

export default Services;
