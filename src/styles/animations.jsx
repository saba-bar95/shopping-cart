// components/animations.js
import { keyframes } from "styled-components";

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5
  }
  100% {
    opacity: 1;
  }
`;

const FadeInLogo = keyframes`
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

const FadeFromLeft = keyframes`
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0);
  }

`;

const FadeFromRight = keyframes`
  0% {
    transform: translateX(100px);
  }

  100% {
    transform: translateX(0);
  }

`;

export { FadeIn, FadeInLogo, FadeFromLeft, FadeFromRight };
