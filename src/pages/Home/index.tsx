import { Breadcrumb } from '../../components/Breadcrumb';
import {Header} from '../../components/Header';
import {HomeContent} from '../../components/HomeContent';


export function Home() 
{

  const breadCumb = [
    {label: 'Home', link: '/home'},
    {label: 'Produtos', link: ''},
  ];

  return (
    <>
      <Header />
      <Breadcrumb links={breadCumb} />
      <HomeContent />
    </>
  );
}