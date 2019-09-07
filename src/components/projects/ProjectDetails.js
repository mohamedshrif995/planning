import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
const ProkectDetails = (props) => {
    const { project,auth } = props
    if(!auth.uid)return<Redirect to='/Signin' />

    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            {project.title}
                        </span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>posted by {project.authorFirstName}{project.authorLastName}</div>
                        <div>
                            2 nd ,spetember
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>loading project</p>
            </div>
        )
    }
}
const mapStateToProps = (state, owenProps) => {
    const id = owenProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project,
        auth:state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect()
)(ProkectDetails)
