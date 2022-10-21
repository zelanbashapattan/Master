import { combineReducers } from "redux";
import usersReducers from "./reducers";

const rootReducer = combineReducers({
    userData: usersReducers
});

export default rootReducer;