import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

const Main = (props) => {
    const [user, setUser] = useState([]);

    return( 
        <div className="Display-page">
        <h1 id='login-header'>Wake up Tenno</h1>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <span> | </span>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
        </div>
    )
}

export default Main;