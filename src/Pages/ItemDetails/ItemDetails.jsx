import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchSingleItem from "./FetchSignleItem";
import styled from "styled-components";
import {
  FadeFromLeft,
  FadeInItem,
  FadeInMessage,
} from "../../styles/animations";
import { useOutletContext } from "react-router-dom";
import itemsArray from "../../Components/itemsArray";
import addItems from "./addItems";

const StyledContainer = styled.div`
  margin: 30px auto;
  display: flex;
  align-items: center;
  max-width: 1000px;
  gap: 50px;
  position: relative;
`;

const Loading = styled.div`
  margin: 20px auto;
  font-size: 1.5em;
  font-family: LatoRegular;
`;

const StyledHeader = styled.h1`
  font-size: 1.8em;
  opacity: 0;
  animation: ${FadeInItem} 0.5s ease forwards;
  animation-delay: ${(props) => props.$delay};
`;

const StyledPara = styled.p`
  font-size: 1.2em;
  opacity: 0;
  animation: ${FadeInItem} 0.5s ease forwards;
  animation-delay: ${(props) => props.$delay};
`;

const StyledPrice = styled.h2`
  font-size: 1.3em;
  font-family: LatoBold;
  opacity: 0;
  animation: ${FadeInItem} 0.5s ease forwards;
  animation-delay: ${(props) => props.$delay};
`;

const QuantityContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: max-content;
  opacity: 0;
  animation: ${FadeInItem} 0.5s ease forwards;
  animation-delay: ${(props) => props.$delay};

  .container {
    display: flex;
    gap: 8px;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 3px;
    align-items: center;

    p {
      font-size: 1.1em;
      font-family: LatoBold;
    }
  }

  button {
    font-size: 1.5em;
    border: none;
    background-color: transparent;
    padding: 0 10px;
    cursor: pointer;
  }

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
  width: max-content;
  animation: ${FadeFromLeft} 1s ease-in-out forwards;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AddToCart = styled.button`
  opacity: 0;
  animation: ${FadeInItem} 0.5s ease forwards;
  animation-delay: ${(props) => props.$delay};
  align-self: start;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 1em;
  font-family: LatoBold;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8cd0e3;
  }
`;

const StyledMessage = styled.div`
  margin-top: 10px;
  font-size: 1.2em;
  color: #16a34a;
  opacity: 0;
  animation: ${FadeInMessage} 2.5s ease forwards;
  font-family: LatoBold;
`;

const ItemDetails = () => {
  const { setItemQuantity } = useOutletContext();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [itemAddedMessage, setItemAddedMessage] = useState("");
  const [delay, setDelay] = useState("1s");

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
        <Loading>Loading...</Loading>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <LeftSide>
        <StyledImage src={item.image} alt={item.title} />
      </LeftSide>
      <RightSide>
        <StyledHeader $delay="0.2s">{item.title}</StyledHeader>
        <StyledPara $delay="0.4s">{item.description}</StyledPara>
        <StyledPrice $delay="0.6s">$ {item.price.toFixed(2)}</StyledPrice>
        <QuantityContainer $delay="0.8s">
          <StyledPara>Quantity:</StyledPara>
          <div className="container">
            <button
              onClick={() => {
                setQuantity((quantity) => {
                  return quantity < 2 ? 1 : quantity - 1;
                });
              }}>
              -
            </button>
            <p className="number">{quantity}</p>
            <button
              onClick={() => {
                setQuantity((quantity) => quantity + 1);
              }}>
              +
            </button>
          </div>
        </QuantityContainer>
        <div className="container" style={{ height: "30px" }}>
          {!itemAddedMessage && (
            <AddToCart
              $delay={delay}
              onClick={() => {
                setItemQuantity((quan) => quan + quantity);
                setQuantity(1);
                addItems(itemsArray, item, quantity);

                setItemAddedMessage("Item added successfully");
                setDelay("0s");
                setTimeout(() => {
                  setItemAddedMessage("");
                }, 2500);
              }}>
              Add to Cart
            </AddToCart>
          )}
          {itemAddedMessage && (
            <StyledMessage>{itemAddedMessage}</StyledMessage>
          )}
        </div>
      </RightSide>
    </StyledContainer>
  );
};

export default ItemDetails;
