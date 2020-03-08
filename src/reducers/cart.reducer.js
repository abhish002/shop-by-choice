import { TOGGLE_CART_MENU } from '../constants/action-types.constants';

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_MENU:
      return {
        ...state,
        hidden: !state.hidden,
      }
    default:
      return {
        ...state,
      }
  }
};

export default cartReducer;