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
            return <TodoItem 
                    key={task.id} 
                    groupId={props.groupId} 
                    tasks={task} 
                    changeTask={props.changeTask} 
                  />
          })
        }
      </div>
      <AddTask />
    </Fragment>
  )
};

export default MainTasks;