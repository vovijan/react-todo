import React, { Fragment } from 'react';

const TasksHeader = props => {
  return (
    <Fragment>
      <h1>
        {props.name}
      </h1>
      <p>
        2 of 4 remaining
      </p>
    </Fragment>
  )
}

export default TasksHeader;