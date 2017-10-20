import React, { Component } from 'react';
import '../stylesheets/_app.css';
import Dishes from './dishes';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Dishes />
      </div>
    );
  }
}

export default App;
