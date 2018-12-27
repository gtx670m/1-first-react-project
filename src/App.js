import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
import Product from './components/Product';
import { product, Person, checkAge, showPerson, onClick } from './data';
import Form from './components/Form';

class App extends Component {
    render() {
        const display = true;
        const a = 'Quang';
        const c = 1;
        const d = 2;
        const str = `I'm ${a}`;
        const [
            { name: productName1 = '',
                price: productPrice1 = 0,
                status: productStatus1 = 'out of stock' },
            { name: productName2 = '',
                price: productPrice2 = 0,
                status: productStatus2 = 'out of stock' },
        ] = product;
        const Teo = new Person('Teo', 25);
        const Ti = new Person('Ti', 20);
        const Tun = new Person('Tun', 17);
        const users = [Teo, Ti, Tun];

        return (
            <div className="App">
                <Header/>
                <Form />
                <div className="row">
                    <Product product={product[0]}>this is children</Product>
                    <Product product={product[1]}>another children</Product>
                </div>
                <br/>
                <button type="button" className="btn btn-warning" onClick={onClick}>
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
                {showPerson(display, users)}
            </div>
        );
    }
}

export default App;
