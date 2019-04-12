import React, { Component } from 'react';

 class Group extends Component {
 	render() {
	  return (
		  <li key={Date.now()} className="d-flex mb-2">
			  <input type="text"
			         style={{border: 'none'}}
			         className="form-control"
			         value={this.props.data.name}/>
			  <button style={{border: 'none',
				                background: 'transparent',
				                color: 'green'}}>
				  <i className="fas fa-check"></i>
			  </button>
			  <button style={{border: 'none',
											  background: 'transparent',
											  color: 'red'}}>
				  <i className="fas fa-trash"></i>
			  </button>
			  <hr/>
		  </li>
	  )
  }
}

export default Group;