import React, { Component } from 'react';

class Product extends Component {
    // C1: dùng .bind(this) - function thường - gọi {this.<tên function>()}
    // C2: không dùng .bind(this) - arrow function - gọi {this.<tên function>()}
    // C3: không dùng .bind(this) - function thường - gọi {() => this.<tên function>()}
    constructor(props) {
        super(props);
        // this.onClick = this.onClick.bind(this);
    }
    
    onClick = () => {
        const {
            product = {}
        } = this.props;
        alert(`Mua thanh cong ${product.name}!`);
    }
    
    onClick2() {
        console.log("Hello");
    }
    
    onClick3(text) {
        console.log(text);
    }

    render() {
        const {
            product = {},
            children = 'default children'
        } = this.props;
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
                        {/* Không truyền tham số */}
                        {/* Không cần quan tâm 3 cách ở trên */}
                        <button className="btn btn-primary" onClick={this.onClick2}>Buy2</button>
                        {/* Có truyền tham số */}
                        {/* Phải dùng 1 trong 3 cách ở trên */}
                        <button className="btn btn-primary" onClick={() => this.onClick()}>Buy</button>
                        <button className="btn btn-primary" onClick={() => this.onClick3("alo")}>Buy3</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
