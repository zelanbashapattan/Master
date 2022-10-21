
//Imports
import { GET_USERS, DELETE_USER, ADD_USER, SINGLE_USER, UPDATE_USER } from "./actions";

const initialState = {
    users:[],
    user:{},
    loading: false
}

const usersReducers = (state = initialState, action) =>{
    switch(action.type){
        case GET_USERS: return {
            ...state,
            users: action.payload,
             loading: false,
        };
        case UPDATE_USER:
        case ADD_USER:
        case DELETE_USER: return {
            ...state,
            loading: false
        };
        case SINGLE_USER: return{
            ...state,
            user: action.payload,
            loading: false
        };
         
        default:
            return state;
    }
}

export default usersReducers;