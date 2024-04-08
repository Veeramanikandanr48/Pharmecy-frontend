import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import tablet from "../media/tablet.jpg";
import jsonData from "../Data/productsnew-healthybonding.json";

const Home = ({ selectedLetter }) => {
  const { categoryName } = useParams();

  // Use "Bestsellers" as the default category if none is provided
  const selectedCategory = categoryName || "Bestsellers";

  // State to store filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to filter products based on the selected letter
  const filterProductsByLetter = () => {
    let filtered = jsonData.filter(
      (product) => product.Categories === selectedCategory
    );

    if (selectedLetter) {
      filtered = filtered.filter(
        (product) => product.Name.charAt(0).toUpperCase() === selectedLetter
      );
    }

    setFilteredProducts(filtered);
  };

  // Call filter function when the selected letter changes
  useEffect(() => {
    filterProductsByLetter();
  }, [selectedLetter, selectedCategory]);

  return (
    <div className="w-full lg:w-5/6 h-fit flex flex-col gap-5 p-5 items-center justify-center">
      <Carousel />
      <div className="grid grid-cols-3 gap-5">
        {filteredProducts.map((product, index) => (
          <div
            key={product.URL}
            className="max-w-[300px] bg-white border rounded-md overflow-hidden shadow-md"
          >
            <h1 className="px-4 py-2 text-lg font-semibold text-left">
              {product.Name}
            </h1>
            <img
              src={tablet}
              alt="Product"
              className="w-full h-40 m-2 object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-blue-400">{product.packaging}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold">
                  {product["Discount price1"]}
                </p>
                <button className="px-3 py-1 text-xs text-black rounded border border-dark">
                  <a href={product.URL}>SELECT PACK</a>
                </button>
              </div>
              <p className="mt-2 text-xs text-red-600">
                Manufacturer's Suggested Retail Price{" "}
                {product["Original price1"]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
