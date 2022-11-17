const initState = {
    token: null,
    errorMessage: null
}

export const authentReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGN_IN_SUCCESS":
            return { ...state, token: action.payload }
        case "SIGN_IN_ERROR":
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}