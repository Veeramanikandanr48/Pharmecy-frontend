import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ handleLetterClick, handleCategoryChange }) => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Bestsellers");
  const [showDropdown, setShowDropdown] = useState(false);

  // Retrieve cart items from local storage
  const getCartItemsFromLocalStorage = useCallback(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }, []);

  // Update cart items state from local storage
  useEffect(() => {
    const storedCartItems = getCartItemsFromLocalStorage();
    setCartItems(storedCartItems);
  }, [getCartItemsFromLocalStorage]);

  // Constants
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const categories = [
    "Bestsellers", "COVID-19", "Allergy", "Anti Viral", "Anti-Depressants",
    "Antibacterial", "Antibiotics", "Arthritis", "Asthma", "Birth Control",
    "Cancer", "Blood Pressure", "Cholesterol", "Cardiovascular", "Diabetes",
    "Diuretics", "Erectile Dysfunction", "Eye Drop", "Gastro Health", "Hair Loss",
    "General Health", "Hepatitis C Virus (HCV)", "Herbals", "Hormones", "HIV",
    "Men's ED Packs", "Men's Health", "Mental Illness", "Motion Sickness",
    "Muscle Relaxant", "Pain Relief", "Quit Smoking", "Skin Care", "Women's Health",
    "Weight Loss"
  ];

  // Handle category click event
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between px-10 h-36 items-center border-b border-gray-300">
        <Link to="/">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dpcfyn3si/image/upload/q_auto/e_saturation/e_improve:outdoor/e5jq0i633htf3jquuclg.jpg"
              width={270}
              height={100}
              quality={100}
              alt="logo"
            />
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
      {/* Mobile Header */}
      <div className="lg:hidden px-5 py-3 border-b border-gray-300 flex items-center justify-between">
        <div className="flex-grow mr-2 w-3/4">
          <input
            type="text"
            className="border-l border-t border-b text-black p-2 text-[0.8rem] w-full focus:outline-none"
            placeholder="Search"
          />
        </div>
        <button className="bg-green-500 p-2 text-[0.8rem] border-green-500 text-white ml-2">
          Search
        </button>
        <div className="relative ml-2">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center justify-center bg-gray-800 text-white px-2 py-1 rounded-md focus:outline-none"
            style={{ fontSize: "0.75rem" }}
          >
            Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.293 13.707a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 11.586 7.707 9.293a1 1 0 00-1.414 1.414l3 3zM5 6a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute z-10 left-0 mt-2 w-full">
              <div className="bg-gray-800 rounded-md shadow-lg">
                <div className="py-1">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/category/${category}`}
                      onClick={() => handleCategoryClick(category)}
                      className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${
                        selectedCategory === category ? 'bg-gray-700' : ''
                      }`}
                      style={{ fontSize: "0.75rem" }}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
