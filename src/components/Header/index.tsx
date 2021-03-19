
import { TopMessage } from '../TopMessage';
import {Container, SectionHeader, Logo, CartActions} from './styles';

import LogoImg from '../../assets/img/logo.png'; 
import {FiShoppingCart, FiHeart, FiUser} from 'react-icons/fi'; 
import { FormSearch } from '../FormSearch';

export function Header() {
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
            <a href="/">
              <FiUser />
              </a>
            <a href="/">
              <span>1</span>
              <FiHeart />
            </a>
            <a href="/">
              <span>0</span>
              <FiShoppingCart />
            </a>
          </CartActions>
        </Container>
     </SectionHeader>
    </>
  ); 
}