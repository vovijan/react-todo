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

	addGroup = (name) => {
		this.setState({data:[...this.state.data, {
				id: Date.now(),
				name: name,
				tasks: []
			}]})
	};

	render() {
		return (
			<div className="container app">
				<h2 style={{textAlign: 'center'}}>Add new Group Task</h2>
				<Input addGroup={this.addGroup} />
				<GroupList data={this.state.data} />
			</div>
		)
	};
}

export default App;
