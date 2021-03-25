import { Breadcrumb } from '../../components/Breadcrumb';
import {Header} from '../../components/Header';
import {Checkout as CheckoutContent} from '../../components/Checkout';

export function Checkout() 
{
  
  const breadCumb = [
    {label: 'Home', 
    link: '/'},
    {label: 'Meu carrinho', link: ''}
  ];

  return (
    <>
      <Header />
      <Breadcrumb links={breadCumb} />
      <CheckoutContent />
    </>
  );
}