import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout'
import Single from './components/Single';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
    <React.StrictMode>
        <Header />
        <Routes>
            <Route exact path='/' element={ < App />}></Route>
            <Route exact path='/register' element={< Register/>}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/logout' element={< Logout />}></Route>
            <Route exact path='/post/:slug' element={< Single />}></Route>
        </Routes>
    </React.StrictMode>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
