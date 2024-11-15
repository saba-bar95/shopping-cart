import styled from "styled-components";
import PropTypes from "prop-types";
import cancel from "/src/assets/images/cancel.png";

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);

  .container {
    width: 300px;
    background-color: red;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: #f8fafc;
    padding: 20px;

    p {
      font-size: 1.5em;
      width: max-content;
      padding: 10px;
      cursor: pointer;
      border-radius: 10px;
      display: flex;
      transition: background-color 0.3s ease;

      img {
        width: 20px;
      }

      &:hover {
        background-color: #e2e8f0;
      }
    }
  }
`;

const Cart = ({ onClose, close }) => {
  return (
    <CartContainer onClick={(e) => close(e)}>
      <div className="container">
        <p onClick={onClose}>
          <img src={cancel} alt="" />
        </p>
      </div>
    </CartContainer>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default Cart;
