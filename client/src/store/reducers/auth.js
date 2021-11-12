import {
    AUTH_FAILURE,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from '../../constans/actionTypes';

const initialState = {
    authData : null,
    authLoading: false,
    logoutLoading: false,
    authError: null
}
const authReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH_REQUEST:
            return {...state, authLoading: true, authError: null};
        case AUTH_SUCCESS:
            localStorage.setItem('profile', JSON.stringify({...action?.payload}));
            return {...state, authData: action?.payload, authLoading: false};
        case AUTH_FAILURE:
            return {...state, authLoading: false, authError: action.payload};
        case LOGOUT_REQUEST:
            return {...state, logoutLoading: true, authError: null}
        case LOGOUT_SUCCESS:
            localStorage.clear();
            return {...state, authData: null, authError: null, authLoading: false};
        case LOGOUT_FAILURE:
            return {...state, authError: action.payload, authLoading: false};
        default:
             return state;
    }
};

export default authReducer;