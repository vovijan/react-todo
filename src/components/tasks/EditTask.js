import React from 'react';
import { Link } from 'react-router-dom';

import './styleTasks.css';

const EditTask = (props) => {
  const {name} = props.task;
  return (
    <>
      <h1>{name}</h1>
      <Link to='/'>
        <i className="fas fa-chevron-circle-left"></i>
        &nbsp;&nbsp;Back, please!
      </Link>
    </>
  )
}

export default EditTask;