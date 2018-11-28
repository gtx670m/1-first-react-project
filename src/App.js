import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import Product from './components/Product';

class App extends Component {
  checkAge(age) {
    return age > 18 ? 'Is over 18' : 'Is under 18';    
  }
  showPerson(show, users) {
    return (
        show ? (
            users.map((user, index) => {
                return (
                    <h3 key={index}>{user.name} {this.checkAge(user.age)}</h3>
                )
            })
        ) : ''
    )  
  }
  render() {
      const display = true;
      const a = 'Quang';
      const c = 1;
      const d = 2;
      const str = `I'm ${a}`;
      const product = [
          {
              name: 'iPhone 7 Plus',
              price: '10500000',
              status: undefined
          }, {
              name: 'iPhone 8 Plus',
              price: '12800000',
              status: null
          },
      ];
      const [
          { name: productName1 = '',
              price: productPrice1 = 0,
              status: productStatus1 = 'out of stock' },
          { name: productName2 = '',
              price: productPrice2 = 0,
              status: productStatus2 = 'out of stock' },
      ] = product;
      class Person {
          constructor(name, age) {
              this.age = age;
              this.name = name;
          }
      }
      const Teo = new Person('Teo', 25);
      const Ti = new Person('Ti', 20);
      const Tun = new Person('Tun', 17);
      const users = [Teo, Ti, Tun];

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
            Hello! {str}
        </h1>
        <div>
            c = {c} <br/>
            d = {d} <br/>
            c + d = {c + d}
        </div>
        <h2>
            name: {productName1} <br/>
            price: {productPrice1} <br/>
            status: {productStatus1}
            <br/><br/>
            name: {productName2} <br/>
            price: {productPrice2} <br/>
            status: {productStatus2}
        </h2>
        <br/><br/>
        {this.showPerson(display, users)}
      </div>
    );
  }
}

export default App;
