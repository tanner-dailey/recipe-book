import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
    render(){
        return(
            <div>
                <p>{this.props.user.email}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Profile)