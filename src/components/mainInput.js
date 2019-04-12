import React, { Component } from 'react';

class Input extends Component {

	state ={
		value: ''
	};

	handleChange = (event) => {
		this.setState({value: event.target.value})
	};

	handleClick = () => {
		this.props.addGroup(this.state.value);
		this.setState({value: ''})
	};

	render() {
    return (
      <>
        <div className="d-flex">
          <input type="text"
                 className="form-control"
                 onChange={this.handleChange}
                 value={this.state.value}
          />
          <button className="btn btn-primary"
                  onClick={this.handleClick} >Add</button>
        </div>
      </>
    )
	}
}

export default Input;