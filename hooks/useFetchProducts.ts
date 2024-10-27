import { useState, useEffect, useCallback } from "react";

// Typ für das Produkt
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

// Typ für die Rückgabe des Hooks
type UseFetchProductsResult = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

const useFetchProducts = (url: string): UseFetchProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url, { next: { revalidate: 3600 } });
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error };
};

export default useFetchProducts;
