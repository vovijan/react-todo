import React from 'react';

import './styleTasks.css'

const TasksHeader = props => {

  const doneTasks = props.tasks.filter(task => task.completed).length;
  const allTasks  = props.tasks.length - doneTasks;

  return (
    <>
      <h1>
        {props.name}
      </h1>
      <p>
        <span className="p__text-done">{ doneTasks }</span>&nbsp;
        tasks are done of &nbsp;
        <span className="p__text-done">{ allTasks }</span>&nbsp;
        not completed.
      </p>
    </>
  )
}

export default TasksHeader;