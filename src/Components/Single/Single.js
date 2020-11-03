import React, {Component} from 'react';
import axios from 'axios';

class Single extends Component {
    constructor(){
        super();
        
        this.state = {
            id: '',
            title: '',
            ings: [],
            steps: [],
            isEditing: false
        }
    }
    async componentDidMount(){
        const url = this.props.location.pathname;
        const index = url.lastIndexOf('/')
        const id = url.substring(index + 2)
        console.log(id)
        this.setState({id: id})
        const res = await axios.post('/api/single', {id}) 
        this.setState({title: res.data.title, ings: res.data.ings, steps: res.data.steps})
    }

    toggleEdit = () => {
        if(this.state.isEditing === false){
            this.setState({isEditing: true})
        } else {
            this.setState({isEditing: false})
        }
    }

    render(){
        console.log(this.state)
        return(
            <div>
                {
                    this.state.isEditing !== true
                    ? (
                    <div>
                        <h1>{this.state.title}</h1>
                        <button onClick={() => this.toggleEdit()}>Edit Recipe</button>
                    <h3>Ingredients</h3>
                    <ul>
                        {this.state.ings.map((el, key) => 
                            <li key={key}>{el}</li>
                        )}
                    </ul>
                    <h3>Instructions</h3> 
                    <ol>
                        {this.state.steps.map((el, key) => 
                            <li key={key}>{el}</li>
                        )}
                    </ol>
                    </div>)
                    : (
                        <div>
                            <h1>{this.state.title}</h1>
                            <button onClick={() => this.toggleEdit()}>Edit Recipe</button>
                        <h3>Ingredients</h3>
                        <ul>
                            {this.state.ings.map((el, key) => 
                                <li key={key}>{el}</li>
                            )}
                        </ul>
                        <input></input>
                        <h3>Instructions</h3> 
                        <ol>
                            {this.state.steps.map((el, key) => 
                                <li key={key}>{el}</li>
                            )}
                        </ol>
                        <input></input>
                        </div>)
                    }
            </div>
        )
    }
}

export default Single