import React, {Component} from 'react';
import axios from 'axios';
import './single.scss';

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
        this.deleteStep = this.deleteStep.bind(this)
        this.deleteIng = this.deleteIng.bind(this)
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

    addIng(){
        const ingArr = [...this.state.ings, '']
        axios.put('/api/newIngs', {ing: '', recipe_id: this.state.id})
        this.setState({ings: ingArr})
    }

    ingInput(i, e){
        const ingArr = [...this.state.ings]
        ingArr[i] = e.target.value
        this.setState({ings: ingArr})
        console.log(this.state.ings)
    }

    deleteIng(i){
        // console.log(i)
        let ingArr = [...this.state.ings]
        ingArr.splice(i, 1)
        this.setState({ings: ingArr})
        console.log(ingArr)
        console.log('test')
    }

    stepInput(i, e){
        const stepArr = [...this.state.steps]
        stepArr[i] = e.target.value
        this.setState({steps: stepArr})
        console.log(this.state.steps)
    }

    addStep(){
        const stepArr = [...this.state.steps, '']
        this.setState({steps: stepArr})
    };

    deleteStep(i){
        // console.log(i)
        let stepArr = [...this.state.steps]
        stepArr.splice(i, 1)
        this.setState({steps: stepArr})
        console.log(stepArr)
        console.log('test')
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
                            {this.state.ings.map((el, i) => 
                                <li key={`ings-${i}`}><input type='text' value={this.state.ings[i]} onChange={e => this.ingInput(i, e)}></input><button className='deleteButton' key={`ingDelete-${i}`} onClick={() => this.deleteIng(i)}>Delete</button></li>
                                
                            )}
                        </ul>
                        <button onClick={() => this.addIng()}>Add Ingredient</button>
                        <h3>Instructions</h3> 
                        <ol>
                            {this.state.steps.map((el, i) => 
                                <li key={`steps-${i}`}><input type='text' value={this.state.steps[i]} onChange={e => this.stepInput(i, e)}></input><button className='deleteButton' key={`stepDelete-${i}`} onClick={() => this.deleteStep(i)}>Delete</button></li>
                            )}
                        </ol>
                        <button onClick={() => this.addStep()}>Add Step</button>
                        </div>)
                    }
            </div>
        )
    }
}

export default Single