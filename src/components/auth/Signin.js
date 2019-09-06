import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/AuthActions'
class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    handeleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('this.state', this.state)
        this.props.signIn(this.state)
    }
    render() {
        const { authError } = this.props
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">sign in</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handeleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label >
                        <input type="password" id="password" onChange={this.handeleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink ligthen-1 z-depth-0" onClick={this.handleSubmit}>
                            login
                        </button>
                    </div>
                    <div className="red-text center">

                        {authError ? <p>{authError}</p> : ''}
                    </div>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.Auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)
