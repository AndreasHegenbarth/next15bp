import React from "react";

// Definiere den Typ für ein Produkt
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Keyboard", price: 50, inStock: false },
  { id: 3, name: "Monitor", price: 300, inStock: true },
];

const ProductList: React.FC = () => {
  const availableProducts = products
    .filter((product) => product.inStock) // Filtere Produkte, die auf Lager sind
    .map(
      (
        { id, name, price } // Destructuring und .map für die Anzeige
      ) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>Price: ${price}</p>
        </div>
      )
    );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>{availableProducts}</div>
      </main>
    </div>
  );
};

export default ProductList;
