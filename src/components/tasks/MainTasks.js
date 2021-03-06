import React      from 'react';
import TodoItem   from './TodoItem';
import AddTask    from './AddTask';

import './styleTasks.css';

const MainTasks = props => {
  return (
    <>
      <div className="todo-list">
        {
          props.tasks.map(task => {
            return <TodoItem 
                    key={task.id} 
                    groupId={props.groupId}
                    groupName={props.groupName}
                    tasks={task} 
                    changeTask={props.changeTask}
                    deleteTask={props.deleteTask}
                  />
          })
        }
      </div>
      <AddTask addTask={props.addTask} groupId={props.groupId} />
    </>
  )
};

export default MainTasks;