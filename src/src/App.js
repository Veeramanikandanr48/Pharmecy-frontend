import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Cart from "./Pages/Cart";

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  // Function to handle letter click event
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <Router>
      <Navbar />
      <Header handleLetterClick={handleLetterClick} /> {/* Pass the handleLetterClick function */}
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<Home selectedLetter={selectedLetter} />}
          />
          <Route path="/category/:categoryName" element={<Home selectedLetter={selectedLetter} />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
