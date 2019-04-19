import React, { Fragment } from 'react';
import TodoItem from './TodoItem';

import './styleTasks.css';
import AddTask from './AddTask';

const MainTasks = props => {
  return (
    <Fragment>
      <div className="todo-list">
        {
          props.tasks.map(task => {
            return <TodoItem key={task.id} tasks={task} />
          })
        }
      </div>
      <AddTask />
    </Fragment>
  )
};

export default MainTasks;