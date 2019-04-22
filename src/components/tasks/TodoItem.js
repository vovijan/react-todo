import React from 'react';

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
        <span style={ completed ? completedStyle : null }>{ name }</span>
      </div>
      <button 
        type="button" 
        className="btn btn-light"
        onClick={() => props.deleteTask(groupId, props.tasks.id)}
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  )
}

export default TodoItem;