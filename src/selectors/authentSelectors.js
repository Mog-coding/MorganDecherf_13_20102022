import { isTokenValid } from "../utils/isTokenValid";

export const isConnected = (state) => isTokenValid(state.authent.token);