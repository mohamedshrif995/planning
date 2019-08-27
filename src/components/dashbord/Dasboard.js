import React, { Component } from 'react';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
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
    return{
        Projects:state.Project.Projects
    }
}
export default connect(mapStateToProps)(Dasboard);