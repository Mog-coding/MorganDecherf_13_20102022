import './Header.css';
import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/pictures/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import signOutIcon from '../../assets/icons/signOut.svg';
import userIcon from '../../assets/icons/userIcon.svg';
import { getProfileThunk, logInSuccess, signOut } from '../../actions/authentActions';
import { useEffect } from 'react';
import { selectConnected, selectFirstName } from '../../selectors/authentSelectors';

/**
 * @description component that allows to navigate to LoginPage or HomePage or ProfilePage(only if user is connected)
 */
export default function Header() {
    const isConnected = useSelector(selectConnected);
    const firstName = useSelector(selectFirstName);

    const dispatch = useDispatch();

    // useEffect detects if the page is refreshed and user is connected -> store localStorage's token inside redux
    useEffect(() => {
        if (!isConnected && Boolean(window.localStorage.getItem('token'))) {
            dispatch(logInSuccess(window.localStorage.getItem('token')));
            dispatch(getProfileThunk());
        }
    }, [isConnected, dispatch]);

    const signOutHandle = () => {
        window.localStorage.removeItem('token');
        dispatch(signOut());
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                    className="main-nav-logo-image"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isConnected ? (
                    <div className="main-nav-logout">
                        <Link className="iconUserCont linkHandle" to="/profile">
                            <img src={userIcon} alt="" />
                            {firstName}
                        </Link>
                        <div className="iconSignOutCont linkHandle">
                            <img src={signOutIcon} alt="" />
                            <div onClick={() => signOutHandle()}>Sign out</div>
                        </div>
                    </div>
                ) : (
                    <Link className="main-nav-login linkHandle" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}
