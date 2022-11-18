import './Header.css';
import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/pictures/argentBankLogo.png';

export default function Header() {
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
                <Link className="main-nav-item" to="/sign">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
}