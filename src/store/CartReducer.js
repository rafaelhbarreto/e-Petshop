import { addItemTocart, removeItem, decrement } from "../cart/utils";

export const CartReducer = (state = [], action) => {

  switch(action.type) {
    case '@cart/ADD_PRODUCT':
      return addItemTocart(state, action.payload.product);
   
    case '@cart/INCREMENT': 
      return addItemTocart(state, action.payload.product);
    
    case '@cart/DECREMENT': 
      return decrement(state, action.payload.product);
    
    case '@cart/REMOVE_PRODUCT':
      return removeItem(state, action.payload.product);

    default: return state;      
  }
}
