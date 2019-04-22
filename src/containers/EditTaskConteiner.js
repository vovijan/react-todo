import React from 'react';
import EditTask from '../components/tasks/EditTask';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const selectedGroup = ownProps.match.params.groupName;
  const selectedTask  = ownProps.match.params.taskName;

  const task = state.data
                .find(group => group.name === selectedGroup).tasks
                .find(task => task.name === selectedTask);
  return {
    task
  };
};

const mapDispatchToProps = dispatch => ({

});

const EditTaskContainer = ({task}) => {
  return <EditTask task={task} />
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(EditTaskContainer)