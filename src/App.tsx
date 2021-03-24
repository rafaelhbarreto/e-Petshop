import {createServer} from 'miragejs'; 
import { Routes } from './routes';

// Fake data
import {categories} from './services/data/categories';
import {products} from './services/data/products';


// fake data
createServer({
  routes() {
    this.namespace = 'api'; 

    this.get('/categories', () => {
      return { 
        categories: categories
      }
    });
    
    this.get('/products', () => {
      return { 
        products: products
      }
    });
    
    // Retorna os produtos de uma categoria especifica. 
    this.get('/products/:id', (schema, request) => {
      let id = new Number(request.params.id); 
      const productsCategory = products.filter((product) => product.category_id == id); 
      return { products: productsCategory }      
    });
  }
});


function App() {
  return (
    <Routes />
  );
}

export default App;
