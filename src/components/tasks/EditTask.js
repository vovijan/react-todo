import React, { Component } from 'react';

import './styleTasks.css';

export default class EditTask extends Component {
  state = {
    value: this.props.task.name
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.renameTask(this.props.groupName, this.state.value);
  }
  render() {
    return (
      <>
        <h3 className="title__center">
          Task of group:&nbsp;&nbsp;
          <span className="title__text">{this.props.groupName}!!!</span>
        </h3>
        <form 
          className="form"
          onSubmit={this.onSubmit}
        >
          <input 
            type="text"
            className="task__input"
            value={this.state.value}
            onChange={(e) => this.setState({
              value: e.target.value
            })}
          />
          <button 
            type="button" 
            className="btn btn-lg"
          >
            <i className="fas fa-save"></i>
          </button>
        </form>
      </>
    )
  }
}