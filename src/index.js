import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import SignInPage from './pages/SignInPage/SignInPage';
import UserPage from './pages/UserPage/UserPage';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from "./app/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign" element={<SignInPage />} />
                    <Route path="/user" element={<UserPage />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    </Provider>
);
