import React, { Component } from 'react';

class Input extends Component {
	render() {
    return (
      <>
        <div className="d-flex">
          <input type="text"
                 className="form-control"/>
          <button className="btn btn-primary">Add</button>
        </div>
      </>
    )
	}
}

export default Input;