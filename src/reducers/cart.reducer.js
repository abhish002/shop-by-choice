import { TOGGLE_CART_MENU, ADD_ITEM, REMOVE_ITEM, DECREASE_ITEM_QTY } from '../constants/action-types.constants';
import { addItemToCart, removeItemFromCart, decreaseItemQty } from '../utils/cart/cart.utils';

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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }
      case DECREASE_ITEM_QTY:
        return {
          ...state,
          cartItems: decreaseItemQty(state.cartItems, action.payload),
        }
    default:
      return {
        ...state,
      }
  }
};

export default cartReducer;