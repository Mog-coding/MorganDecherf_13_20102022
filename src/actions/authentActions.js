import axios from "axios";

export const logIn = (logs) => {
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
            console.log("thunk logIn ok, resp:", respJWT)
            dispatch(logInSuccess(respJWT.data.body.token))
        } catch (error) {
            console.log("logIn error mess:", error)
            dispatch(logInError(error.response.data.message))
        }
    }
}

export const logInSuccess = (respJWT) => {
    return { type: 'LOG_IN_SUCCESS', payload: respJWT };
};

export const logInError = (errorMessage) => {
    return { type: 'LOG_IN_ERROR', payload: errorMessage };
};



 export const updateName = (name) => {
     return async (dispatch, getState) => {
        //  try {

             const {auth} = getState(); //améliorer {auth}
            console.log("token:", auth.token)
            console.log("nom", name)
             const resp = await axios({
                 method: 'put',
                 url: 'http://localhost:3001/api/v1/user/profile',
                 headers: { Authorization: `Bearer ${auth.token}`},
                 data: {
                     "firstName": name.firstName,
                     "lastName": name.lastName
                 }
             })
             console.log('resp:', resp)
             dispatch(logInSuccess(resp))
        //  } catch (error) {
        //      console.log("logIn error mess:", error)
        //      dispatch(logInError(error.response.data.message))
        //  }
     }
 }
