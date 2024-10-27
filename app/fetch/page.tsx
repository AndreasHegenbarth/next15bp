"use client";
import React from "react";
import useFetchProducts from "@/hooks/useFetchProducts";

const ProductList: React.FC = () => {
  const { products, loading, error } = useFetchProducts("/api/product");
  console.info(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {products.map(({ id, name, price }) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>Price: ${price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
