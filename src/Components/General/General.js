import React, {Component} from 'react';
import axios from 'axios';

class General extends Component {
    constructor(){
        super();

        this.state = {
            recipes: []
        }

        this.showRec = this.showRec.bind(this)
    }
    
    showRec(){
        axios.get('/api/general')
        .then(res => {
            this.setState({recipes: res.data})
        })
        .catch(err => console.log(err))
    }
    componentDidMount(){
        this.showRec();
    }

    render(){
        return(
            <div>
                <h1>General</h1>
            </div>
        )
    }
}

export default General