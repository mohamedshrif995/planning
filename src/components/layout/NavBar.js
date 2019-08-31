import React from 'react'
import { Link } from 'react-router-dom'
import SigninLink from './SigninLink';
import SignoutLink from './SignoutLInk';
import {connect} from 'react-redux'
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
const mapStateTiProps=(state)=>{
    console.log('my auth',state)
    return{
        
    }
}
export default connect(mapStateTiProps) (NavBar);