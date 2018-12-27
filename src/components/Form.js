import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div classname="col-sm-12">
                <div className="form-group">
                    <label htmlFor>label</label>
                    <input type="text" name id className="form-control" placeholder aria-describedby="helpId" />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </div>            
        );
    }
}

export default Form;
