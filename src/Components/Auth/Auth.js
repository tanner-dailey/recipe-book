import React, {Component} from 'react';
import axios from 'axios';
import {getUser} from '../../ducks/reducer'
import { connect } from 'react-redux';
import { Card} from 'react-bootstrap';
import './Auth.scss'

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

    sendWelcome = () => {
        const{email, password} = this.state

        axios.post('/api/email', {email, password})
        .catch(err => console.log(err))
    }

    handleRegister = () => {
        const {email, password} = this.state

        axios.post('/api/register', {email, password})
        .then(res => {
            this.sendWelcome()
            this.props.getUser(res.data)
            this.props.history.push('/general')
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div className='auth'>
                <h1>Recipe Book</h1>
                <Card className='auth-card'>
                <Card.Body>
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
                </Card.Body>
            </Card>
            </div>
            // <div>
            //     <h1>Recipe Book</h1>
            //     <div className='authInput'>
            //     <p>Email:</p>
            //         <input 
            //             value={this.state.email}
            //             name='email'
            //             onChange={(e) => this.handleInput(e)}
            //         />
            //     </div>
            //     <div className='authInput'>
            //         <p>Password:</p>
            //         <input 
            //             type='password'
            //             value={this.state.password}
            //             name='password'
            //             onChange={(e) => this.handleInput(e)}
            //         />
            //     </div>
            //     <div className='authButtons'>
            //         <button onClick={this.handleLogin}>Login</button>
            //         <button onClick={this.handleRegister}>Register</button>
            //     </div>
            //     <p>Forgot Password?</p>
            // </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Auth)