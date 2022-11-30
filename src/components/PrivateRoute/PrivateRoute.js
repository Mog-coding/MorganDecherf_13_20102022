import { useSelector } from 'react-redux';
import { selectConnected } from '../../selectors/authentSelectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const userIsConnected = useSelector(selectConnected);

    if (!userIsConnected) {
        return <Navigate to="/sign" />;
    }
    return children;
}