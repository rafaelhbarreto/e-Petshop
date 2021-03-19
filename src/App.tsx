import {createServer} from 'miragejs'; 

import {Home} from './pages/Home'; 
import {categories} from './services/data/categories';
import {products} from './services/data/products';

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
  }
})

function App() {
  return (
    <Home />
  );
}

export default App;
