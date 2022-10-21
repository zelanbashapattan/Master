import { USERS_START, USERS_SUCCESS, USERS_ERROR } from "./users.actions";

// Initial state
const initialState = {
	isLoading: false,
	users: null,
	errorMessage: null,
};

const usersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case USERS_START:
			return {
				...state,
				isLoading: true,
				users: null,
				errorMessage: null,
			};

		case USERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				users: payload,
			};

		case USERS_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default usersReducer;
