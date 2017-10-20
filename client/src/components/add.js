import React, { Component } from 'react';
import '../stylesheets/_add.css';
import { Modal, Button,FormGroup,FormControl } from 'react-bootstrap';
import axios from 'axios';

class add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      ingredients: ""
    }
  }

  displayModal = () => {
    this.setState({
      display: true,
    });
  }

  closeModal = () => {
    this.setState({
      display: false,
    });
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleIngredients = (event) => {
    this.setState({
      ingredients: event.target.value
    });
  }

  addRecipe = () => {
    axios.post('/insert', {
      name: this.state.name,
      ingredients: this.state.ingredients.split(",")
    })
    
    this.props.handleInsert(this.state.name, this.state.ingredients);

    this.setState({
      name: "",
      ingredients: "",
      display: false
    });
  }

  render() {
    const modalInstance = (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Add a Recipe</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>Recipe</h4>
            <FormGroup>
              <FormControl type="text" placeholder="Recipe Name" value={this.state.name} onChange={this.handleName}/>
            </FormGroup>
            <h4>Ingredients</h4>
            <FormGroup>
              <FormControl type="text" placeholder="Enter Ingredients, Separated, By Commas" value={this.state.ingredients} onChange={this.handleIngredients}/>
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
            <Button bsStyle="primary" onClick={this.addRecipe}>Add Recipe</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );

    return(
      <div>
        <Button bsStyle="primary" onClick={this.displayModal}>Add Recipe</Button>
        {this.state.display && modalInstance}
      </div>
    );
  } 
}

export default add;
