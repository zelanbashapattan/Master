import axios from "axios";

// Action Types
export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "ADD_USER";
export const SINGLE_USER = "SINGLE_USER";

const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: DELETE_USER,
});

const userAdded = () => ({
  type: ADD_USER,
});

const userUpdated = () => ({
  type: UPDATE_USER,
});
const getSingleUser = (user) => ({
  type: SINGLE_USER,
  payload: user,
});

export const loadUsers = (users) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        dispatch(getUsers(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then(() => {
        dispatch(userDeleted());
        dispatch(loadUsers()); //fetching the latest data
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const singleUser = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(getSingleUser(res.data));
        // dispatch(loadUsers()); //fetching the latest data
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then(() => {
        dispatch(userAdded());
        // dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const userUpdate = (user, id) => {
  return (dispatch) => {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then(() => {
        dispatch(userUpdated());
        // dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
