import axios from 'axios';
import setAuthToken from '../utils/setAUthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import jwt_decode from 'jwt-decode';

export const registerUser = ( userData, history) => dispatch => {
    axios
        .post("http://131.181.190.87:3000/user/register", userData)
        .then(res => history.push('/login'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const loginUser = userData => dispatch => {
    axios
        .post('http://131.181.190.87:3000/user/login', userData)
        .then(res => {

            const { token } = res.data;

            console.log(token);

            
        })

        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

//set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};