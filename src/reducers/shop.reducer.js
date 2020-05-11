// import SHOP_DATA from '../constants/shop.data';
import { UPDATE_COLLECTIONS } from '../constants/action-types.constants';

const INITIAL_STATE = {
  collections: [],
  isLoading: true,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      }
    default:
      return state;
  }
}

export default shopReducer;