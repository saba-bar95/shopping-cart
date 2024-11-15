import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { FadeIn, FadeInLogo, FadeFromLeft } from "../../styles/animations";
import { Outlet } from "react-router-dom";
import cart from "/src/assets/images/grocery-store.png";
import Cart from "../Cart";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ isCartVisible }) => (isCartVisible ? "hidden" : "scroll")}; 
    transition: background-color 0.3s ease, opacity 0.3s ease; 
  }
`;

const StyledNavbar = styled.div`
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards,
    ${FadeFromLeft} 1s ease-in-out forwards;
  animation-delay: 0s;
`;

const StyledNav = styled.nav`
  background-color: #8cd0e3;
  width: 100%;
`;

const StyledUlContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
  font-family: LatoBold;
  max-width: 1300px;
  margin: auto;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 50px;
  list-style-type: none;
  align-items: center;
`;

const StyledLi = styled.li`
  padding: 7px;
  transition: transform 0.3s ease-in-out;
  font-size: 1.5em;
  text-decoration: none;
  background: linear-gradient(to top left, #1e3c72, #1e3c72, #2a5298);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards;

  img {
    width: 25px;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const LogoContainer = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  min-width: 180px;
  text-align: center;
`;

const StyledLogo = styled.p`
  background: linear-gradient(to top left, #f3f, #f09819);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${FadeInLogo} 2s linear;
`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const close = (e) => {
    if (!e.target.closest(".container")) setVisible(false);
  };

  return (
    <>
      <GlobalStyle isCartVisible={visible} />
      <StyledNavbar>
        <StyledNav>
          <StyledUlContainer>
            <LogoContainer>
              <StyledLogo>Proxima</StyledLogo>
            </LogoContainer>
            <StyledUl>
              <Link
                to="/"
                state={{ loaded: true }}
                style={{ textDecoration: "none" }}>
                <StyledLi style={{ animationDelay: "0.3s" }}>Home</StyledLi>
              </Link>
              <Link to="/shop" style={{ textDecoration: "none" }}>
                <StyledLi style={{ animationDelay: "0.8s" }}>Shop</StyledLi>
              </Link>
              <StyledLi
                style={{ animationDelay: "1.3s" }}
                onClick={() => {
                  setVisible((prev) => !prev);
                }}>
                <img src={cart} alt="" />
              </StyledLi>
            </StyledUl>
          </StyledUlContainer>
        </StyledNav>
        {visible && <Cart onClose={() => setVisible(false)} close={close} />}
        <Outlet />
      </StyledNavbar>
    </>
  );
};

export default Navbar;
