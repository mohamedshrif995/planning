import React, { Component } from 'react'

 class SignUp extends Component {
     state={
email:'',
password:'',
firstName:'',
lastNmae:''
     }
     handeleChange=(e)=>{
         this.setState({
             [e.target.id]:e.target.value
         })
     }
     handleSubmit=(e)=>{
         e.preventDefault()
         console.log('this.state', this.state)
     }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">sign up</h5>
                    <div className="input-field">
                        <label htmlFor="email">FirstName</label>
                        <input type="text" id="FirstName"onChange={this.handeleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">LastNmae</label>
                        <input type="text" id="LastNmae"onChange={this.handeleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"onChange={this.handeleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label >
                        <input type="password" id="password" onChange={this.handeleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink ligthen-1 z-depth-0" onClick={this.handleSubmit}>
                            sign up
                        </button>
                        </div>

                </form>
                
            </div>
        )
    }
}

export default SignUp
