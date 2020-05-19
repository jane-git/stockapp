import axios from "axios";
import setAuthToken from "../utils/setAUthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("http://131.181.190.87:3000/user/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const loginUser = (userData, history, successUrl) => (dispatch) => {
  axios
    .post("http://131.181.190.87:3000/user/login", userData)
    .then((res) => {
      const { token } = res.data;
      console.log(token);

      //set token to ls
      localStorage.setItem("jwtToken", token);
      //set token to Auth header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);

      //set current user
      dispatch(setCurrentUser(decoded));
      history.push(successUrl ? successUrl : "/stock");
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

//set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//log user out
export const logoutUser = (history) => (dispatch) => {
  //remove token from localStorage
  localStorage.removeItem("jwtToken");
  //remove auth header for future requests
  setAuthToken(false);
  //set current user to {}which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  history.push("/stock");
};
