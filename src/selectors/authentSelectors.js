import { isTokenValid } from "../utils/isTokenValid";

export const selectConnected = (state) => isTokenValid(state.authent.token);
export const selectErrorMessage = (state) => state.authent.errorMessage;
export const selectLoadingLogin = (state) => state.authent.loadingLogin;

export const selectFirstName = (state) => state.dataProfile.firstName;
export const selectLastName = (state) => state.dataProfile.lastName;
export const selectLoadingName = (state) => state.dataProfile.loadingName;