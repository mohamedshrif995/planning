import React, { Component } from 'react'
import {connect}from 'react-redux'
// import { CreateProjectActons} from '../../store/actions/CreateProjectActons'
import {CreateProjectActions} from '../../store/actions/CreateProjectActions'
import {Redirect} from 'react-router-dom'
class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handeleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log('this.state', this.state)
        this.props.createProjects(this.state)
        this.props.history.push('/')
    }
    render() {
        const {auth}=this.props
        if(!auth.uid)return<Redirect to='/Signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">create new project</h5> 
                    <div className="input-field">
                        <label htmlFor="title">title</label>
                        <input type="text" id="title" onChange={this.handeleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">content</label >
                        <textarea id="content" className="materialize-textarea" onChange={this.handeleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink ligthen-1 z-depth-0" onClick={this.handleSubmit}>
                            create new project
                        </button>
                    </div>

                </form>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
    createProjects:(project)=>dispatch(CreateProjectActions(project))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
