import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import useProductData from "../Data/useProductData";
import Layout from "../Layout";

const Home = ({ selectedLetter, searchValue }) => {
  const { categoryName } = useParams();
  const selectedCategory = categoryName || "Bestsellers";
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let endpoint = selectedLetter ? `products/letter/${selectedLetter}` : `categories/${selectedCategory}`;
  if (searchValue) {
    endpoint = `products/name/${searchValue}`;
  }

  const { data } = useProductData(endpoint);

  useEffect(() => {
    if (data) {
      setSelectedProducts(data);
      setLoading(false);
    }
    if (data?.error) {
      setError(data.error);
      setLoading(false);
    }
  }, [data]);

  return (
    <Layout>
      <div className="w-full flex flex-col p-3">
        <Carousel />
        <div className="relative">
          {loading && <LoadingSpinner />}
          {!loading && !error && <ProductGrid key={selectedCategory} products={selectedProducts} selectedCategory={selectedCategory} />}
          {error && <ErrorMessage error={error} />}
        </div>
      </div>
    </Layout>
  );
};

const LoadingSpinner = () => (
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const ErrorMessage = ({ error }) => (
  <div className="text-red-500">Error: {error}</div>
);

const ProductGrid = ({ products, selectedCategory }) => (
  <div>
    <h1 className="h1 lg:hidden p-2">{selectedCategory}</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="product-card border rounded-lg overflow-hidden w-auto">
    <div className="p-3">
      <h1 className="text-sm font-semibold mb-2">{product.Name}</h1>
      <div className="flex justify-center">
        <img src={product.URL} alt={product.name} title={product.name} className="w-auto h-auto mb-2" />
      </div>
      <p className="text-xs text-blue-400 mb-2">{product.packaging}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">{product["Discount price1"]}</p>
        <Link to={`/product/${product._id}`} className="px-2 py-1 text-xs text-white bg-blue-500 rounded-md">
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
