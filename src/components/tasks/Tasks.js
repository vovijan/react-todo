import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Tasks = (props) => {
  return (
    <Fragment>
      <h1>{props.match.params.id}</h1>
      <Link to='/'>
        <i className="fas fa-chevron-circle-left"></i>
        &nbsp;&nbsp;Back, please!
      </Link>
    </Fragment>
  )
};

export default withRouter(Tasks);