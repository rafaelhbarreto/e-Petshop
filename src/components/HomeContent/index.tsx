import {ContainerHomeContent} from './styles';
import {Sidebar} from '../Sidebar'; 
import {ListProducts} from '../ListProducts'; 

export function HomeContent() {

  return (
    <>
      <ContainerHomeContent>
        <Sidebar />
        <ListProducts />
      </ContainerHomeContent>
    </>
  );  
}