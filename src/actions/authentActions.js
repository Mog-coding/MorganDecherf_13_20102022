import axios from 'axios';

export const logInThunk = (logs) => {
    return async (dispatch) => {
        try {
            const respJWT = await axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/user/login',
                data: {
                    email: logs.email,
                    password: logs.password,
                },
            });
            console.log('thunk logIn ok, resp:', respJWT);
            dispatch(logInSuccess(respJWT.data.body.token));
        } catch (error) {
            console.log('logIn error mess:', error);
            dispatch(logInError(error.response.data.message));
        }
    };
};

export const logInSuccess = (respJWT) => {
    return { type: 'LOG_IN_SUCCESS', payload: respJWT };
};

export const logInError = (errorMessage) => {
    return { type: 'LOG_IN_ERROR', payload: errorMessage };
};

export const updateNameThunk = (name) => {
    return async (dispatch, getState) => {
        try {
        const token = getState().auth.token;
        console.log('tokenLa:', token);
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
              console.log("error update:", error)
              dispatch(updateNameError(error.response.data.message))
          }
    };
};

export const updateNameSuccess = (resp) => {
    console.log('resp1:', resp);
    return {
        type: 'UPDATE_NAME_SUCCESS',
        payload: {
            firstName: resp.data.body.firstName,
            lastName: resp.data.body.lastName,
        },
    };
};

export const updateNameError = (resp) => {
    return {
        type: 'UPDATE_NAME_ERROR',
        payload: resp,
    };
};