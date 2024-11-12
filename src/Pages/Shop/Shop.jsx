import FetchItems from "./FetchItems";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../styles/Button";
import scrollToTop from "../../ScrollToTop";
import { Link } from "react-router-dom";
import { FadeInItem } from "../../styles/animations";

const StyledContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 50px 0;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 30px;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
  align-items: center;
  transition: transform 0.3s ease;
`;

const AnimatedItem = styled(StyledItemContainer)`
  opacity: 0;
  animation: ${FadeInItem} 0.5s ease forwards;
  animation-delay: ${(props) => props.delay};
`;

const StyledHeader = styled.h1`
  font-size: 1em;
  flex: 1;
  align-self: start;
  font-family: LatoBold;
`;

const ImgContainer = styled.div`
  padding: 10px;
  border: 5px solid #e2e8f0;
  height: 15vw;
  width: 100%;
  overflow: hidden;
  transition: border-color 0.3s ease;

  ${StyledItemContainer}:hover & {
    border-color: orange;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${StyledItemContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ButtonsContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Shop = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetch = async () => {
      const result = await FetchItems();
      setItems(result);
    };

    fetch();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <StyledContainer>
      <ItemsContainer>
        {paginatedItems &&
          paginatedItems.map((item, index) => {
            const animationDelay = `${index * 100}ms`;
            return (
              <Link
                key={item.id}
                to={`/shop/item/${item.id}`}
                style={{ textDecoration: "none", color: "inherit" }}>
                <AnimatedItem delay={animationDelay}>
                  <ImgContainer>
                    <StyledImg src={item.image} alt={item.title} />
                  </ImgContainer>
                  <StyledHeader>{item.title}</StyledHeader>
                </AnimatedItem>
              </Link>
            );
          })}
      </ItemsContainer>
      <ButtonsContainer>
        {currentPage > 1 && <Button onClick={handlePreviousPage}>Back</Button>}
        {currentPage < Math.ceil(items.length / itemsPerPage) && (
          <Button onClick={handleNextPage} $marginLeft="auto">
            Next
          </Button>
        )}
      </ButtonsContainer>
    </StyledContainer>
  );
};

export default Shop;
