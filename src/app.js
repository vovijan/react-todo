import React, { Component } from 'react';
import Input from './components/mainInput';
import GroupList from './components/GroupList';

import './app.css';

class App extends Component {

	state = {
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
		this.setState({data:[...this.state.data, {
				id: Date.now(),
				name: name,
				tasks: []
			}]})
	};

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

	render() {
		return (
			<div className="container app">
				<h2 style={{textAlign: 'center'}}>Add new Group Task</h2>
				<Input addGroup={this.addGroup} />
				<GroupList data={this.state.data} changeGroup={this.changeGroupName}/>
			</div>
		)
	};
}

export default App;
