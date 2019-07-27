import React from 'react';
import {NavLink} from 'react-router-dom'

const SignoutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Sign up</NavLink></li>
            <li><NavLink to='/'></NavLink>Login</li>
        </ul>
    );
}

export default SignoutLink;