import React, { Component } from 'react';

export default class AddTask extends Component {

  state = {
    label: ''
  };

  handleChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.props.groupId, this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <>
        <form 
          className="d-flex pt-4 pb-4"
          onSubmit={this.onSubmit}
        >
          <input 
            type="text"
            className="form-control mr-1"
            onChange={this.handleChange}
            value={this.state.label}
            autoFocus
          />
          <button className="btn btn-light">
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </>
    )
  }
}