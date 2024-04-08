import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import useProductData from "../Data/useProductData";
import Layout from "../Layout";

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
    <Layout>
      <div className="w-full lg:w-5/6 flex flex-col gap-5 p-3 items-center justify-center">
        <Carousel />
        {loading ? (
          <LoadingSpinner /> // Render loading spinner if loading is true
        ) : error ? (
          <ErrorMessage error={error} /> // Render error message if error occurred
        ) : (
          <ProductGrid products={selectedProducts} /> // Render product grid if data is loaded successfully
        )}
      </div>
    </Layout>
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
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
);


const ProductCard = ({ product }) => (
  <div className="product-card border rounded-lg overflow-hidden w-full sm:w-auto lg:w-auto">
    <div className="p-2">
      <h1 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">{product.Name}</h1>
      <img
        src={product.URL}
        alt={product.name}
        title={product.name}
        width={30}
        height={30}
        className="w-full h-auto mb-2"
      />
      <p className="text-xs sm:text-sm lg:text-base text-blue-400 mb-1">{product.packaging}</p>
      <div className="flex justify-between items-center">
        <p className="text-base sm:text-lg lg:text-xl font-semibold">{product["Discount price1"]}</p>
        <Link
          to={`/product/${product._id}`}
          className="px-3 py-1 text-xs sm:text-sm lg:text-base text-white bg-blue-500 rounded-md"
        >
          SELECT PACK
        </Link>
      </div>
      <p className="mt-2 text-xs sm:text-sm lg:text-base text-red-600">
        Manufacturer's Suggested Retail Price {product["Original price1"]}
      </p>
    </div>
  </div>
);

export default Home;
