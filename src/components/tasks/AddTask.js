import React, { Fragment } from 'react';

const AddTask = props => {
  return (
    <Fragment>
      <div className="d-flex pt-4 pb-4">
        <input 
          type="text"
          className="form-control mr-3"
          autoFocus
        />
        <button className="btn btn-light">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </Fragment>
  )
}

export default AddTask;