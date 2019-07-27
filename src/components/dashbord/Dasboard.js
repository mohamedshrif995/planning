import React, { Component } from 'react';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
class Dasboard extends Component {
    state = {  }
    render() {
        return (
            <div className="dasboard container">
                <div className="row">
                    <div className="col sl2 m6">
                        <ProjectList />
                    </div>
                    <div className="col sl2 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dasboard;