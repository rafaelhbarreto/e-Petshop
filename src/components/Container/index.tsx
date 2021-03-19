import {Container as ContainerWrap} from './styles'; 
import {ReactNode} from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({children}: ContainerProps) => (
  <ContainerWrap>
    {children}
  </ContainerWrap> 
)

export default Container;