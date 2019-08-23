import React, { Component } from 'react'

 class Signin extends Component {
     state={
email:'',
password:''
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
                    <h5 className="grey-text text-darken-3">sign in</h5>
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
                            login
                        </button>
                        </div>

                </form>
                
            </div>
        )
    }
}

export default Signin
