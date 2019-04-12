import React, { Component } from 'react';
import Group from '../group-list';

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

    addGroup(name) {
        this.setState([...this.state.data, {
            id: Date.now(),
            name: name,
            tasks: []
        }])
    }

    render() {
        return (
            <div className="container app">
                <Group addGroup={this.addGroup} data={this.state.data.name} />
            </div>
        )
    };
}

export default App;
