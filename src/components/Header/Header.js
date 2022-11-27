import './Header.css';
import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/pictures/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import signOutIcon from '../../assets/icons/signOut.svg';
import userIcon from '../../assets/icons/userIcon.svg';
import { getProfileThunk, logInSuccess, signOut,} from '../../actions/authentActions';
import { useEffect } from 'react';
import { isTokenValid } from '../../utils/isTokenValid';

export default function Header() {
    const isConnected = useSelector((state) => isTokenValid(state.authent.token));
    const firstName = useSelector((state) => state.dataProfile.firstName);
    const remember = useSelector((state) => state.authent.remember);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isConnected && Boolean(window.localStorage.getItem('token'))) {
            console.log('localstorage', window.localStorage.getItem('token'));
            console.log('reconnexion a faire');
            dispatch(logInSuccess(window.localStorage.getItem('token')));
            dispatch(getProfileThunk());
        }
    }, [isConnected, remember, dispatch]);

    const signOutHandle = () => {
        dispatch(signOut());
        window.localStorage.clear();
        console.log(
            'localStorage token apres signout:',
            localStorage.getItem('token')
        );
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
                    <Link className="main-nav-login linkHandle" to="/sign">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}
