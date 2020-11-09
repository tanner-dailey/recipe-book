import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card} from 'react-bootstrap';
import{withRouter, Link} from 'react-router-dom';
import axios from 'axios';

class Personal extends Component {
    constructor(){
        super();

        this.state = {
            recipes: []
        }

    }

    async componentDidMount(){
        const user_id = this.props.user.user_id
        console.log(user_id)
        const res = await axios.post('/api/myBook', {user_id})
       this.setState({recipes: res.data})
        console.log(this.state.recipes)
    }

    render(){
      return(
        <div className='container'>
          <button><Link to={`/new`}>Add New Recipe</Link></button>
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

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(withRouter(Personal))