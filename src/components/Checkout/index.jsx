import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container, 
  ContainerWrap, 
  Resume, 
  Alert
} from './styles'; 

export function Checkout() {

  const dispatch = useDispatch(); 
  const products = useSelector(state => state.cart); 
  const quantityProducts = products.reduce((acc, cur) => acc + cur.quantity, 0); 
  const totalValue = products.reduce((acc, cur) => acc + (cur.product.price * cur.quantity), 0); 


  const handleRemoveProductFromCart = (product) => {
    dispatch({
      type: '@cart/REMOVE_PRODUCT',
      payload: {product}
    }); 
  }

  const handleIncrementProduct = (product) => {
    dispatch({
      type: '@cart/INCREMENT',
      payload: {product}
    })
  }

  const handleDecrementProduct = (product) => {
    dispatch({
      type: '@cart/DECREMENT',
      payload: {product}
    })
  }

  return (
    <>
      
      {products.length > 0 && <Container>

        <h2> Meu carrinho</h2>

        <ContainerWrap>
          <div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((itemCart) => (
                  <tr>
                    <td>
                      <button onClick={() => handleRemoveProductFromCart(itemCart.product)}> x </button>
                    </td>
                    <td>
                      <img src={itemCart.product.image} alt=""/>
                    </td>
                    <td>{itemCart.product.title}</td>
                    <td>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(itemCart.product.price)}
                    </td>
                    <td>
                        <div className="number-button">
                          <input 
                            type="button" 
                            className="minus" 
                            value="-"
                            onClick={() => handleDecrementProduct(itemCart.product)}
                          />
                          
                          <input 
                            type="text" 
                            readonly 
                            value={itemCart.quantity}
                          />
                          
                          <input 
                            type="button" 
                            className="plus" 
                            value="+"
                            onClick={() => handleIncrementProduct(itemCart.product)}
                          />
                        </div>
                    </td>
                    <td>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(itemCart.product.price * itemCart.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
          {products.length > 0 && <Resume>
            <h4>Resumo do pedido</h4>

            <div className="resumo-produtos">
              <span>{quantityProducts} produto{quantityProducts != 1 ? 's' : ''}</span>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(totalValue)}
              </span>
            </div>
            <hr/>
            
            <Link to="/">Continuar comprando</Link>
          </Resume>
          }
        </ContainerWrap>

      </Container>}

      {products.length == 0 &&
        <Container>    
          <Alert>
            <b>Atenção!</b> Carrinho vazio. <Link to="/">Clique aqui</Link> para adicionar itens.
          </Alert> 
        </Container> 
      }
    </>
  );
}