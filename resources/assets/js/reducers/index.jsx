import { combineReducers } from 'redux';
import WishListReducer from './reducer-wishlist';

const allReducers = combineReducers({
  wishList: WishListReducer
});

export default allReducers;
