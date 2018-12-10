import React, { Component } from 'react';

class Product extends Component {
    render() {
        const {product, children} = this.props;
        return (
            <div className="col-sm-6">
                <div className="card" style={{ width: 400 }}>
                    <img 
                        className="card-img-top" 
                        src={product.image} 
                        alt="Card"
                    />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price} VND</p>
                        <p className="card-text">{children}</p>
                        <a href="/" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
