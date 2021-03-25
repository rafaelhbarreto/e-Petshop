import {ProductList} from './styles';
import {FiShoppingCart} from 'react-icons/fi'; 
import { useProducts } from '../../hooks/useProducts';
import { useDispatch, useSelector } from 'react-redux';


export function ListProducts() {

  const dispatch = useDispatch(); 
  const products = useProducts(); 

  const quantityProducts = useSelector(state => {
  
    const amount = []; 
    state.cart.forEach(itemCart => {
      amount[itemCart.product.id] = itemCart.quantity; 
    });

    return amount;
  }); 

  const handleAddProduct = (item) => {
    
    dispatch({
      type: "@cart/ADD_PRODUCT",
      payload: {product: item}
    }); 
  }


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
          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <FiShoppingCart />
              {quantityProducts[product.id] | 0}
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