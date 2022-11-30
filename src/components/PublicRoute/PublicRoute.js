import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { selectConnected } from "../../selectors/authentSelectors";

export default function PublicRoute({children}){
    const userIsConnected = useSelector(selectConnected);

    if (userIsConnected) {
        return <Navigate to="/profile" />
    }
    return children;
}
