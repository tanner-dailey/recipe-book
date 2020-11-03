import React from 'react';
import{withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Navbar} from 'react-bootstrap';


const Nav = props => {
    return (
        <div>
            {
                props.location.pathname !== '/'
                ? (
                <div>
                    <Navbar bg="dark" expand="lg">
                        <h1>Recipe Book</h1>
                        <Link to='/general'>Home</Link>
                        <Link to='/personal'>My Book</Link>
                        <Link to='/profile'>Profile</Link>
                        <Link to='/'>Logout</Link>   
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