import React, { Component } from 'react';
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
  onClick() {
      alert('Ok!');
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
              status: undefined,
              image: 'https://cdn.tgdd.vn/Products/Images/42/78124/apple-iphone-7-plus-1-400x460-400x460.png'
          }, {
              name: 'iPhone 8 Plus',
              price: '12800000',
              status: null,
              image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-64gb-h1-400x460.png'
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
            <Product product={product[0]}>this is children</Product>
            <Product product={product[1]}>another children</Product>
        </div>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.onClick}>
            Click me!
        </button>
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
