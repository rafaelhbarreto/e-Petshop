import {ProductList} from './styles';
import {FiShoppingCart} from 'react-icons/fi'; 
import { useProducts } from '../../hooks/useProducts';
import { useParams } from 'react-router';

interface RouteParams {
  id?: string
}

export function ListProducts() {

  const params = useParams<RouteParams>();
  
  const products = useProducts(); 
  
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