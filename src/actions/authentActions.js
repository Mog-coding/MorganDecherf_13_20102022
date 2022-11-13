import axios from "axios";

export const fetchPosts = (logs) => { //1 avec thunk: autorisé à retourner une function
    return async(dispatch, getState) => {

      const respJWT = await axios
         .post("http://localhost:3001/api/v1/user/login", {
             email: logs.email,
             password: logs.password
         })
         console.log("fetchPosts resp:", respJWT )
        dispatch(logged(respJWT)) //dispatch manuel qd fetch fini: stocke resp ds store
    } 
}    


 export const logged = (respJWT) => {
     return { type: 'LOGGED', payload: respJWT };
 };