import React, { Fragment } from 'react';

import './styleTasks.css';

const TodoItem = props => {
  const { name, completed } = props.tasks;
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
        />
        <span style={ completed ? completedStyle : null }>{ name }</span>
      </div>
    </Fragment>
  )
}

export default TodoItem;