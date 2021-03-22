import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb';
import {Header} from '../../components/Header';
import {HomeContent} from '../../components/HomeContent';
import { api } from '../../services/api';

interface RouteParams {
  id?: string
}
 
interface Product {
  id: number;
  category_id: number;
  title: string;
  image: string;
  price: number; 
}

export function Home() 
{
  const params = useParams<RouteParams>();
  const [products, setProducts] = useState<Product[]>([]);
  
  const id = params.id ? params.id : 1; 
  const breadCumb = [
    {label: 'Home', 
    link: '/home'},
    {label: 'Produtos', link: ''}
  ];

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      setProducts(response.data.products);
    });
  }, [id]); 

  return (
    <>
      <Header />
      <Breadcrumb links={breadCumb} />
      <HomeContent products={products}/>
    </>
  );
}