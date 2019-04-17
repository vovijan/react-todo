import React, { Fragment } from 'react';

const Tasks = (props) => {
  return (
    <Fragment>
      <h1>{props.data.name}</h1>
    </Fragment>
  )
}

export default Tasks; 