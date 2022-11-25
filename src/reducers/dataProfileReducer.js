const initState = {
    firstName: '',
    lastName: '',
    loading: false,
    errorProfile: null,
    errorUpdate: null,
};

export const dataProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_NAME_LOADING':
            return { ...state, loading: true };
        case 'UPDATE_NAME_SUCCESS':
            return {
                ...state,
                firstName: action.payload.data.body.firstName,
                lastName: action.payload.data.body.lastName,
                loading: false,
            };
        case 'UPDATE_NAME_ERROR':
            return { ...state, errorUpdate: action.payload, loading: false };
        case 'GET_PROFILE_SUCCESS':
            return {
                ...state,
                firstName: action.payload.data.body.firstName,
                lastName: action.payload.data.body.lastName,
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
