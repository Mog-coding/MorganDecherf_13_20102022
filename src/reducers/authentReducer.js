const initState = {
    token: null,
    loading: false,
    errorMessage: null,
};

export const authentReducer = (state = initState, action) => {
    switch (action.type) {
        // case 'LOG_IN_LOADING':
        //     return { ...state, loading: true };
        case 'LOG_IN_SUCCESS':
            return { ...state, token: action.payload };
        case 'LOG_IN_ERROR':
            return { ...state, loading: false, errorMessage: action.payload };
        default:
            return state;
    }
};