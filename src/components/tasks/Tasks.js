import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import TasksHeader from './TasksHeader';
import MainTasks from './MainTasks';

import './styleTasks.css';

const Tasks = props => {
  const { name, tasks } = props.group;
  return (
    <Fragment>
      <TasksHeader name={name} />
      <MainTasks tasks={tasks} />
      <Link to='/'>
        <i className="fas fa-chevron-circle-left"></i>
        &nbsp;&nbsp;Back, please!
      </Link>
    </Fragment>
  )
};

export default Tasks;