import React, {Component} from 'react';
import axios from 'axios';
import './General.scss';
import { Card} from 'react-bootstrap';
import{withRouter, Link} from 'react-router-dom';

class General extends Component {
    constructor(){
        super();

        this.state = {
            recipes: []
        }

        // axios.defaults.baseURL = ''
    }
    
    async componentDidMount(){
       const res = await axios.get('/api/general')
       this.setState({recipes: res.data})
        console.log(this.state.recipes)
    }

    render(){
      return(
        <div className='container'>
          {this.state.recipes.map(el => (
            <Card className='col-sm-3'>
              <Card.Img variant="top" src="https://via.placeholder.com/100" />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Link to={`/recipe/:${el.recipe_id}`}>Go To Recipe</Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      )
    }
}

export default withRouter(General)