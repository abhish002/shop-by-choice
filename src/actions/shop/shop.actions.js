import { ShopActionTypes } from '../../constants/action-types.constants';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START
});

const fetchCollectionsSuccess = (collection) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collection
});

const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionsref = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionsref.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(e => dispatch(fetchCollectionsFailure(e.message)));
  }
}