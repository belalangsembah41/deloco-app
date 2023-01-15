import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import { FaTimes, FaBars } from "react-icons/fa";

function Header() {
  const [clickMenu, setClickMenu] = useState(false);

  const handleClick = () => setClickMenu(!clickMenu);

  return (
    <Container>
      <Navbar>
        <div>
          <h2>deLoco</h2>
        </div>
        <NavList className={clickMenu ? "navlink" : "navlink active"}>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Project</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Contact</NavLink>
          </NavItem>
        </NavList>
        <Hamburger onClick={handleClick}>
          {clickMenu ? <BurgerMenu /> : <BurgerClose />}
        </Hamburger>
      </Navbar>
      <HeroImage></HeroImage>
    </Container>
  );
}

const Container = styled.div`
  width: 1400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  background-color: #ded2a6;
  color: #988541;
`;

const Navbar = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.45);
  z-index: 1000;

  @media screen and (max-width: 890px) {
    padding: 0 0 0 3rem;
  }
`;

const NavList = styled.ul``;
const NavItem = styled.li``;
const NavLink = styled.a`
  font-size: 20px;
`;

const Hamburger = styled.div`
  display: flex;
  display: none;
  z-index: 10;

  @media screen and (max-width: 890px) {
    display: flex;
    width: 30px;
    height: 30px;
    margin-right: 30px;
  }
`;

const BurgerMenu = styled(FaTimes)`
  font-size: 30px;
  display: none;

  @media screen and (max-width: 890px) {
    display: flex;
  }
`;

const BurgerClose = styled(FaBars)`
  font-size: 30px;
  display: none;

  @media screen and (max-width: 890px) {
    display: flex;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url("/images/image-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;

  @media screen and (max-width: 890px) {
    background-size: cover;
  }
`;

export default Header;
