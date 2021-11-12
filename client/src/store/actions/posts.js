import * as api from '../../api';
import {
    CREATE_FAILURE,
    CREATE_REQUEST,
    CREATE_SUCCESS,
    DELETE_FAILURE,
    DELETE_REQUEST,
    DELETE_SUCCESS,
    FETCH_ALL_FAILURE,
    FETCH_ALL_REQUEST,
    FETCH_ALL_SUCCESS,
    LIKE_FAILURE,
    LIKE_REQUEST,
    LIKE_SUCCESS,
    UPDATE_FAILURE,
    UPDATE_REQUEST,
    UPDATE_SUCCESS
} from '../../constans/actionTypes';
import {toast} from "react-toastify";

export const fetchAllRequest = () => ({type: FETCH_ALL_REQUEST});
export const fetchAllSuccess = data => ({type: FETCH_ALL_SUCCESS, payload: data});
export const fetchAllFailure = e => ({type: FETCH_ALL_FAILURE, payload: e});

export const createRequest = () => ({type: CREATE_REQUEST});
export const createSuccess = data => ({type: CREATE_SUCCESS, payload: data});
export const createFailure = e => ({type: CREATE_FAILURE, payload: e});

export const updateRequest = () => ({type: UPDATE_REQUEST});
export const updateSuccess = data => ({type: UPDATE_SUCCESS, payload: data});
export const updateFailure = e => ({type: UPDATE_FAILURE, payload: e});

export const deleteRequest = () => ({type: DELETE_REQUEST});
export const deleteSuccess = data => ({type: DELETE_SUCCESS, payload: data});
export const deleteFailure = e => ({type: DELETE_FAILURE, payload: e});

export const likeRequest = () => ({type: LIKE_REQUEST});
export const likeSuccess = data => ({type: LIKE_SUCCESS, payload: data});
export const likeFailure = e => ({type: LIKE_FAILURE, payload: e});

export const getPosts = () => async dispatch =>{
    try{
        dispatch(fetchAllRequest());
        const {data} = await api.fetchPosts();
        dispatch(fetchAllSuccess(data));
    }catch(e){
        dispatch(fetchAllFailure(e));
    }
};

export const createPost = post =>  async dispatch => {
    try{
        dispatch(createRequest());
        const {data} = await api.createPost(post);
        dispatch(createSuccess(data));
        toast.success('🦄 News created!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } catch(error) {
        dispatch(createFailure(error));
    }
};

export const updatePost = (id, post) => async dispatch => {
    try{
        dispatch(updateRequest());
        const {data} = await api.updatePost(id, post);
        dispatch(updateSuccess(data));
        toast.success(' News updated!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }catch(e){
        dispatch(updateFailure(e))
    }
};

export const deletePost = id => async dispatch => {
    try{
        dispatch(deleteRequest());
        await api.deletePost(id);
        dispatch(deleteSuccess(id));
        toast.success('🦄 News deleted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }catch(e){
        dispatch(deleteFailure(e))
    }
};

export const likePost = id => async dispatch => {
    try{
        dispatch(likeRequest());
        const {data} = await api.likePost(id);
        dispatch(likeSuccess(data));
    }catch(e){
        dispatch(likeFailure(e));
    }
}
