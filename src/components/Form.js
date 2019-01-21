import React, { Component } from 'react';

class Form extends Component {
    onAddProduct = () => {
        alert(this.refs.name.value);
        console.log(this.refs.name.value);
        console.log(this.refs.button);
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="card bg-primary text-white">
                    <div className="card-body">
                        <div className="form-group">
                            <label>label</label>
                            <input type="text"
                            className="form-control"
                            aria-describedby="helpId"
                            ref="name"
                            />
                        </div>
                        <button 
                        type="submit" 
                        className="btn btn-success" 
                        onClick={this.onAddProduct}
                        ref="button"
                        >Save
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Form;
