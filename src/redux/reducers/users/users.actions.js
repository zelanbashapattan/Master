
import UsersService from "../../../services/users.service";
// import actions from "./users.actions";

// Action Types
export const USERS_START = "USERS_START";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_ERROR = "USERS_ERROR";

const usersLoadStart = () => ({
	type: USERS_START,
});

const usersLoadSuccess = (users) => ({
	type: USERS_SUCCESS,
	payload: users,
});

const usersLoadError = (errorMessage) => ({
	type: USERS_ERROR,
	payload: errorMessage,
});

export const loadUsersAsync = () => (dispatch) => {
	dispatch(usersLoadStart());

	UsersService.getAllUsers()
		.then((response) => dispatch(usersLoadSuccess(response.data)))
		.catch((error) => dispatch(usersLoadError(error.message)));
};

