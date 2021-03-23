import {
  createContext, 
  ReactNode, 
  useContext, 
  useEffect, 
  useState
} from 'react';

import { api } from '../services/api';

// definição das interfaces 
interface CategoriesProviderProps {
  children: ReactNode; 
}

interface Category {
  id: number;
  title: string;
}


// criação do contexto 
const CategoriesContext = createContext<Category[]>([]); 

export function CategoriesProvider({children}: CategoriesProviderProps) {

  const [categories, setCategories] = useState<Category[]>([]); 

  useEffect(() => {
      api.get('/categories').then((response) => {
        setCategories(response.data.categories); 
      })
  }, []); 

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  )

}

export function useCategories() {
  return useContext(CategoriesContext); 
}