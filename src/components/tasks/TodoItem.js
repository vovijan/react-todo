import React from 'react';
import { Link } from 'react-router-dom';

import './styleTasks.css';

const TodoItem = props => {
  const { name, completed } = props.tasks;
  const groupId = props.groupId;
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}
  return (
    <div className="todo-item">
      <div>
        <input 
          type="checkbox"
          checked={ completed }
          onChange={() => props.changeTask( groupId, props.tasks.id )}
        />
        <Link to={`/${props.groupName}/${name}`}>
          <span style={ completed ? completedStyle : null }>{ name }</span>
        </Link>
      </div>
      <button 
        type="button" 
        className="btn btn-light"
        onClick={() => props.deleteTask(groupId, props.tasks.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}

export default TodoItem;