import React from 'react';
import Tasks from '../components/tasks/Tasks';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const selectedGroup = ownProps.match.params.groupName;
  //const selectedTasks = ownProps.match.params.groupsTasks;

  const props = state.data.filter(group => 
    group.name === selectedGroup
  )[0];
  
  return props;
};

const TasksContainer = props => {
  return <Tasks group={props} />
};

export default connect (
  mapStateToProps
)(TasksContainer)