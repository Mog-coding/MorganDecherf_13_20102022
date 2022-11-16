import axios from "axios";

export const signIn = (logs) => {
    return async (dispatch) => {
        try {
            const respJWT = await axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/user/login',
                data: {
                    email: logs.email,
                    password: logs.password
                }
            })
            console.log("thunk signIn ok, resp:", respJWT)
            dispatch(signInSuccess(respJWT.data.body.token))
        } catch (error) {
            console.log("signIn error mess:", error)
            dispatch(signInError(error.response.data.message))
        }
    }
}

export const signInSuccess = (respJWT) => {
    return { type: 'SIGN_IN_SUCCESS', payload: respJWT };
};

export const signInError = (errorMessage) => {
    return { type: 'SIGN_IN_ERROR', payload: errorMessage };
};