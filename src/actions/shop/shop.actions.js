import { UPDATE_COLLECTIONS } from '../../constants/action-types.constants';

export const updateCollections = (collections) => ({
  type: UPDATE_COLLECTIONS,
  payload: collections,
});