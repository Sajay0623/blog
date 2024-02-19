import axios from "axios";

const { Authentication } = require("./actionTypes");

export const loginSuccess = (payload) => {
  return {
    type: Authentication.LOGIN_SUCCESS,
    payload,
  };
};

export const loginPending = () => {
  return {
    type: Authentication.LOGIN_PENDING,
  };
};

export const loginFailure = () => {
  return {
    type: Authentication.LOGIN_FAILURE,
  };
};

export const logoutSuccess = () => {
  return {
    type: Authentication.LOGOUT_SUCCESS,
  };
};

export const login = (data) => (dispatch) => {
  dispatch(loginPending);
  return axios
    .post("http://localhost:5000/user/login", data)
    .then((res) => {
      dispatch(loginSuccess(res.data.user));
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ isLoggedin: true, ...res.data.user })
      );
      return res.data.user;
    })
    .catch((err) => {
      console.log(err, "ERROR");
      return err.response.data;
    });
};

export const register = (data) => (dispatch) => {
  return axios
    .post("http://localhost:5000/user/register", data)
    .then((res) => {
      
      return res.response.data;
    })
    .catch((err) => {
      console.log(err.response.data, "ERROR");
      return err.response.data;
    });
};
