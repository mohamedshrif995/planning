import React, { Component } from 'react'

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
        console.log('this.state', this.state)
    }
    render() {
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

export default CreateProject
