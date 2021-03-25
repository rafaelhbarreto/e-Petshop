
import { TopMessage } from '../TopMessage';
import {Container, SectionHeader, Logo, CartActions} from './styles';

import LogoImg from '../../assets/img/logo.png'; 
import {FiShoppingCart, FiHeart, FiUser} from 'react-icons/fi'; 
import { FormSearch } from '../FormSearch';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Header() {

  const cartItems = useSelector(state => state.cart);
  const total = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <TopMessage />
      <SectionHeader>
        <Container>
          <Logo>
            <img src={LogoImg} alt="DtMoney"/>
          </Logo>
          <FormSearch placeholder="O que você está procurando ?"/>
          <CartActions>
            <Link to="/checkout">
              <span>{total}</span>
              <FiShoppingCart />
            </Link>
          </CartActions>
        </Container>
     </SectionHeader>
    </>
  ); 
}