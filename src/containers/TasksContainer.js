import React from 'react';
import Tasks from '../components/tasks/Tasks';
import { connect } from 'react-redux';
import { addTask, changeTask, deleteTask } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
  const selectedGroup = ownProps.match.params.groupName;

  const props = state.data.find(group => 
    group.name === selectedGroup
  );
  
  return props;
};

const mapDispatchToProps = dispatch => ({
  addTask: (groupId, label) => {
    dispatch(addTask({groupId, label}));
  },
  changeTask: (groupId, id) => {
    dispatch(changeTask({groupId, id}));
  },
  deleteTask: (groupId, id) => {
    dispatch(deleteTask({groupId,id}));
  }
});

const TasksContainer = (props, addTask, changeTask, deleteTask) => {
  return <Tasks 
          group={props}
          addTask={addTask}
          changeTask={changeTask}
          deleteTask={deleteTask}
        />
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer)