import {ContainerHomeContent} from './styles';
import {Sidebar} from '../Sidebar'; 
import {ListProducts} from '../ListProducts'; 
import { ProductsProvider } from '../../hooks/useProducts';
import { CategoryProvider } from '../../hooks/useCategory';
import { CategoriesProvider } from '../../hooks/useCategories';


export function HomeContent() {

  return (
    <>
      <ContainerHomeContent>
        
        <CategoryProvider>
          <CategoriesProvider>
            <Sidebar />
          </CategoriesProvider>
          
          <ProductsProvider>
            <ListProducts />
          </ProductsProvider>
        </CategoryProvider>
      
      </ContainerHomeContent>
    </>
  );  
} 