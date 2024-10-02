import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeInLogo = keyframes`
  0% {
    opacity: 0;
    letter-spacing: -0.2em
  }
  50% {
    opacity: 0.5;
    letter-spacing: -0.1em;
  }
  100% {
    opacity: 1;
    letter-spacing: 0;
  }
`;

const StyledNav = styled.nav`
  background-color: #8cd0e3;
  width: 100%;
`;

const StyledUlContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 30px;
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
  font-size: 1.3em;
  text-decoration: none;
  background: linear-gradient(to top left, #1e3c72, #1e3c72, #2a5298);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;

  &:hover {
    transform: scale(1.2);
  }
`;

const LogoContainer = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  font-family: RalewayBold;
  min-width: 180px;
  text-align: center;
`;

const StyledLogo = styled.p`
  background: linear-gradient(to top left, #ff512f, #f09819);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeInLogo} 2s linear;
`;

const Navbar = () => {
  return (
    <StyledNav>
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
