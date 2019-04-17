import React, { Component } from 'react';
//import Input from './components/mainInput';
//import GroupList from './components/GroupList';
import GroupsContainer from './containers/GroupsContainer';
import InputContainer from './containers/InputContainer';
import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import TasksContainer from './containers/TasksContainer';

class App extends Component {

/*	state = {
		data: [
			{
				id: 1,
				name: 'Work',
				tasks: [
					{
						id: 2,
						name: 'Finish project',
						completed: false
					}
				]
			},
			{
				id: 2,
				name: 'Project',
				tasks: [
					{
						id: 3,
						name: 'Finish project',
						completed: false
					}
				]
			}
		]
	};

	//  Adding a new group
	addGroup = (name) => {
		this.setState({
				data:[...this.state.data, {
					id: Date.now(),
					name: name,
					tasks: []
			}]})
	};
*/
/*	//  Delete group
	deleteGroup = (id) => {
		this.setState({
			data: this.state.data.filter(item => {
				return item.id !== id;
			})
		})
	};
	*/
/*
	//  Replacing the name in the group name when editing
	changeGroupName = (id, name) => {
		this.setState({
			data: this.state.data.map(group => {
				if (group.id === id) {
					group.name = name;
				}
				return group
			})
		})
	};
*/
	render() {
		return (
			<Router>
				<div className="container app">
					<Route path='/:id' component={TasksContainer} />
					<h2 style={{textAlign: 'center'}}>Add new Group Task</h2>
					<InputContainer />
					{/*<GroupList data={this.state.data} changeGroup={this.changeGroupName} deleteGroup={this.deleteGroup} />*/}
					<GroupsContainer />
					
				</div>
			</Router>
		)
	};
}

export default App;
