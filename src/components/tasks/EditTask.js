import React from 'react';
import { Link } from 'react-router-dom';

import './styleTasks.css';

const EditTask = (props) => {
  return (
    <>
      <h1>HI BRO!</h1>
      <Link to='/'>
        <i className="fas fa-chevron-circle-left"></i>
        &nbsp;&nbsp;Back, please!
      </Link>
    </>
  )
}

export default EditTask;