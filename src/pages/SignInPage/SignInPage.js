import { useState } from 'react';
import './SignInPage.css';
import { useDispatch, useSelector } from 'react-redux';
import {signIn} from './../../actions/authentActions'
import { isConnected } from '../../selectors/authentSelectors';
import { Navigate } from 'react-router-dom';

export default function SignInPage() {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const userIsConnected = useSelector(isConnected)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn({email: userName, password: password}))
    };

    if (userIsConnected) {
        return <Navigate to="/user" />
    }

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
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
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
