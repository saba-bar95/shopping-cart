import styled from "styled-components";

const Button = styled.button`
  padding: 5px 10px;
  font-family: LatoBold;
  font-size: 1em;
  border-radius: 10px;
  border: 2px solid #a1a1aa;
  transition: all 0.3s ease-in-out;

  ${({ $marginLeft }) => $marginLeft && `margin-left: auto;`}

  &:hover {
    background-color: #8cd0e3;
    cursor: pointer;
    border: 2px solid #8cd0e3;
    transform: scale(1.05);
  }
`;

export default Button;
