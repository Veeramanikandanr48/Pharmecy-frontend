// TestComponent.js
import React from 'react';
import useProductData from './useProductData';

const TestComponent = () => {
  // Define the endpoint to fetch data from (e.g., '/products')
  const endpoint = 'products';

  // Use the useProductData hook to fetch data from the backend
  const { loading, error, data } = useProductData(endpoint);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.Name} - ${product.Uses}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;
