import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  padding: 0rem calc((100vw-1300px) / 2);
  top: 0;
  position: fixed;
  display: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

const Logo = styled(Link)`
  font-family: sans-serif;
  color: #fff;
  text-decoration: none;
  font-style: italic;
  font-weight: bolder;
  font-size: 2rem;
  padding-left: 1.2rem;
  @media screen and (max-width: 1300px) {
    font-size: 2rem;
    padding-left: 3rem;
  }
  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
    padding-left: 2rem;
  }
`;
const NavContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 3s ease;
  @media screen and (max-width: 768px){
    display: block;
   width: 100%;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  padding: 0 1rem;
  transition: all 1s ease;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: ${({ click }) => (click ? "60px" : "-150px")};
    opacity: ${({ click }) => (click ? 1 : 0)};
    width: 40%;
    font-size: 1.5rem;
    text-align: center;
    padding: 0 1.8rem;
    margin-left: 5%;
  }
  @media screen and (max-width: 560px) {
    margin-left: 0%;
  }
  @media screen and (max-width: 960px) {
    margin-right: 2rem;
  }
`;
const NavItem = styled.li`
  list-style-type: none;
  font-size: 1.2rem;
  margin:0 1rem;
  @media screen and (max-width: 768px) {
    width: 50%;
    /* padding: 0.6rem; */
    background: black;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    transition: all 0.5s ease;
    &:hover {
      background: #03e9f4;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 200px #03e9f4;
    }
    &:nth-child(1):hover {
      filter: hue-rotate(290deg);
    }
    &:nth-child(2):hover {
    }
    &:nth-child(3):hover {
      filter: hue-rotate(330deg);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 1300px) {
    margin-right: 2rem;
  }
  @media screen and (max-width: 960px) {
    margin-right: 1.8rem;
  }
`;

const NavbarLink = styled(Link)`
  color: #fff;
  display: block;
  text-decoration: none;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  padding: 0.6rem 0;
  &:hover {
    color: cyan;
  }
  @media screen and (max-width: 768px) {
    &:hover {
      background: "";
      color: #000;
    }
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

// header
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Navbar>
      <Logo to="/">Animals </Logo>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavContainer>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavbarLink to="/">Home</NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink to="/about">About</NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink to="/services">Services</NavbarLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Navbar>
  );
};

export default Header;
