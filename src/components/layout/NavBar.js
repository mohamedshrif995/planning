import React from 'react'
import { Link } from 'react-router-dom'
import SigninLink from './SigninLink';
import SignoutLink from './SignoutLInk';
import {connect} from 'react-redux'
const NavBar = (props) => {
    const{auth,profile}=props
    console.log('profile', profile)
    const links=auth.uid?<SigninLink profile={profile} />:<SignoutLink />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>my plan</Link>
              {links}
            </div>
        </nav>
    );
}
const mapStateTiProps=(state)=>{
    console.log('my oooooo',state)
    return{
    auth:state.firebase.auth,
    profile:state.firebase.profile
    }
}
export default connect(mapStateTiProps) (NavBar);