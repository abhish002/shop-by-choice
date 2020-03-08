import { SET_CURRENT_USER } from '../constants/action-types.constants';

const INITIAL_USER_STATE = {
    currentUser: null,
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };            
        default:
            return state;
    }
}

export default userReducer;