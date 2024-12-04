import styled from "styled-components";
import { FadeFromRight, FadeIn } from "../../styles/animations";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import background from "../../assets/images/background.jpg";

const StyledHome = styled.div`
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards,
    ${FadeFromRight} 1s ease-in-out forwards;
  ${({ $isLoaded }) => !$isLoaded && `animation-delay: 1s;`};
  animation-delay: 1s;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: auto;
`;

const WelcomeContainer = styled.div`
  padding-top: 20px;
  text-align: center;
  min-height: 100vh;
`;

const WelcomeTitle = styled.h1`
  font-size: 3em;
  color: lavenderblush;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards;
  animation-delay: 1s;
`;

const WelcomeText = styled.p`
  font-size: 1.5em;
  color: floralwhite;
  font-weight: 800;
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards;
  animation-delay: 1.5s;
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
        <WelcomeContainer>
          <WelcomeTitle $isLoaded={isLoaded}>Welcome to Proxima</WelcomeTitle>
          <WelcomeText $isLoaded={isLoaded}>
            Your favorite online shop for all your needs.
          </WelcomeText>
        </WelcomeContainer>
      </StyledHome>
    </>
  );
};

export default Home;
