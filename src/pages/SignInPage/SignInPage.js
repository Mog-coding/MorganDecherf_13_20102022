import { useState } from 'react';
import './SignInPage.css';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loggin } from '../../actions/authentActions';

export default function SignInPage() {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:3001/api/v1/user/login", {
            email: userName,
            password: password
        })
        .then((resp) => { 
            console.log("resp", resp);
            dispatch(loggin(resp.data.body))
    })
    };

    return (
        <>
            <main className="mainSign bg-dark">
                {console.log('render')}
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
