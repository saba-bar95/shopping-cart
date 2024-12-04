import styled from "styled-components";
import PropTypes from "prop-types";
import cancel from "/src/assets/images/cancel.png";
import { FadeFromRight, FadeIn } from "../styles/animations";

const CartContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: end;

  .container {
    width: 25rem;
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;
    gap: 30px;
    position: sticky;
    right: 0;
    top: 0;
    height: 100vh;
    animation: ${FadeFromRight} 0.5s forwards,
      ${FadeIn} 0.5s ease-in-out forwards;

    .top {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

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
      overflow-y: auto;

      .item-wrapper {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        .top-side {
          height: 12vh;
          display: flex;
          align-items: center;
          gap: 40px;

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

    .total-price {
      font-size: 1.1em;
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      border-top: 1px solid gray;
      padding-top: 20px;
    }
  }
`;

const Empty = styled.h1`
  font-size: 1.3em;
  text-align: center;
`;

const Cart = ({
  onClose,
  close,
  itemQuantity,
  setItemQuantity,
  itemsArray,
}) => {
  const handleDecreaseQuantity = (itemToDecrease) => {
    const itemIndex = itemsArray.findIndex(
      (item) => item.id === itemToDecrease.id
    );
    if (itemIndex !== -1) {
      itemsArray[itemIndex].quantity -= 1;
      if (itemsArray[itemIndex].quantity < 1) {
        itemsArray.splice(itemIndex, 1);
      }
      setItemQuantity((quan) => quan - 1);
    }
  };

  const handleIncreaseQuantity = (itemToIncrease) => {
    const itemIndex = itemsArray.findIndex(
      (item) => item.id === itemToIncrease.id
    );
    if (itemIndex !== -1) {
      itemsArray[itemIndex].quantity += 1;
      setItemQuantity((quan) => quan + 1);
    }
  };

  const totalPrice = itemsArray.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <CartContainer onClick={(e) => close(e)}>
      <div className="container">
        <div className="top">
          <div className="header-container">
            <h1>
              Your Cart <span>({itemQuantity} items)</span>
            </h1>
            <p onClick={onClose}>
              <img src={cancel} alt="" />
            </p>
          </div>
          <div className="items-container">
            {itemsArray.map((item) => {
              return (
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
              );
            })}
          </div>
          {itemsArray.length < 1 && <Empty>Your cart is empty</Empty>}
        </div>
        {totalPrice > 0 && (
          <div className="total-price">
            <p>Subtotal</p>
            <p>$ {totalPrice.toFixed(2)} </p>
          </div>
        )}
      </div>
    </CartContainer>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func,
  close: PropTypes.func,
  itemQuantity: PropTypes.number,
  setItemQuantity: PropTypes.func,
  itemsArray: PropTypes.array,
};

export default Cart;
