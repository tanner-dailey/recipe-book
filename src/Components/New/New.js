import React, {Component} from 'react';

class New extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            ings: [''],
            steps: ['']
        }
        this.addIng = this.addIng.bind(this)
        this.addStep = this.addStep.bind(this)
        this.ingInput = this.ingInput.bind(this)
        this.stepInput = this.stepInput.bind(this)
        this.titleInput = this.titleInput.bind(this)
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
    
    render(){
        return(
            <div>
                <h3>Title</h3>
                <div>
                    <input type='text' value={this.state.title} onChange={this.titleInput}></input>
                </div>
                <h3>Ingredients</h3>
                {this.state.ings.map((el, i) => 
                    <div key={`ing-${i}`}>
                        <input type='text' value={this.state.ings[i]} onChange={e => this.ingInput(i, e)}></input>
                        <button>Delete</button>
                    </div>
                )}
                <button onClick={() => this.addIng()}>Add Ingredient</button>
                <h3>Steps</h3>
                {this.state.steps.map((el, i) => 
                    <div key={`step-${i}`}>
                        <input type='text' value={this.state.steps[i]} onChange={e => this.stepInput(i, e)}></input>
                        <button>Delete</button>
                    </div>
                )}
                <button onClick={() => this.addStep()}>Add Step</button>
            </div>
        )
    }
}

export default New