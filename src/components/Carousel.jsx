import React from "react";
import UnitedStatesImage from '../media/United-States.jpeg';
import { motion } from "framer-motion";

const Carousel = () => {
  const imageStyle = {
    width: '25%',
    borderRadius: '10px', // Added border radius
  };

  return (
    <div className="flex items-center justify-around p-5 hidden lg:flex">
      <div className="text-center w-50">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-2 fs-1"
        >
          We are trusted by millions of USA customers
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-secondary fs-4"
        >
          WIDEST CHOICE OF MEDS AT LOWEST PRICES
        </motion.p>
      </div>
      <motion.img 
        src={UnitedStatesImage} 
        alt="United States" 
        style={imageStyle} 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </div>
  );
};

export default Carousel;
