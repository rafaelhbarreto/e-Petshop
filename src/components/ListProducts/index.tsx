import {ProductList} from './styles';
import {FiShoppingCart} from 'react-icons/fi'; 
import { useState } from 'react';


interface Product {
  id: number;
  category_id: number;
  title: string;
  image: string;
  price: number; 
}

interface ListProductProps {
  products: Product[]; 
}

export function ListProducts({products}: ListProductProps) {

  const [listProducts, setListProducts] = useState<Product[]>(products); 

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