import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { isConnected } from "../../selectors/authentSelectors";

export default function PublicRoute({children}){
    const userIsConnected = useSelector(isConnected);

    if (userIsConnected) {
        return <Navigate to="/user" />
    }
    return children;
}
