import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import LogInPage from './pages/LogInPage/LogInPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/rootReducers';
import thunk from 'redux-thunk';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign" element={
                    <PublicRoute>
                        <LogInPage />
                    </PublicRoute>} />
                <Route path="/profile" element={
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                } />
            </Routes>
            <Footer />
        </Router>
        {/* </React.StrictMode> */}
    </Provider>
);
