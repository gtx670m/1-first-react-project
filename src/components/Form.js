import React, { Component } from 'react';

class Form extends Component {
    onAddProduct = () => {
        alert(this.refs.name.value);
    }
    
    render() {
        return (
            <div classname="col-sm-12">
                <div className="card bg-primary text-white">
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor>label</label>
                            <input type="text"
                                name
                                id
                                className="form-control"
                                placeholder
                                aria-describedby="helpId"
                                ref="name"
                            />
                        </div>
                        <button
                            type="submit"
                            class="btn btn-success"
                            onClick={this.onAddProduct}
                        >Save</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
