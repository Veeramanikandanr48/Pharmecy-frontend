import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  // Function to handle letter click event
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <Router>
      <Navbar />
      <Header handleLetterClick={handleLetterClick} />
        <Routes>
          <Route
            path="/"
            element={<Home selectedLetter={selectedLetter} />}
          />
          <Route path="/category/:categoryName" element={<Home selectedLetter={selectedLetter} />} />
          <Route path="/product/:productName" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </Router>
  );
};

export default App;
