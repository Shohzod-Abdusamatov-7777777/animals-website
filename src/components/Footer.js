import React from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Foot = styled.footer`
  height: 60px;
  background-color: black;
  color: white;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-style: italic;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
const Telegram = styled(FaTelegram)`
  color: blue;
  padding: 0 1rem;
`;
const YouTube = styled(FaYoutube)`
  color: red;
  padding: 0.2rem 2rem;
`;
const Instagram = styled(FaInstagram)`
  color: #ccb111;
  padding: 0 1rem;
`;

const Footer = () => {
  return (
    <Foot>
      <h2>
        <Link to="#">
          <Telegram />
        </Link>
        <Link to="#">
          <YouTube />
        </Link>
        <Link to="#">
          <Instagram />
        </Link>
      </h2>
      <h4>Copyright &copy; Shohzod Abdusamatov</h4>
    </Foot>
  );
};

export default Footer;
