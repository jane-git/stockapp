import axios from 'axios';
import { GET_ERRORS } from './types';

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

