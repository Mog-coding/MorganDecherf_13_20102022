import { useSelector } from 'react-redux';
import { isConnected } from '../../selectors/authentSelectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const userIsConnected = useSelector(isConnected);

    if (!userIsConnected) {
        return <Navigate to="/sign" />;
    }
    return children;
}