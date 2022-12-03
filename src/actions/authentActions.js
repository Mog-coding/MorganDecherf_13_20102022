import axios from 'axios';
import { getProfileThunk } from './dataProfileActions';


/**
 * @description logIn Thunk, perform axios request with logs
 * @param { Object } logs 
 * @param { Boolean } remember 
 */
export const logInThunk = (logs, remember) => {
    return async (dispatch) => {
        dispatch(logInLoading());

        try {
            const resp = await axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/user/login',
                data: {
                    email: logs.email,
                    password: logs.password,
                },
            });
            dispatch(logInSuccess(resp.data.body.token, remember));

            if (remember) {
                window.localStorage.setItem('token', resp.data.body.token);
            }

            dispatch(getProfileThunk());
        } catch (error) {
            console.error(error);
            dispatch(logInError(error.response.data.message));
        }
    };
};

export const logInLoading = () => {
    return { type: 'LOG_IN_LOADING' };
};

export const logInSuccess = (resp, remember) => {
    return { type: 'LOG_IN_SUCCESS', payload: resp, rememb: remember };
};

export const logInError = (errorMessage) => {
    return { type: 'LOG_IN_ERROR', payload: errorMessage };
};

export const signOut = () => {
    return { type: 'SIGN_OUT' };
};