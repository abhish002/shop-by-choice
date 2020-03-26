import { TOGGLE_CART_MENU, ADD_ITEM, REMOVE_ITEM, DECREASE_ITEM_QTY } from '../../constants/action-types.constants';

export const toggleCart = () => ({
  type: TOGGLE_CART_MENU,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const decreaseItemQty = item => ({
  type: DECREASE_ITEM_QTY,
  payload: item,
});

