import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import Product from './components/Product';

class App extends Component {
  render() {
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
      </div>
    );
  }
}

export default App;
