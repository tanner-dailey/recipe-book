import React from 'react';
import{withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Navbar} from 'react-bootstrap';
import './Nav.scss'


const Nav = props => {
    return (
        <div>
            {
                props.location.pathname !== '/'
                ? (
                <div>
                    <Navbar className='nav' bg="dark" expand="lg">
                        <h1>Recipe Book</h1>
                        <div className='links'>
                        <Link className='ind-link' to='/general'>Home</Link>
                        <Link className='ind-link' to='/personal'>My Book</Link>
                        <Link className='ind-link' to='/profile'>Profile</Link>
                        <Link className='ind-link' to='/'>Logout</Link>  
                        </div> 
                    </Navbar>
                    {/* <nav>
                        <Link to='/general'>Home</Link>
                        <Link to='/personal'>My Book</Link>
                        <Link to='/profile'>Profile</Link>
                        <Link to='/'>Logout</Link>
                    </nav> */}
                </div>
                )
                : null
            }
        </div>
    )
} 

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(withRouter(Nav))