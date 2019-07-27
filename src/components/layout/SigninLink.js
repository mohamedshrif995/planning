import React from 'react';
import {NavLink} from 'react-router-dom'
const SigninLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'></NavLink>SignOut</li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>nn</NavLink></li>
        </ul>
    ); 
}

export default SigninLink;