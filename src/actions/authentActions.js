import axios from "axios";

export const signIn = (logs) => { //1 avec thunk: autorisé à retourner une function
    return async(dispatch) => {
      const respJWT = await axios
         .post("http://localhost:3001/api/v1/user/login", {
             email: logs.email,
             password: logs.password
         })
         console.log("thunk fetchPosts resp:", respJWT )
        dispatch(signInSuccess(respJWT.data.body.token)) //dispatch manuel qd fetch fini: stocke resp ds store
    } 
}    

 export const signInSuccess = (respJWT) => {
     return { type: 'SIGN_IN_SUCCESS', payload: respJWT };
 };

 export const signInError = (respJWT) => {
    return { type: 'SIGN_IN_Error', payload: respJWT };
};