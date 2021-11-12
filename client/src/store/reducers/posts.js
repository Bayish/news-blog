import {DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE, UPDATE_REQUEST, UPDATE_FAILURE, UPDATE_SUCCESS, CREATE_SUCCESS, CREATE_FAILURE, CREATE_REQUEST, FETCH_ALL_REQUEST, FETCH_ALL_SUCCESS, FETCH_ALL_FAILURE, LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE} from "../../constans/actionTypes";

const initialState = {
    posts: [],
    fetchLoading: false,
    fetchError: null,
};
const posts =  (state = initialState, action) => {
    switch (action.type){
        case DELETE_REQUEST:
            return {...state, fetchError: null};
        case DELETE_SUCCESS:
            return {...state,
                fetchError: null,
                posts: state.posts.filter(p => p._id !== action.payload),
            };
        case DELETE_FAILURE:
            return {...state, fetchError: action.payload};
        case UPDATE_REQUEST:
            return {...state, fetchError: null, fetchLoading: true}
        case UPDATE_SUCCESS:
            return {...state,
                fetchError: null,
                posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post),
                fetchLoading: false,
            };
        case UPDATE_FAILURE:
            return {...state, fetchError: action.payload, fetchLoading: false};
        case LIKE_REQUEST:
            return {...state, fetchError: null}
        case LIKE_SUCCESS:
            return {...state,
                fetchError: null,
                posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post)};
        case LIKE_FAILURE:
            return {...state, fetchError: action.payload};
        case FETCH_ALL_REQUEST:
            return {...state, fetchError: null, fetchLoading: true}
        case FETCH_ALL_SUCCESS :
            return {...state, posts: action.payload, fetchLoading: false, fetchError: null};
        case FETCH_ALL_FAILURE:
            return {...state, fetchError: action.payload, fetchLoading: false};
        case CREATE_REQUEST:
            return {...state, fetchError: null, fetchLoading: true};
        case CREATE_SUCCESS :
            return {
                ...state,
                fetchError: null,
                fetchLoading: false,
                posts: [...state.posts, action.payload]
            };
        case CREATE_FAILURE:
            return {...state, fetchError: action.payload, fetchLoading: false};
        default:
            return posts;
    }
};

export default posts;