import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [
                {
                    name: 'iPhone 7 Plus',
                    price: '10500000',
                    status: undefined,
                    image: 'https://cdn.tgdd.vn/Products/Images/42/78124/apple-iphone-7-plus-1-400x460-400x460.png'
                },
                {
                    name: 'iPhone 8 Plus',
                    price: '12800000',
                    status: null,
                    image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-64gb-h1-400x460.png'
                },
                {
                    name: 'iPhone 7 Plus',
                    price: '10500000',
                    status: true,
                    image: 'https://cdn.tgdd.vn/Products/Images/42/78124/apple-iphone-7-plus-1-400x460-400x460.png'
                },
                {
                    name: 'iPhone 8 Plus',
                    price: '12800000',
                    status: true,
                    image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-64gb-h1-400x460.png'
                }
            ],
            isActive: true
        };
    }

    onClick = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        const {
            product = [],
            isActive
        } = this.state;

        let elements = product.map((item, index) => {
            let result = null;
            if (isActive) {
                result =
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{item.name}</td>
                        <td>
                            <span className="badge badge-success">{item.price}</span>
                        </td>
                    </tr>
            }
            return result;
        });

        return (
            <div>
                <button type="button" className="btn btn-success" onClick={this.onClick}>
                    Show table: {this.state.isActive ? 'true' : 'false'}
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Model</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
                
                <br />
                <br />
            </div>
        );
    }
}

export default Table;
