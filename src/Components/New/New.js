import React, {Component} from 'react';

class New extends Component {
    constructor(){
        super();

        this.state = {
            recipe: {
                title: '',
                ings: [''],
                steps: ['']
            }
        }
        this.addIng = this.addIng.bind(this)
        this.addStep = this.addStep.bind(this)
        this.ingInput = this.ingInput.bind(this)
        this.stepInput = this.stepInput.bind(this)
    }

    addIng = () => {
        const ingArr = [...this.state.recipe.ings, '']
        this.setState(prevState => ({
            recipe: {
                ...prevState.recipe,
                ings: ingArr
            }
        }))
        console.log(this.state.recipe.ings)
    }

    ingInput(e){
        this.setState(prevState => ({
            recipe: {
                ...prevState.recipe,
                ings: e.target.value
            }
        }))
    }

    stepInput(e){
        this.setState(prevState => ({
            recipe: {
                ...prevState.recipe,
                steps: e.target.value
            }
        }))
    }

    addStep = () => {
        const stepArr = [...this.state.recipe.steps, '']
        this.setState(prevState => ({
            recipe: {
                ...prevState.recipe,
                steps: stepArr
            }
        }))
        console.log(this.state.recipe.steps)
    }

    render(){
        return(
            <div>
                <h3>Title</h3>
                <form>
                    <input type='text' />
                </form>
                <h3>Ingredients</h3>
                {this.state.recipe.ings.map((el, i) => 
                        <form>
                            <input type='text' defaultValue={el} key={i} onChange={() => this.ingInput}></input>
                            <button>Delete</button>
                        </form>
                    )}
                <button onClick={() => this.addIng()}>Add Ingredient</button>
                <h3>Steps</h3>
                <form>
                {this.state.recipe.steps.map((el, i) => 
                        <form>
                            <input type='text' defaultValue={el} key={i} onChange={() => this.stepInput}></input>
                            <button>Delete</button>
                        </form>
                    )}
                </form>
                <button onClick={() => this.addStep()}>Add Step</button>
            </div>
        )
    }
}

export default New