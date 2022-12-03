import axios from 'axios';

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