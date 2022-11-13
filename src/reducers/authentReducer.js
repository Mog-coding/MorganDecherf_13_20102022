const initState = {
    token: {}
}

export const authentReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGGED":
            console.log("action", action)
            return {...state, token: action.payload}
        default: 
            return state
    }
}