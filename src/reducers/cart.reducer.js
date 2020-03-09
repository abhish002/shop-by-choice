import { TOGGLE_CART_MENU, ADD_ITEM } from '../constants/action-types.constants';
import { addItemToCart } from '../utils/cart/cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_MENU:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    default:
      return {
        ...state,
      }
  }
};

export default cartReducer;