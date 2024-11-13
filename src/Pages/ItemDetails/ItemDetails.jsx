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
    return <Loading>Loading...</Loading>;
  }

  return (
    <StyledContainer>
      <LeftSide>
        <StyledImage src={item.image} alt={item.title} />
      </LeftSide>
      <RightSide>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </RightSide>
    </StyledContainer>
  );
};

export default ItemDetails;
