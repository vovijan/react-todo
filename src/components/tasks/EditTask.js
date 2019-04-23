import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styleTasks.css';

export default class EditTask extends Component {
  state = {
    value: this.props.task.name
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      value: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.renameTask(this.props.groupName, this.props.task.id, this.state.value);
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
        >
          <input 
            type="text"
            className="task__input"
            value={this.state.value}
            onChange={this.handleChange}
          />
          
            <button 
              className="btn btn-lg"
              onClick={this.handleClick}
            >
              <Link to={`/${this.props.groupName}`}>
              <i className="fas fa-save"></i>
              </Link>
              
            </button>
          
          
        </form>
        
      </>
    )
  }
}