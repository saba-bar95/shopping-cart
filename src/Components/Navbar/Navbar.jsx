import { Link } from "react-router-dom";
import styled from "styled-components";
import { FadeIn, FadeInLogo, FadeFromLeft } from "../../styles/animations";
import { Outlet } from "react-router-dom";

const StyledNavbar = styled.nav`
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards,
    ${FadeFromLeft} 1s ease-in-out forwards;
  animation-delay: 0s;
`;

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
    <StyledNavbar>
      <StyledNav className="nav-container">
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
            <StyledLi style={{ animationDelay: "1.3s" }}>Cart</StyledLi>
          </StyledUl>
        </StyledUlContainer>
      </StyledNav>
      <Outlet />
    </StyledNavbar>
  );
};

export default Navbar;
