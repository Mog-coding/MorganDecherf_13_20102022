import './Header.css';
import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/pictures/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import signOutIcon from '../../assets/icons/signOut.svg';
import userIcon from '../../assets/icons/userIcon.svg';
import { signOut } from '../../actions/authentActions';

export default function Header() {
    const isConnected = useSelector((state) => Boolean(state.auth.token));
    const firstName = useSelector((state) => state.userData.firstName);
    const dispatch = useDispatch();

    const signOutHandle = () => {
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
                    <Link className="main-nav-login linkHandle" to="/sign">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}
