import React from "react";
import { Link } from "react-router-dom";
import tablet from "../media/tablet.jpg";

const Card = () => {
  return (
    <div className="max-w-[300px] bg-white border rounded-md overflow-hidden shadow-md">
      <h1 className="px-4 py-2 text-lg font-semibold text-left">
        Product Title
      </h1>
      <img
        src={tablet}
        alt="Product"
        className="w-full h-40 m-2 object-cover"
      />
      <div className="p-4">
        <p className="text-xs text-blue-400">40mg | 100mg</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-semibold">$50.00</p>
          <button className="px-3 py-1 text-xs text-black rounded border border-dark">
            <Link to='/details'>SELECT PACK</Link>
          </button>
        </div>
        <p className="mt-2 text-xs text-red-600">
          Manufacturer's Suggested Retail Price $1.44
        </p>
      </div>
    </div>
  );
};

export default Card;
