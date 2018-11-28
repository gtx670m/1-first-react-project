import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import Product from './components/Product';

class App extends Component {
  render() {
      const a = 'Quang';
      const str = `Hello! I'm ${a}`;
    return (
      <div className="App">
        <Header/>
        <div className="row">
            <Product />
            <Product />
            
        </div>
        <div className="row">
            <Product />
        </div>
        <br/>
        <br/>
        <h1>
            {str}
        </h1>
      </div>
    );
  }
}

export default App;
