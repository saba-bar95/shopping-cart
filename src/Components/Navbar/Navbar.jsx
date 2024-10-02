// components/Navbar/Navbar.js
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FadeIn, FadeInLogo } from "../../styles/animations";

const StyledNav = styled.div`
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
  return (
    <StyledNav className="nav-container">
      <StyledUlContainer>
        <StyledUl>
          <StyledLi style={{ animationDelay: "0s" }}>
            <Link to="/home">Home</Link>
          </StyledLi>
          <StyledLi style={{ animationDelay: "0.5s" }}>
            <Link to="/shop">Shop</Link>
          </StyledLi>
        </StyledUl>
        <LogoContainer>
          <StyledLogo>Proxima</StyledLogo>
        </LogoContainer>
        <StyledUl>
          <StyledLi style={{ animationDelay: "1s" }}>About Us</StyledLi>
          <StyledLi style={{ animationDelay: "1.5s" }}>Contact </StyledLi>
        </StyledUl>
      </StyledUlContainer>
    </StyledNav>
  );
};

export default Navbar;
