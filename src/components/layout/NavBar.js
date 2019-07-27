import React from 'react'
import { Link } from 'react-router-dom'
import SigninLink from './SigninLink';
import SignoutLink from './SignoutLInk';
const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>my plan</Link>
                <SigninLink />
                <SignoutLink />
            </div>
        </nav>
    );
}

export default NavBar;