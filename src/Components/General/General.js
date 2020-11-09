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
    }
    
    async componentDidMount(){
      const user_id = '1';
      const res = await axios.post('/api/general', {user_id})
     this.setState({recipes: res.data})
      console.log(this.state.recipes)
    }

    render(){
      return(
        <div className='general'>
        <div className='container'>
          {this.state.recipes.map(el => (
            <Card className='col-sm-3'>
              <Card.Img className='rec-img' variant="top" src="https://rec-book-images.s3-us-west-1.amazonaws.com/recipe-default.jpg" />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Link to={`/recipe/:${el.recipe_id}`}>Go To Recipe</Link>
              </Card.Body>
            </Card>
          ))}
        </div>
        </div>
      )
    }
}

export default withRouter(General)