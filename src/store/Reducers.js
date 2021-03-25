import {combineReducers} from 'redux';
import {CartReducer} from './CartReducer';

export const Reducers =  combineReducers({
  cart: CartReducer
}); 