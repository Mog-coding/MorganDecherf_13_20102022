const initState = {
    token: null
}

export const authentReducer = (state = initState, action) => {
    switch(action.type){
        case "SIGN_IN_SUCCESS":
            console.log("action", action)
            return {...state, token: action.payload}
        default: 
            return state
    }
}