import styled from "styled-components";
import { FadeFromRight, FadeIn } from "../../styles/animations";
import BackgroundImage from "./BackgroundImg";

const StyledHome = styled.div`
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards,
    ${FadeFromRight} 1s ease-in-out forwards;
  animation-delay: 1s;
`;

const Home = () => {
  return (
    <>
      <StyledHome className="home-container">
        <BackgroundImage></BackgroundImage>
      </StyledHome>
    </>
  );
};

export default Home;
