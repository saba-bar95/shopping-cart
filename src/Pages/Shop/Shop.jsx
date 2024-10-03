import Navbar from "../../Components/Navbar/Navbar";
import FetchItems from "./FetchItems";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
  padding: 50px 0;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
`;

const StyledHeader = styled.h1`
  font-size: 1em;
  flex: 1;
`;

const ImgContainer = styled.div`
  padding: 20px;
  border: 5px solid #e2e8f0;
  width: 25vw; /* 25% of the viewport width */
  height: 25vw; /* 25% of the viewport width */
  &:hover {
    /* your hover styles here */
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* scale the image to cover the entire container */
`;

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await FetchItems();
      setItems(result);
    };

    fetch();
  }, []);

  console.log(items);

  return (
    <>
      <Navbar />
      <StyledContainer>
        {items &&
          items.map((item, index) => {
            return (
              <StyledItemContainer className="item-container" key={index}>
                <ImgContainer>
                  <StyledImg src={item.image} alt="" />
                </ImgContainer>
                <StyledHeader>{item.title}</StyledHeader>
              </StyledItemContainer>
            );
          })}
      </StyledContainer>
    </>
  );
};

export default Shop;
