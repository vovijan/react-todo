import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));

/*class App {
    constructor() {
        this.state = {
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
                }
            ]
        }
    }

    addGroup(name) {
        this.setState([...this.state.data, {
            id: Date.now(),
            name: name,
            tasks: []
        }])
    }

    return (
<GroupInput addGroup={this.addGroup} />
<GroupList data={this.state.data} />
)
}

class GroupList {

    return (
<ul>
{this.props.data.map(group => (
    <Group data={group} />
))}
</ul>
)
}

class Group {
    return (
<div>
<div>{this.props.data.name}</div>
</div>
)
}

class GroupInput = () => {
    constructor() {
        this.state = {
            value: ''
        }
    }

    function handleChange(event) {
        this.setState({value: event.target.value})
    }

    function handleClick() {
        this.props.addGroup(this.state.value)
    }

    return (
        <input onChange={handleChange} />
        <button onCLick={this.handleClick}></button>
)
}
*/