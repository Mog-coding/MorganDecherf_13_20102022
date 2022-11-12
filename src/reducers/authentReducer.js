const initState = {
    token: {}
}

export const authentReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGGIN":
            console.log("action", action)
            return {...state, token: action.payload}
        default: 
            return state
    }
}