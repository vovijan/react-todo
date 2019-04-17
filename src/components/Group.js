import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

 	//  Transfer id to global component
 	handleClick = () =>{
 		this.props.deleteGroup(this.props.data.id)
  };

 	//  Transfer to the global state of the new group name
 	toggleEdit = () => {
 		if (this.state.edit) {
 			this.props.changeGroupName(this.props.data.id, this.state.value)
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
							<Link to={`/${this.props.data.name}`}>
								<button className="btn btn-light"
												title="Enter">
									<i className="fas fa-sign-in-alt"></i>
								</button>
							</Link>
						  <button onClick={this.toggleEdit}
						          className="btn btn-light"
						          style={{color: 'green'}}
											title="Edit">
											{
												this.state.edit ? <i className="fas fa-check"></i> : <i className="fas fa-edit"></i>
											}
						  </button>
						  <button onClick={this.handleClick}
							        className="btn btn-light"
						          style={{color: 'red'}}
											title="Delete">
							  <i className="fas fa-trash"></i>
						  </button>
					  </div> : null
			  }
		  </li>
	  )
  }
}

export default Group;