import React, {Component} from 'react';
import axios from 'axios';
import {getUser} from '../../ducks/reducer'
import { connect } from 'react-redux';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleLogin = () => {
        const {email, password} = this.state

        axios.post('/api/login', {email, password})
      .then(res => {
        this.props.getUser(res.data)
        this.props.history.push('/general')
      })
      .catch(err => console.log(err))
    }

    handleRegister = () => {
        const {email, password} = this.state

        axios.post('/api/register', {email, password})
        .then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/general')
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                <h1>Recipe Book</h1>
                <div className='authInput'>
                <p>Email:</p>
                    <input 
                        value={this.state.email}
                        name='email'
                        onChange={(e) => this.handleInput(e)}
                    />
                </div>
                <div className='authInput'>
                    <p>Password:</p>
                    <input 
                        type='password'
                        value={this.state.password}
                        name='password'
                        onChange={(e) => this.handleInput(e)}
                    />
                </div>
                <div className='authButtons'>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleRegister}>Register</button>
                </div>
                <p>Forgot Password?</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Auth)