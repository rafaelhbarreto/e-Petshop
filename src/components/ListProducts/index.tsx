import {ProductList} from './styles';
import {FiShoppingCart} from 'react-icons/fi'; 
import ProductImg from '../../assets/img/yellow-ball.webp';
 
export function ListProducts() {
  return (
    <ProductList>
      <h3>Lista de produtos</h3>

      <section>
        <img src={ProductImg} alt=""/>
        <p>Somersung Sonic X500 Basic</p>
        <span>R$ 1200,00</span>
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
      
      <section>
        <img src={ProductImg} alt=""/>
        <p>Somersung Sonic X500 Basic</p>
        <span>R$ 1200,00</span>
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
      
      <section>
        <img src={ProductImg} alt=""/>
        <p>Somersung Sonic X500 Basic</p>
        <span>R$ 1200,00</span>
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
      
      <section>
        <img src={ProductImg} alt=""/>
        <p>Somersung Sonic X500 Basic</p>
        <span>R$ 1200,00</span>
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
    </ProductList>
  );
}