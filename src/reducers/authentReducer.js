const initState = {
    token: null,
    loadingLogin: false,
    errorMessage: null,
    remember: false,
};

export const authentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOG_IN_LOADING':
            return { ...state, loadingLogin: true };
        case 'LOG_IN_SUCCESS':
            return { ...state, token: action.payload, errorMessage: null, loadingLogin: false, };
        case 'LOG_IN_ERROR':
            return { ...state, errorMessage: action.payload, loadingLogin: false, };
        case 'SIGN_OUT':
            return { ...state, token: null, remember: false };
        case 'REMEMBER':
            return { ...state, remember: true };
        case 'NOT_REMEMBER':
            return { ...state, remember: false };
        default:
            return state;
    }
};
