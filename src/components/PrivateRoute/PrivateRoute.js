import { useSelector, useStore } from "react-redux"
import { isConnected } from "../../selectors/authentSelectors"
import { Navigate } from "react-router-dom"

export default function PrivateRoute({ children }) {
    // const userIsConnected = useSelector((state) => Boolean(isConnected));
    const store = useStore();
    const userIsConnected = Boolean(store.getState().auth.token);

    if (!userIsConnected) {
        return <Navigate to="/sign" />
    }
    return children;
}