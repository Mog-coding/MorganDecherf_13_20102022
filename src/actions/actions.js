import axios from 'axios';

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

/**
 * @description retrieve user's firstName and lastName with axios request containing user's token 
 */
export const getProfileThunk = () => {
    return async (dispatch, getState) => {
        try {
            const token = getState().authent.token;
            const resp = await axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/user/profile',
                headers: { Authorization: `Bearer ${token}` },
            });

            dispatch(
                getProfileSuccess({
                    firstName: resp.data.body.firstName,
                    lastName: resp.data.body.lastName,
                })
            );
        } catch (error) {
            console.error(error);
            dispatch(getProfileError(error.response.data.message));
        }
    };
};

export const getProfileSuccess = (resp) => {
    return {
        type: 'GET_PROFILE_SUCCESS',
        payload: resp,
    };
};

export const getProfileError = (resp) => {
    return {
        type: 'GET_PROFILE_ERROR',
        payload: resp,
    };
};

/**
 * @description update user's firstName and lastName with axios request containing user's token 
 * @param { Object } name 
 */
export const updateNameThunk = (name) => {
    return async (dispatch, getState) => {
        dispatch(updateNameLoading());
        try {
            const token = getState().authent.token;
            const resp = await axios({
                method: 'put',
                url: 'http://localhost:3001/api/v1/user/profile',
                headers: { Authorization: `Bearer ${token}` },
                data: {
                    firstName: name.firstName,
                    lastName: name.lastName,
                },
            });

            dispatch(
                updateNameSuccess({
                    firstName: resp.data.body.firstName,
                    lastName: resp.data.body.lastName,
                })
            );
        } catch (error) {
            console.error(error);
            dispatch(updateNameError(error.response.data.message));
        }
    };
};

export const updateNameLoading = () => {
    return { type: 'UPDATE_NAME_LOADING' };
};

export const updateNameSuccess = (resp) => {
    return {
        type: 'UPDATE_NAME_SUCCESS',
        payload: resp,
    };
};

export const updateNameError = (resp) => {
    return {
        type: 'UPDATE_NAME_ERROR',
        payload: resp,
    };
};
