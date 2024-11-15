import styled from "styled-components";
import { FadeFromRight, FadeIn } from "../../styles/animations";
import BackgroundImage from "./BackgroundImg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const StyledHome = styled.div`
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards,
    ${FadeFromRight} 1s ease-in-out forwards;
  ${({ $isLoaded }) => !$isLoaded && `animation-delay: 1s;`}
`;

const Home = () => {
  const location = useLocation();
  const isLoaded = location.state;

  useEffect(() => {
    window.history.replaceState({}, document.title, "/");
  }, []);

  return (
    <>
      <StyledHome $isLoaded={isLoaded}>
        <BackgroundImage></BackgroundImage>
      </StyledHome>
    </>
  );
};

export default Home;
