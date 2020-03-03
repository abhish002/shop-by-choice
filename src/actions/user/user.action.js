import { SET_CURRENT_USER } from '../../constants/action-types.constants';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user,
});