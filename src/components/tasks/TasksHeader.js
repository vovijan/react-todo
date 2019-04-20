import React from 'react';

const TasksHeader = props => {
  return (
    <>
      <h1>
        {props.name}
      </h1>
      <p>
        2 of 4 remaining
      </p>
    </>
  )
}

export default TasksHeader;