import { useSelector } from 'react-redux';
import { selectConnected } from '../../selectors/authentSelectors';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @description component checks if user is not connected: redirect to /login, else it returns <LogInPage /> 
 */
export default function PrivateRoute({ children }) {
    const userIsConnected = useSelector(selectConnected);

    if (!userIsConnected) {
        return <Navigate to="/login" />;
    }
    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};