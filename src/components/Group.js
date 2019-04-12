import React, { Component } from 'react';

class Group extends Component {

 	state = {
 		value: this.props.data.name,
	  edit: false,
	  isHover: false
  };

 	handleChange = (event) =>{
 		event.preventDefault();
 	  this.setState({
	    value: event.target.value
    })
	};

 	toggleEdit = () => {
 		if (this.state.edit) {
 			this.props.changeGroup(this.props.data.id, this.state.value)
	  }
 		this.setState({
		  edit: !this.state.edit
	  })
  };

 	toggleMoveVisible = () => {
 		this.setState({
		  isHover: true
	  })
  };

	toggleMoveUnVisible = () => {
		this.setState({
			isHover: false
		})
	};

 	render() {
	  return (
		  <li className="d-flex mb-2" onMouseEnter={this.toggleMoveVisible} onMouseLeave={this.toggleMoveUnVisible}>
			  {
			  	this.state.edit ?
					  <input type="text"
					         className="form-control"
					         value={this.state.value}
					         onChange={this.handleChange}
					         autoFocus/> :
						  <input type="text"
						              className="form-control"
						              value={this.props.data.name}
		                      disabled/>
			  }
			  {
			  	this.state.isHover ?
					  <div className="btn-group" role="group">
						  <button onClick={this.toggleEdit}
						          style={{border: 'none',
							                background: 'transparent',
							                color: 'green'}}>
							  <i className="fas fa-check"></i>
						  </button>
						  <button style={{border: 'none',
							                background: 'transparent',
							                color: 'red'}}>
							  <i className="fas fa-trash"></i>
						  </button>
					  </div> : null
			  }
		  </li>
	  )
  }
}

export default Group;