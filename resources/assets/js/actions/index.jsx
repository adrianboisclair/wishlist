import axios from 'axios';

export const getWishList = id => {
  const payload = axios.get(`/api/wishlists/${id}/`);
  payload.then(response => response);
  return {
    type: 'GET_WISHLIST_FULFILLED',
    payload
  }
};

let nextItemId = 0;

export const addToWishlist = text => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++
  };
};

const wishlistItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state
  }
};

export default wishlistItems