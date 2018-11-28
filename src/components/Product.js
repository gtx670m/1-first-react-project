import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card" style={{ width: 400 }}>
                    <img 
                        className="card-img-top" 
                        src="http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" 
                        alt="Card image" 
                    />
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="/" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
