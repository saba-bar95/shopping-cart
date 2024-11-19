import styled from "styled-components";
import PropTypes from "prop-types";
import cancel from "/src/assets/images/cancel.png";
import itemsArray from "./itemsArray";
import { useState } from "react";

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  .container {
    width: 375px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: #fff;
    padding: 20px;

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid gray;
      padding-bottom: 30px;

      h1 {
        font-size: 1.2em;

        span {
          color: #4b5563;
        }
      }

      p {
        font-size: 1.5em;
        width: max-content;
        padding: 5px;
        cursor: pointer;
        border-radius: 10px;
        display: flex;
        transition: background-color 0.3s ease;
        float: right;

        img {
          width: 15px;
        }

        &:hover {
          background-color: #e2e8f0;
        }
      }
    }

    .items-container {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      margin-top: 30px;
      gap: 20px;

      .item-wrapper {
        padding: 15px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        .top-side {
          height: 10vh;
          display: flex;
          align-items: center;
          justify-content: space-between;

          img {
            height: 100%;
            width: 100%;
            min-width: 80px;
            max-width: 120px;
            object-fit: contain;
          }

          .info-container {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h1 {
              font-size: 1em;
            }

            h2 {
              font-size: 1em;
              text-decoration: underline;
            }
          }
        }

        .bot-side {
          display: flex;
          align-self: end;
          align-items: center;
          gap: 10px;

          h1 {
            font-size: 1em;
          }

          .buttons-container {
            display: flex;
            gap: 8px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            padding: 3px 6px;
            align-self: end;
            align-items: center;

            p {
              font-size: 1em;
              font-family: LatoBold;
            }

            button {
              font-size: 1.4em;
              border: none;
              background-color: transparent;
              padding: 0 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

const Cart = ({ onClose, close, itemQuantity, setItemQuantity }) => {
  const [items, setItems] = useState(itemsArray);

  const handleDecreaseQuantity = (itemToDecrease) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemToDecrease.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    setItemQuantity((quan) => quan - 1);
  };

  const handleIncreaseQuantity = (itemToIncrease) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemToIncrease.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    setItemQuantity((quan) => quan + 1);
  };

  return (
    <CartContainer onClick={(e) => close(e)}>
      <div className="container">
        <div className="header-container">
          <h1>
            Your Cart <span>({itemQuantity} items)</span>
          </h1>
          <p onClick={onClose}>
            <img src={cancel} alt="" />
          </p>
        </div>
        <div className="items-container">
          {items.map((item) => (
            <div className="item-wrapper" key={item.id}>
              <div className="top-side">
                <img src={item.image} alt={item.title} />
                <div className="info-container">
                  <h1>{item.title}</h1>
                  <h2>${item.price}</h2>
                </div>
              </div>
              <div className="bot-side">
                <h1>Quantity:</h1>

                <div className="buttons-container">
                  <button onClick={() => handleDecreaseQuantity(item)}>
                    -
                  </button>
                  <p className="number">{item.quantity}</p>
                  <button onClick={() => handleIncreaseQuantity(item)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CartContainer>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func,
  close: PropTypes.func,
  items: PropTypes.array,
  itemQuantity: PropTypes.number,
  setItemQuantity: PropTypes.func,
};

export default Cart;
