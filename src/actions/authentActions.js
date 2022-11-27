import axios from 'axios';

/* login */
export const logInThunk = (logs) => {
    return async (dispatch, getState) => {
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
            dispatch(logInSuccess(resp.data.body.token));

            const remember = getState().authent.remember;

            if (remember) {
                window.localStorage.setItem('token', resp.data.body.token);
            }

            dispatch(getProfileThunk());
        } catch (error) {
            dispatch(logInError(error.response.data.message));
        }
    };
};

export const logInLoading = (respJWT) => {
    return { type: 'LOG_IN_LOADING' };
};

export const logInSuccess = (resp) => {
    return { type: 'LOG_IN_SUCCESS', payload: resp };
};

export const logInError = (errorMessage) => {
    return { type: 'LOG_IN_ERROR', payload: errorMessage };
};

export const signOut = () => {
    return { type: 'SIGN_OUT' };
};

export const remember = () => {
    return { type: 'REMEMBER' };
};

export const notRemember = () => {
    return { type: 'NOT_REMEMBER' };
};

/* profile */
export const getProfileThunk = () => {
    return async (dispatch, getState) => {
        try {
            const token = getState().authent.token;
            const resp = await axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/user/profile',
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log('requete profile', resp);
            dispatch(getProfileSuccess(resp));
        } catch (error) {
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

/* update name */
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
            dispatch(updateNameSuccess(resp));
        } catch (error) {
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
