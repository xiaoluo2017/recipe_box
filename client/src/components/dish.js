import React, { Component } from 'react';
import '../stylesheets/_dish.css';
import axios from 'axios';
import { Modal, Button, FormGroup, FormControl, ListGroup, ListGroupItem, ButtonToolbar, 
  Panel, Accordion } from 'react-bootstrap';

class dish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      name: "",
      ingredients: ""
    }
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

  displayModal = () => {
    this.setState({
      display: true,
      name: this.props.name,
      ingredients: this.props.ingredients
    });
  }

  editDish = () => {
    axios.post('/edit', {
      _id: this.props._id,
      name: this.state.name,
      ingredients: this.state.ingredients.split(",")
    });
    
    var _this = this;
    this.props.handleEdit(_this.props._id, _this.state.name, _this.state.ingredients);

    this.setState({
      name: "",
      ingredients: "",
      display: false
    });
  }

  deleteDish = () => {
    var _this = this;
    this.props.handleDelete(_this.props.idx);
    console.log(_this.props.idx);
    axios.post('/delete', {
      _id: this.props._id
    })
  }

  render() {
    const modalInstance = (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Edit a Recipe</Modal.Title>
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
            <Button bsStyle="primary" onClick={this.editDish}>Edit Recipe</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );

    const dishDetail = (
      <div>
        <h4 className="text-center">Ingredients</h4>
        <hr />
        <ListGroup>
          {this.props.ingredients.map((ingredient, idx) => {
              return (
                <ListGroupItem className="text-center" key={idx}>{ingredient}</ListGroupItem>
              )
            })
          }
        </ListGroup>
        <ButtonToolbar>
          <Button bsStyle="danger" onClick={this.deleteDish}>Delete</Button>
          <Button onClick={this.displayModal}>Edit</Button>
        </ButtonToolbar>
      </div>
    );

    return (
      <Panel collapsible bsStyle="info" header={this.props.name}>
        {dishDetail}
        {this.state.display && modalInstance}
      </Panel>
    );
  }
}

export default dish;
