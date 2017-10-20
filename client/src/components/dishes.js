import React, { Component } from 'react';
import '../stylesheets/_dishes.css';
import Dish from './dish';
import Add from './add';
import { PanelGroup } from 'react-bootstrap';

class dishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: []
    } 
  }

  componentDidMount() {
    var _this = this;
    fetch('/find')
    .then(function(res) {
      return res.json();
    })
    .then(function(dishes) {
      _this.setState({ 
        dishes: dishes
      });
    });
  }

  render() {
    return (
      <div className="container">
        {
          this.state.dishes.map((dish, idx) => {
            return (
              <PanelGroup>
                <Dish key={idx} 
                idx={idx}
                name={dish.name} 
                ingredients={dish.ingredients} 
                _id={dish._id}
                handleDelete={(i) => this.setState({
                  dishes: this.state.dishes.slice(0, i).concat(this.state.dishes.slice(i + 1))
                })}
                handleEdit = {(_id, name, ingredients) => {
                  this.setState({
                    dishes: this.state.dishes.filter(function(dish){
                      if (dish._id === _id) {
                        dish.name = name;
                        dish.ingredients = ingredients.split(",");
                      }
                      return dish;
                    })
                  })
                }} />
              </PanelGroup>
            )
          })
        }

        <Add 
        handleInsert = {(name, ingredients) => {
          const newDish = {
            name: name,
            ingredients: ingredients.split(",")
          }
          this.setState({
            dishes: this.state.dishes.concat(newDish)
          });
        }} />
      </div>
    );
  }
}

export default dishes;
