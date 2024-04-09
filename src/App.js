import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import FAQPage from "./Pages/Faq";

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [searchValue, setSearchValue] = useState(""); // State variable to hold search value

  // Function to handle letter click event
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  // Function to handle search
  const onSearch = (searchValue) => {
    setSearchValue(searchValue); // Update searchValue state variable
  };

  return (
    <Router>
      {/* Render Navbar */}
      <Navbar />
      {/* Render Header and pass handleLetterClick and onSearch functions as props */}
      <Header
        handleLetterClick={handleLetterClick}
        onSearch={onSearch} // Pass onSearch function as prop
      />
      {/* Define routes */}
      <Routes>
        {/* Home route with optional selectedLetter and searchValue props */}
        <Route
          path="/"
          element={<Home selectedLetter={selectedLetter} searchValue={searchValue} />}
        />
        {/* Route for specific category */}
        <Route
          path="/category/:categoryName"
          element={<Home selectedLetter={selectedLetter} searchValue={searchValue} />}
        />
        {/* Route for product details */}
        <Route path="/product/:productName" element={<ProductDetails />} />
        {/* Route for cart */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default App;
