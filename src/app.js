import React, { Component } from 'react';
import GroupsContainer from './containers/GroupsContainer';
import InputContainer from './containers/InputContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TasksContainer from './containers/TasksContainer';
import EditTaskConteiner from './containers/EditTaskConteiner';

import './app.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container app">
					<Route path='/' exact component={InputContainer} />
					<Route path='/' exact component={GroupsContainer} />
					<Route path='/:groupName' exact component={TasksContainer} />
					<Route path='/:groupName/:taskName/:edit' exact component={EditTaskConteiner} />
					{/*<GroupList data={this.state.data} changeGroup={this.changeGroupName} deleteGroup={this.deleteGroup} />*/}			
				</div>
			</Router>
		)
	};
}

export default App;
