import {AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE} from '../../constans/actionTypes';
import  * as api from '../../api/index';
import {toast} from "react-toastify";

export const authRequest = () => ({type: AUTH_REQUEST});
export const authSuccess = data => ({type: AUTH_SUCCESS, payload: data});
export const authFailure = e => ({type: AUTH_FAILURE, payload: e});

export const signin = (formData, navigate) => async dispatch => {
    try{
        dispatch(authRequest())
        const {data} = await api.signIn(formData);
        dispatch(authSuccess(data));
        toast.success('Log In successful!')
        navigate('/')
    }catch(error) {
        if(error.response && error.response.data){
            dispatch(authFailure(error.response.data));

        }else{
            dispatch(authFailure({global: "No internet"}));
        }
    }
};
export const signup = (formData, navigate) => async dispatch => {
    try{
        dispatch(authRequest());
        const {data} = await api.signUp(formData);
        dispatch(authSuccess(data));
        toast.success('Sign Up successful!')
        navigate('/')
    }catch(error) {
        if(error.response && error.response.data){
            dispatch(authFailure(error.response.data));

        }else{
            dispatch(authFailure({global: "No internet"}));
        }
    }
};
