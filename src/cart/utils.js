export const addItemTocart = (cartItems, product) => 
{
  const existItem = cartItems.find( item => item.product.id === product.id);
  
  if(existItem) {
    cartItems.forEach( item => {
      if(item.product.id === product.id) {
        item.quantity +=1;
      }
    });

    return [...cartItems]; 
  } 

  return [...cartItems, {product, quantity: 1}]; 
}

export const removeItem = (cartItems, product) => {
  const existItem = cartItems.find( item => item.product.id === product.id);
  
  if(existItem) {

    cartItems.forEach( (item, index) => {
      if(item.product.id === product.id) {
        cartItems.splice(index, 1);
      }
    });
  }

    return [...cartItems]; 
}

export const decrement = (cartItems, product) => {
   
  cartItems.forEach( (item, index) => {
    if(item.product.id === product.id) {
      if(item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // remove the item
        cartItems.splice(index, 1);
      }
    }
  });
  
  return [...cartItems];  
}