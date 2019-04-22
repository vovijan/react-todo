import React, { Component } from 'react';

import './styleTasks.css';

export default class EditTask extends Component {
  state = {
    value: this.props.task.name
  }
  onSubmit = () => {

  }
  render() {
    return (
      <>
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