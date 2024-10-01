import { Link } from "react-router-dom";
import styled from "styled-components";

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

  &:hover {
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <StyledUlContainer>
        <StyledUl>
          <StyledLi>
            <Link to="/home">Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/cart">Cart</Link>
          </StyledLi>
        </StyledUl>
        <StyledUl>
          <StyledLi>About Us</StyledLi>
          <StyledLi>Contact </StyledLi>
        </StyledUl>
      </StyledUlContainer>
    </StyledNav>
  );
};

export default Navbar;
