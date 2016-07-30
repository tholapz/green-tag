import React from 'react';
import './App.css';
import Upload from './Upload';
import Product from './Product';
import Share from './Share';

const App = React.createClass({
  getInitialState() {
      return {
        view: 'upload'  
      };
  },
  change(view) {
    this.setState({view});
  },
  render() {
    switch (this.state.view) {
      case 'product':
      return <Product change={this.change}/>;
      case 'share':
      return <Share change={this.change}/>;
      case 'upload':
      default:
      return <Upload change={this.change}/>;
    }
  }
});

export default App;
