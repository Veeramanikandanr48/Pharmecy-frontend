import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "../media/Logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ handleLetterClick, products }) => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Define a function to get the cart items from local storage
  const getCartItemsFromLocalStorage = useCallback(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }, []);

  // Effect to retrieve and update cart items from local storage
  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = getCartItemsFromLocalStorage();

    // Update the cart items state
    setCartItems(storedCartItems);
  }, [getCartItemsFromLocalStorage]); // Now useCallback ensures this function doesn't change on re-renders

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="w-screen flex justify-between px-10 h-36 items-center border-b border-gray-300">
      <Link to="/">
        <div className="logo">
          <img src={Logo} width={350} height={100} quality={100} alt="logo" />
        </div>
      </Link>
      <div className="flex flex-col w-[50rem] gap-2 items-center">
        <div className="box w-full flex items-center justify-center">
          <input
            type="text"
            className="border-l border-t border-b text-black p-2 text-[0.8rem] w-2/4 focus:outline-none"
            placeholder="Search"
          />
          <button className="bg-green-500 p-2 text-[0.8rem] border-green-500 text-white ml-2">
            Search
          </button>
        </div>
        <div className="suggestions text-gray-500 text-[.8rem] text-center">
          Search by name:{" "}
          {alphabet.split("").map((letter, index) => (
            <button
              key={index}
              className="text-gray-500 mx-1 hover:text-black focus:outline-none"
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
      <div className="cart w-2/12 border h-3/4 m-5 rounded-sm flex flex-col items-center justify-center">
        <h2 className="text-[0.7rem] text-center text-gray-400 flex items-center">
          <FaShoppingCart className="mr-1" />
          YOUR CART/CHECKOUT
        </h2>
        {cartItems.length === 0 ? (
          <div className="data flex flex-col items-center gap-2">
            <p className="text-[0.7rem] text-center text-gray-400">
              You have no items in your shopping cart.
            </p>
            <button className="bg-green-500 p-2 text-[0.8rem] border-green-500 text-white">
              <Link to="/cart">Continue Shopping</Link>
            </button>
          </div>
        ) : (
          <div className="data flex flex-col items-center gap-2">
            <p className="text-[0.9rem] text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </p>
            <button className="bg-green-500 p-2 text-[0.8rem] border-green-500 text-white">
              <Link to="/cart">View Cart</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
