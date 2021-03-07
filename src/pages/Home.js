import React from "react";
import {} from "react-dom";
import {} from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import img_1 from "../img/img_10.jpg";


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      load: true,
    };
  }
  
  render() {
    return (
      <div>
        <Loader remove={"fadeout"} />
        <Header />
        <Hero image={img_1} title="To'ti" desc="qushlar oilasiga mansub" />
        <Footer />
      </div>
    );
  }
}

export default Home;
