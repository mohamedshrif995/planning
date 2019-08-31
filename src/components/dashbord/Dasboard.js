import React, { Component } from 'react';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
class Dasboard extends Component {
    state = {  }
    render() {
        const{Projects}=this.props
        console.log('this.props', this.props)
        return (
            <div className="dasboard container">
                <div className="row">
                    <div className="col sl2 m6">
                        <ProjectList Projects ={Projects}/>
                    </div>
                    <div className="col sl2 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    console.log('state', state)
    return{
        Projects:state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Dasboard);