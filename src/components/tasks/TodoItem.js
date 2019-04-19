import React, { Fragment } from 'react';

import './styleTasks.css';

const TodoItem = props => {
  const { id, name, completed } = props.tasks;
  const groupId = props.id;
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}
  return (
    <Fragment>
      <div className="todo-item">
        <input 
          type="checkbox" 
          checked={ completed }
          onChange={() => props.changeTask({ groupId, id })}
        />
        <span style={ completed ? completedStyle : null }>{ name }</span>
      </div>
    </Fragment>
  )
}

export default TodoItem;