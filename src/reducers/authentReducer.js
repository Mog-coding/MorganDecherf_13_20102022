const initState = {
    token: null,
    errorMessage: null,
    name: {},
    errorUpdate: null,
};

export const authentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return { ...state, token: action.payload };
        case 'LOG_IN_ERROR':
            return { ...state, errorMessage: action.payload };
        case 'UPDATE_NAME_SUCCESS':
            return { ...state, name: action.payload };
        case 'UPDATE_NAME_ERROR':
            return { ...state, errorUpdate: action.payload }
        default:
            return state;
    }
};