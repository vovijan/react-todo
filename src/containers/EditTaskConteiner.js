import React from 'react';
import EditTask from '../components/tasks/EditTask';
import { connect } from 'react-redux';
import { renameTask } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
  const selectedGroup = ownProps.match.params.groupName;
  const selectedTask  = ownProps.match.params.taskName;
  const task = state.data
                .find(group => group.name === selectedGroup).tasks
                .find(task => task.name === selectedTask);
  return {
    task, selectedGroup
  };
};

const mapDispatchToProps = dispatch => ({
  renameTask: (groupName, taskName) => {
    dispatch(renameTask({ groupName, taskName }));
  }
});

const EditTaskContainer = ({task, selectedGroup}, renameTask) => 
  <EditTask 
    task={task} 
    groupName={selectedGroup} 
    renameTask={renameTask}
  />;

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(EditTaskContainer)