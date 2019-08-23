import React from 'react';
import {NavLink} from 'react-router-dom'

const SignoutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Sign up</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    );
}

export default SignoutLink;