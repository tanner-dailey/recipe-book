import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class New extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            ings: [''],
            steps: [''],
            recipe_id: ''
        }
        this.addIng = this.addIng.bind(this)
        this.addStep = this.addStep.bind(this)
        this.ingInput = this.ingInput.bind(this)
        this.stepInput = this.stepInput.bind(this)
        this.titleInput = this.titleInput.bind(this)
        this.deleteStep = this.deleteStep.bind(this)
        this.deleteIng = this.deleteIng.bind(this)
        this.submitRecipe = this.submitRecipe.bind(this)
    }

    titleInput(e){
        this.setState({title: e.target.value})
        console.log(this.state.title)
    }

    addIng(){
        const ingArr = [...this.state.ings, '']
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

    submitRecipe(){
        axios.post('/api/recipes', {user_id: this.props.user.user_id, title: this.state.title})
        .then(
            axios.post('/api/recipeId', {title: this.state.title})
            .then((res) => {
                this.setState({recipe_id: res.data[0].recipe_id})
                console.log(this.state.recipe_id)
            })
        )
        
        this.state.ings.map((el, i) => {
            axios.post('/api/newIngs', {ing: el, recipe_id: this.state.recipe_id})
            console.log(this.state.recipe_id)
        })
    }
    
    render(){
        return(
            <div>
                <button onClick={() => this.submitRecipe()}>Submit</button>
                <h3>Title</h3>
                <div>
                    <input type='text' value={this.state.title} onChange={this.titleInput}></input>
                </div>
                <h3>Ingredients</h3>
                {this.state.ings.map((el, i) => 
                    <div key={`ing-${i}`}>
                        <input type='text' value={this.state.ings[i]} onChange={e => this.ingInput(i, e)}></input>
                        <button className='deleteButton' key={`ingDelete-${i}`} onClick={() => this.deleteIng(i)}>Delete</button>
                    </div>
                )}
                <button onClick={() => this.addIng()}>Add Ingredient</button>
                <h3>Steps</h3>
                {this.state.steps.map((el, i) => 
                    <div key={`step-${i}`}>
                        <input type='text' value={this.state.steps[i]} onChange={e => this.stepInput(i, e)}></input>
                        <button className='deleteButton' key={`stepDelete-${i}`} onClick={() => this.deleteStep(i)}>Delete</button>
                    </div>
                )}
                <button onClick={() => this.addStep()}>Add Step</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(New)