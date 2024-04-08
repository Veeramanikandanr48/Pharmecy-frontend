import React from "react";
import UnitedStatesImage from '../media/United-States.jpeg';

const Carousel = () => {
  const imageStyle = {
    width: '20%',
    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.9)', // Increased shadow effect
  };

  return (
    <div className="flex items-center w-full justify-content-around p-3">
      <div className="text-center mb-2">
        <h1 className="text-3xl font-semibold">We are trusted by millions of USA customers</h1>
        <p className="text-lg text-secondary">WIDEST CHOICE OF MEDS AT LOWEST PRICES</p>
      </div>
      <img src={UnitedStatesImage} alt="United States" style={imageStyle} />
    </div>
  );
};

export default Carousel;
