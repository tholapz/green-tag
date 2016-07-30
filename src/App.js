import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './Upload';
import Product from './Product';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default Product;
// export default Upload;
// export default App;
