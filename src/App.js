import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header'
import Product from './components/Product';
import Form from './components/Form';
import Table from './components/Table';
import Clock from './components/Clock';

import {
    product,
    showPerson,
    onClick,
    display,
    c,
    d,
    str,
    users
} from './data';


class App extends Component {
    render() {
        const [
            { name: productName1 = '',
                price: productPrice1 = 0,
                status: productStatus1 = 'out of stock' },
            { name: productName2 = '',
                price: productPrice2 = 0,
                status: productStatus2 = 'out of stock' },
        ] = product;

        return (
            <div className="App">
                <Header />
                <Table />
                <Form />
                <Clock />
                <div className="row">
                    <Product product={product[0]}>this is children</Product>
                    <Product product={product[1]}>another children</Product>
                </div>
                <br />
                <button type="button" className="btn btn-warning" onClick={onClick}>
                    Click me!
                </button>
                <br />
                <h1>
                    Hello! {str}
                </h1>
                <div>
                    c = {c} <br />
                    d = {d} <br />
                    c + d = {c + d}
                </div>
                <h2>
                    name: {productName1} <br />
                    price: {productPrice1} <br />
                    status: {productStatus1}
                    <br /><br />
                    name: {productName2} <br />
                    price: {productPrice2} <br />
                    status: {productStatus2}
                </h2>
                <br /><br />
                {showPerson(display, users)}
            </div>
        );
    }
}

export default App;
