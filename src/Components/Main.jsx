import styled, { createGlobalStyle } from "styled-components";
import { FadeIn, FadeFromLeft } from "../styles/animations";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const StyledMain = styled.div`
  opacity: 0;
  animation: ${FadeIn} 1s ease-in-out forwards,
    ${FadeFromLeft} 1s ease-in-out forwards;
  animation-delay: 0s;
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ isCartVisible }) => (isCartVisible ? "hidden" : "scroll")}; 
    transition: background-color 0.3s ease, opacity 0.3s ease; 
  }
`;

const Main = () => {
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <StyledMain>
        <Navbar
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}></Navbar>
        <Outlet context={{ itemQuantity, setItemQuantity }} />
      </StyledMain>
      ;
    </>
  );
};

export default Main;
