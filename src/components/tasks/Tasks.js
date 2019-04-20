import React from 'react';
import { Link } from 'react-router-dom';
import TasksHeader from './TasksHeader';
import MainTasks from './MainTasks';

import './styleTasks.css';

const Tasks = props => {
  const { id, name, tasks, addTask, changeTask } = props.group;
  return (
    <>
      <TasksHeader name={name} />
      <MainTasks 
        groupId={id} 
        tasks={tasks} 
        addTask={addTask}
        changeTask={changeTask}
      />
      <Link to='/'>
        <i className="fas fa-chevron-circle-left"></i>
        &nbsp;&nbsp;Back, please!
      </Link>
    </>
  )
};

export default Tasks;