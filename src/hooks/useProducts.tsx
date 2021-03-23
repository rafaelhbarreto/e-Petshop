import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from '../services/api';
import { useCategory } from './useCategory';

// Interfaces 
interface Product {
  id: number;
  category_id: number;
  title: string;
  image: string;
  price: number; 
}

interface ProductProviderProps {
  children: ReactNode; 
}

// contexto 
const ProductsContext = createContext<Product[]>([]);

// exportação do provider 
export function ProductsProvider({children}: ProductProviderProps) {

  
  const [products, setProducts] = useState<Product[]>([]);
  const id = useCategory(); 

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      setProducts(response.data.products);
    });
  }, [id]);

  // retorna o provider 

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )

}

export function useProducts() {
  return useContext(ProductsContext);  
}