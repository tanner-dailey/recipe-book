import React from 'react';
import{withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';



const Nav = props => {
    return (
        <div>
            {
                props.location.pathname !== '/'
                ? (
                <div>
                    <nav>
                        <Link to='/general'>Home</Link>
                        <Link to='/personal'>My Book</Link>
                        <Link to='/profile'>Profile</Link>
                        <Link to='/'>Logout</Link>
                    </nav>
                </div>
                )
                : null
            }
        </div>
    )
} 

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(withRouter(Nav))