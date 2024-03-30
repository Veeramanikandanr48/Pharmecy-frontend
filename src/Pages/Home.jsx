import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import useProductData from "../Data/useProductData";

const Home = ({ selectedLetter }) => {
  const { categoryName } = useParams();
  const selectedCategory = categoryName || "Bestsellers";
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define the endpoint based on the selected letter
  const endpoint = selectedLetter ? `products/letter/${selectedLetter}` : `categories/${selectedCategory}`;

  // Fetch products based on the endpoint
  const { data } = useProductData(endpoint);

  useEffect(() => {
    if (data) {
      setSelectedProducts(data);
      setLoading(false);
    }
    // Handle error
    if (data?.error) {
      setError(data.error);
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="w-full lg:w-5/6 h-fit flex flex-col gap-5 p-5 items-center justify-center">
      <Carousel />
      {loading ? (
        <LoadingSpinner /> // Render loading spinner if loading is true
      ) : error ? (
        <ErrorMessage error={error} /> // Render error message if error occurred
      ) : (
        <ProductGrid products={selectedProducts} /> // Render product grid if data is loaded successfully
      )}
    </div>
  );
};

// Component to render loading spinner
const LoadingSpinner = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

// Component to render error message
const ErrorMessage = ({ error }) => (
  <div className="text-red-500">Error: {error}</div>
);

// Component to render product grid
const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-3 gap-5">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
);

// Component to render individual product card
const ProductCard = ({ product }) => (
  <div className="product-card">
    <h1 className="px-4 py-2 text-lg font-semibold text-left">
      {product.Name}
    </h1>
    <div className="d-flex justify-content-center align-items-center">
      <img
        width="150"
        height="150"
        src={product.URL}
        alt={product.name}
        title={product.name}
        className="img-fluid"
      />
    </div>
    <div className="p-4">
      <p className="text-xs text-blue-400">{product.packaging}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-lg font-semibold">
          {product["Discount price1"]}
        </p>
        <Link
          to={`/product/${product._id}`}
          className="px-3 py-1 text-xs text-black rounded border border-dark"
        >
          SELECT PACK
        </Link>
      </div>
      <p className="mt-2 text-xs text-red-600">
        Manufacturer's Suggested Retail Price {product["Original price1"]}
      </p>
    </div>
  </div>
);

export default Home;
