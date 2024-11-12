import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchSingleItem from "./FetchSignleItem";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 16px 0;
  width: 300px;
  padding: 10px;
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
    return <div>Loading...</div>;
  }

  return (
    <StyledContainer>
      <StyledImage src={item.image} alt={item.title} />
      <div className="right-side">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    </StyledContainer>
  );
};

export default ItemDetails;
