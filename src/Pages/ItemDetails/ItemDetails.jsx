import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchSingleItem from "./FetchSignleItem";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 30px auto;
  display: flex;
  align-items: center;
  max-width: 1000px;
  gap: 50px;
`;

const Loading = styled.div`
  margin: 20px auto;
  font-size: 1.8em;
  font-family: LatoRegular;
`;

const StyledHeader = styled.h1`
  font-size: 2em;
`;

const StyledPara = styled.p`
  font-size: 1.2em;
`;

const StyledPrice = styled.h2`
  font-size: 1.3em;
  font-family: RalewayBold;
`;

const QuantityContainer = styled.div`
  img {
    width: 20px;
  }
`;
const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  min-width: 300px;
  max-width: 500px;
  object-fit: contain;
`;

const LeftSide = styled.div`
  height: 50vh;
  width: 60vw;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const item = await FetchSingleItem(id);
      setItem(item);
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return (
      <StyledContainer>
        <Loading>Loading...</Loading>;
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <LeftSide>
        <StyledImage src={item.image} alt={item.title} />
      </LeftSide>
      <RightSide>
        <StyledHeader>{item.title}</StyledHeader>
        <StyledPara>{item.description}</StyledPara>
        <StyledPrice>$ {item.price.toFixed(2)}</StyledPrice>
        <StyledPara>Quantity:</StyledPara>
        <QuantityContainer></QuantityContainer>
      </RightSide>
    </StyledContainer>
  );
};

export default ItemDetails;
