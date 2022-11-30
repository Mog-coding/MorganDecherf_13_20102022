import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { selectConnected } from "../../selectors/authentSelectors";
import PropTypes from 'prop-types';

/**
 * @description component checks if user is connected: redirect to /profile, else it returns <ProfilePage />
 */
export default function PublicRoute({children}){
    const userIsConnected = useSelector(selectConnected);

    if (userIsConnected) {
        return <Navigate to="/profile" />
    }
    return children;
}

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired
};