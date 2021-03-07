import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import gif from "../img/not2.gif";
import image from "../img/img_10.jpg";
import styled from 'styled-components';

const Not = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: black;
  width: 100%;
  height: 100vh;
  z-index: 200;

  h1 {
    color: red;
    font-size: clamp(1.2rem, 8vw, 4rem);
  }
  h1 span {
    background: url(${image}) center;
    font-size: clamp(2rem, 8vw, 6rem);
    background-clip: text;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-family: "Steelfish Rg", "helvetica neue", helvetica, arial, sans-serif;
    animation: animate_img 2s infinite linear;
  }

  @keyframes animate_img {
    0% {
      background-position: 50% 100%;
    }
    50% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 50% 100%;
    }
  }
`;

const PageNotFound = () => {
    return (
        <>
            <Header/>
            <Not>
                <h1><span>404</span> Page Not Found</h1>
                <img src={ gif } alt="page not found" ></img>
            </Not>
            <Footer/>
        </>
    )
}

export default PageNotFound
