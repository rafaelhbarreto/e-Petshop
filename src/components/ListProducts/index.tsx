import {ProductList} from './styles';
import {FiShoppingCart} from 'react-icons/fi'; 
import ProductImg from '../../assets/img/yellow-ball.webp';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
 
interface Product {
  id: number;
  category_id: number;
  title: string;
  image: string;
  price: number; 
}

export function ListProducts() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data.products); 
    });
  }, []); 

  return (
    <ProductList>
      <h3>Lista de produtos</h3>

      {products.map((product) => (
        <section key={product.id}>
          <img src={product.image} alt=""/>
          <p>{product.title}</p>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(product.price)}
          </span>
          <button>
            <div>
              <FiShoppingCart />
              0
            </div>
            <span>
              Adicionar ao carrinho
            </span>
          </button>
        </section>
      ))}
    </ProductList>
  );
}