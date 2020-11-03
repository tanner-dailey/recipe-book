import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <p>{this.props.user.email}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Profile)