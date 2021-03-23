import {createContext, ReactNode, useContext} from 'react';
import { useParams } from 'react-router';

// interfaces 
interface RouteParams {
  id?: string
}

interface CategoryProviderProps {
  children: ReactNode; 
}

const CategoryContext = createContext<Number>(1); 

export function CategoryProvider({children}: CategoryProviderProps) 
{
  const params = useParams<RouteParams>();
  const id = params.id ? params.id : 1;  
  
  return (
    <CategoryContext.Provider value={new Number(id)}> 
      {children}
    </CategoryContext.Provider>
  ); 
}


export function useCategory() {
  return useContext(CategoryContext); 
}