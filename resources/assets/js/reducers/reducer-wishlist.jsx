const INITIAL_STATE = { wishList: [] };

export default function (state = INITIAL_STATE, action ) {
  switch(action.type) {
    case 'GET_WISHLIST_FULFILLED':
      return { ...state, wishList: action.payload.data };
      break;
    case 'STORE_WISHLIST_FULFILLED':
      return { ...state, wishList: action.payload.data };
      break;
    default:
      return state;
  }
}