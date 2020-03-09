import { TOGGLE_CART_MENU, ADD_ITEM } from '../../constants/action-types.constants';

export const toggleCart = () => ({
  type: TOGGLE_CART_MENU,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});