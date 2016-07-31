import React from 'react';
import './App.css';
import Upload from './Upload';
import Product from './Product';
import Share from './Share';
import logo from './logo.png';

const App = React.createClass({
  getInitialState() {
      return {
        view: 'upload',
        detected: false
      };
  },
  change(view, newDetected) {
    const detected = newDetected || this.state.detected;
    this.setState({view,detected});
  },
  renderContent() {
    switch (this.state.view) {
      case 'product':
      return <Product {...this.state} change={this.change}/>;
      case 'share':
      return <Share {...this.state} change={this.change}/>;
      case 'upload':
      default:
      return <Upload {...this.state} change={this.change}/>;
    }
  },
  render() {
    return (
      <div>
      <div className="header"><img src={logo}/></div>
      {this.renderContent()}
      </div>
    );
  }
});

export default App;
