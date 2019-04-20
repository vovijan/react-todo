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
    <>
      <div className="todo-item">
        <input 
          type="checkbox" 
          checked={ completed }
          onChange={() => props.changeTask( groupId, props.tasks.id )}
        />
        <span style={ completed ? completedStyle : null }>{ name }</span>
      </div>
    </>
  )
}

export default TodoItem;