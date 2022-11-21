import { useState } from 'react';
import './LogInPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { logInThunk } from '../../actions/authentActions';

export default function LogInPage() {
    const dispatch = useDispatch();
    const isErrorMessage = useSelector((state) => state.auth.errorMessage);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logInThunk({ email: userName, password: password }));
    };

    return (
        <>
            <main className="mainSign bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                className={isErrorMessage ? 'outlineError' : '' }
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className={isErrorMessage ? 'outlineError' : '' }
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        {isErrorMessage && (
                            <div className="errorMessage">{isErrorMessage}</div>
                        )}
                        <div className="input-remember">
                            <label htmlFor="remember-me">Remember me</label>
                            <input type="checkbox" id="remember-me" />
                        </div>

                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </>
    );
}