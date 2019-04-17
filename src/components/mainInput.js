import React, { Component } from 'react';

class Input extends Component {

	state = {
		value: ''
	};

	handleChange = (event) => {
		this.setState({ value: event.target.value })
	};

	handleClick = () => {
		this.props.addGroup(this.state.value);
		this.setState({ value: '' })
	};

	render() {
    return (
      <>
        <h2 style={{textAlign: 'center'}}>Add new Group Task</h2>
        <div className="d-flex">
          <input type="text"
                 className="form-control mr-3"
                 onChange={this.handleChange}
                 value={this.state.value}
                 autoFocus
          />
          <button className="btn btn-primary"
                  onClick={this.handleClick} >
	          <i className="fas fa-plus"></i>
          </button>
        </div>
      </>
    )
	}
}

export default Input;