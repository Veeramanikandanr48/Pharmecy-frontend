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
      <div className="w-full lg:w-5/6 flex flex-col gap-5 p-3 min-h-screen items-center">
        <Carousel />
        <div className="relative flex-1">
          {loading && <LoadingSpinner />}
          {!loading && !error && <ProductGrid products={selectedProducts} />}
          {error && <ErrorMessage error={error} />}
        </div>
      </div>
    </Layout>
  );
};

const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const ErrorMessage = ({ error }) => (
  <div className="text-red-500">Error: {error}</div>
);

const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
);

const ProductCard = ({ product }) => (
  <div className="product-card border rounded-lg overflow-hidden w-full">
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-2">{product.Name}</h1>
      <img src={product.URL} alt={product.name} title={product.name} className="w-full h-auto mb-2" />
      <p className="text-sm text-blue-400 mb-2">{product.packaging}</p>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{product["Discount price1"]}</p>
        <Link to={`/product/${product._id}`} className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md">
          SELECT PACK
        </Link>
      </div>
      <p className="mt-2 text-sm text-red-600">
        Manufacturer's Suggested Retail Price {product["Original price1"]}
      </p>
    </div>
  </div>
);

export default Home;
