// components/Home.js
import Navbar from "../../Components/Navbar/Navbar";
import Main from "../../Components/Main/Main";
import styled from "styled-components";
import { FadeIn, FadeFromLeft, FadeFromRight } from "../../styles/animations";

const StyledNavbar = styled.nav`
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards,
    ${FadeFromLeft} 1s ease-in-out forwards;
  animation-delay: 0s;
`;

const StyledMain = styled.main`
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards,
    ${FadeFromRight} 1s ease-in-out forwards;
  animation-delay: 1s;
`;

const Home = () => {
  return (
    <>
      <StyledNavbar>
        <Navbar />
      </StyledNavbar>
      <StyledMain>
        <Main />
      </StyledMain>
    </>
  );
};

export default Home;
