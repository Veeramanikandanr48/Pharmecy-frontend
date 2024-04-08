import React, { useState } from "react";
import { FaCheck, FaTrash } from 'react-icons/fa';
import { LuGift } from "react-icons/lu";
import Card from '../components/Card';
import gift from "../media/gift_zero.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "00085010",
      name: "Lasix 40 mg x 30 pills",
      image: "https://safe-easy-online.com/content/100x125/lasix.jpg",
      price: 23.99,
      updateLink: "https://safe-easy-online.com/cart.html?update=00085010",
      removeLink: "https://safe-easy-online.com/cart.html?remove=00085010",
      nextQuantity: 1,
      savings: 10.2,
    },
    {
      id: "00085011",
      name: "Another Product",
      image: "https://safe-easy-online.com/content/100x125/lasix.jpg",
      price: 15.99,
      updateLink: "https://safe-easy-online.com/cart.html?update=00085010",
      removeLink: "https://safe-easy-online.com/cart.html?remove=00085010",
      nextQuantity: 1,
      savings: 5.2,
    },
    // Add more products as needed
  ]);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, nextQuantity: Math.max(item.nextQuantity - 1, 1) } : item
    );
    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, nextQuantity: item.nextQuantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Calculate the total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.nextQuantity,
    0
  );

  return (
    <div className="container my-5" style={{ maxWidth: "75%" }}>
      {cartItems.length === 0 ? (
        <div>
          <div className="title-cart h4 mt-4 mb-4">Your cart is empty!</div>
          <form>
            <table className="table border cart-tbl" width="60">
              <tbody>
                <tr className="cart-prod">
                  <td>
                    <div className="gift-bg">
                      <img
                        style={{ marginTop: "5px" }}
                        src={gift}
                        alt=""
                        title=""
                      />
                    </div>
                  </td>
                  <td>
                    <span className="gift-title text-success">
                      Obtain the free bonus pills immediately after adding any
                      ed pills to your cart!
                    </span>
                  </td>
                  <td className="cartSum text-center">1</td>
                  <td className="cartSum text-center">FREE</td>
                  <td className="cartSum text-center">FREE</td>
                  <td align='left'>&nbsp;</td>
                </tr>
                <tr className="total-sum text-left">
                  <td colSpan="4" className="p-4">Pay at our secure server:</td>
                  <td className="font-weight-bold h6 p-2">${totalAmount.toFixed(2)}</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
            <div className="cart_nav mt-4">
              <input
                type="button"
                className="btn btn-outline-dark"
                value="CONTINUE SHOPPING"
              />
            </div>
          </form>
        </div>
      ) : (
        <div>
          {/* Display Cart Items */}
          <div className="title-cart h4 mt-4 mb-4">Your cart</div>
          <table className="table border cart-tbl">
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="text-left border align-items-center">
                  <td className="product-info">
                    <div className="d-flex">
                      <img
                        src={item.image}
                        alt="cart-item"
                        className="mr-2"
                        style={{ width: "80px", height: "60px" }}
                      />
                      <div>
                        <div className="product-name font-weight-bold text-secondary">{item.name}</div>
                        <div>{item.dosage}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <tr className="d-flex align-items-center">
                      <td
                        className="quant-minus btn btn-sm bg-secondary text-white"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </td>
                      <input
                        name={`p[${item.id}]`}
                        className="quant form-control mx-1"
                        type="text"
                        style={{ width: '45px',height:'25px' }}
                        maxLength="2"
                        onKeyDown={() => false}
                        value={item.nextQuantity}
                        readOnly
                      />
                      <td
                        className="quant-plus btn btn-sm bg-secondary text-white"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </td>
                    </tr>
                  </td>
                  <td className="text-left text-sm text-secondary">${item.price}</td>
                  <td className="text-left text-bold h6">${(item.price * item.nextQuantity).toFixed(2)}</td>
                  <td className="text-left">
                    <button
                      className="btn text-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {/* Display total amount row */}
              <tr className="total-sum text-left">
                <td colSpan="3" className="font-weight-bold h6 p-4">Pay for all items:</td>
                <td className="font-weight-bold h6 p-2">${totalAmount.toFixed(2)}</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>

          <div className="cart_nav mt-4 flex justify-content-between">
            <input
              type="button"
              className="btn btn-outline-dark text-sm"
              value="CONTINUE SHOPPING"
            />
            <input
              type="button"
              className="btn btn-success text-dark text-sm"
              value="Check Out"
            />
          </div>
        </div>
      )}

      <div className="block border border-success p-3 mt-4" id="cart_bonuses">
        <div className="ctitle font-weight-bold d-flex align-items-center p-2">
          <LuGift />
          <div className="pl-2 h5 text-success">
            Our discount gifts for all reliable consumers:
          </div>
        </div>
        <div className="bonus_for_consumers">
          <div className="row text-sm">
            <div className="col-md-6 m-3">
              <div className="d-flex align-items-center mb-2">
                <div className="cheker-bonus">
                  <FaCheck color="green" size={24} />
                </div>
                <div className="cheker-descr">
                  10% discount for all next orders
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="cheker-bonus">
                  <FaCheck color="green" size={24} />
                </div>
                <div className="cheker-descr" style={{ color: "gray" }}>
                  Free standard airmail service for all orders with a sum starting at $200
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="cheker-bonus">
                  <FaCheck color="green" size={24} />
                </div>
                <div className="cheker-descr" style={{ color: "gray" }}>
                  Free trackable courier service for all orders with a sum starting at $300
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="title mt-5">
        <h6 className="font-weight-bold h6">PEOPLE WHO BOUGHT THIS, ALSO BOUGHT:</h6>
        <hr />
        <div className="grid grid-cols-4 mt-4 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
