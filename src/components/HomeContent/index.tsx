import {ContainerHomeContent} from './styles';
import {Sidebar} from '../Sidebar'; 
import {ListProducts} from '../ListProducts'; 
import { useParams } from 'react-router';

 
interface Product {
  id: number;
  category_id: number;
  title: string;
  image: string;
  price: number; 
}

interface HomeContentProps {
  products: Product[]; 
}

export function HomeContent({products}: HomeContentProps) {

  return (
    <>
      <ContainerHomeContent>
        <Sidebar />
        <ListProducts products = {products}/>
      </ContainerHomeContent>
    </>
  );  
}