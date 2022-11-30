const initState = {
    firstName: '',
    lastName: '',
    loadingName: false,
    errorProfile: null,
    errorUpdate: null,
};

export const dataProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_NAME_LOADING':
            return { ...state, loadingName: true };
        case 'UPDATE_NAME_SUCCESS':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                loadingName: false,
            };
        case 'UPDATE_NAME_ERROR':
            return {
                ...state,
                errorUpdate: action.payload,
                loadingName: false,
            };
        case 'GET_PROFILE_SUCCESS':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        case 'GET_PROFILE_ERROR':
            return {
                ...state,
                errorProfile: action.payload,
            };
        default:
            return state;
    }
};
