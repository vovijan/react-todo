import React from 'react';
import Tasks from '../components/tasks/Tasks';
import { connect } from 'react-redux';
import { changeTask } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
  const selectedGroup = ownProps.match.params.groupName;
  //const selectedTasks = ownProps.match.params.groupsTasks;

  const props = state.data.filter(group => 
    group.name === selectedGroup
  )[0];
  
  return props;
};

const mapDispatchToProps = dispatch => ({
  changeTask: ({groupId, id}) => {
    dispatch(changeTask({groupId, id}));
  }
});

const TasksContainer = (props, changeTask) => {
  return <Tasks group={props} changeTask={changeTask} />
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer)