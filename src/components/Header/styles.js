import styled from 'styled-components';
import {default as ContainerWrap} from '../Container'; 

export const Container = styled.div`
 width: 100%; 
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 15px;
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr; 
  grid-gap: 1rem; 
  height: 101px;
`; 

export const Logo = styled.a`
  display: flex;
  align-items: center;
  padding-right: 50px; 
  img {
    display: block;
    max-width: 216px;
  }
`;

export const SectionHeader = styled.header`
  border-bottom: 1px solid var(--input-border);
`; 


export const CartActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; 
  height: 30px;
  margin-top: 35px;
  border-left: 1px solid #ccc;
  margin-left: 40px;


  a {
    width: 46px;
    height: 46px;
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    

    svg {
      font-size: 25px;
      display: block; 
      color: var(--yellow);
      
      transition: color linear .2s;
    }

    span {
      display: block;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: var(--blue);
      display: block;
      text-align: center;
      color: var(--white); 
      font-size: .687rem;
      position: absolute;
      top: -5px;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover > svg {
      color: var(--blue); 
    }
  }
`; 