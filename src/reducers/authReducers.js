import isEmpty from '../validation/is-empty';
import { SET_CURRENT_USER } from '../actions/types';

//로그인하고 저장되는 공간
const initialState = {
    isAuthenticated: false,
    user: {}

};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
    
        default:
            return state;
    }
}