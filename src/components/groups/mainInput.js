import React, { Component } from 'react';

class Input extends Component {

	state = {
		value: ''
	};

	handleChange = (event) => {
		this.setState({ 
      value: event.target.value
    });
	};

	onSubmit = (event) => {
    event.preventDefault();
		this.props.addGroup(this.state.value);
		this.setState({ 
      value: ''
    });
	};

	render() {
    return (
      <>
        <h2 style={{textAlign: 'center'}}>Add new Group Task</h2>
        <form
          style={{ marginBottom: 50 }}
          className="d-flex" 
          onSubmit={this.onSubmit}
        >
          <input type="text"
                 className="form-control mr-3"
                 onChange={this.handleChange}
                 value={this.state.value}
                 autoFocus
          />
          <button className="btn btn-primary">
	          <i className="fas fa-plus"></i>
          </button>
        </form>
      </>
    )
	}
}

export default Input;