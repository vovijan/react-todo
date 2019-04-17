import React from 'react';
import Tasks from '../components/tasks/Tasks';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  tasks: state.data
});

const TasksContainer = ({ tasks }) => {
  return <Tasks data={tasks} />
};

export default connect (
  mapStateToProps
)(TasksContainer)