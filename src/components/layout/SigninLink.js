import React from 'react';
import {NavLink} from 'react-router-dom'
import {signOut}from '../../store/actions/AuthActions'
import { connect}from 'react-redux'
const SigninLink = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut} to='/'>SignOut</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>nn</NavLink></li>
        </ul>
    ); 
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
        
    }
}
export default connect(
    null,mapDispatchToProps
) (SigninLink);