import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const Section = styled.section`
  background: url(${({ image }) => image}) center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-center;
  align-items: flex-end;
  margin-top: -50px;
`;
const Container = styled.div`
  color: #fff;
  padding: 2rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;
  max-width: 40%;
  h1 {
    font-size: clamp(2rem, 8vw, 3rem);
    margin-bottom: 1rem;
  }
  p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    border-radius: 4px;
    font-size: clamp(1rem, 4vw, 2.5rem);
    padding: 0.8rem 1.2rem;
    background-color: black;
    /* background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%); */
    border: none;
    border-radius:5px;
    color: #03e9f4;
    cursor: pointer;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    transition: 0.5s;
    z-index:1;
  }
  a:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
`;

const Hero = ({ image, title, desc }) => {
  return (
    <Section image={image}>
      <Container>
        <h1>{title}</h1>
        <p>{ desc }</p>
        <Link to="#">Learn More</Link>
      </Container>
    </Section>
  );
};

export default Hero;
