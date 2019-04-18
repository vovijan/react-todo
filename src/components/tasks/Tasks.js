import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import TasksHeader from './TasksHeader';

const Tasks = props => {
  const { name } = props.group;
  return (
    <Fragment>
      <TasksHeader name={name} />
      <Link to='/'>
        <i className="fas fa-chevron-circle-left"></i>
        &nbsp;&nbsp;Back, please!
      </Link>
    </Fragment>
  )
};

export default Tasks;