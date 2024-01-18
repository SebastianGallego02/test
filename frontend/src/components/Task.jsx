import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineDelete } from 'react-icons/ai';
function Task({ id, description, completed, completeTask, archived, archiveTask, active, activeTask, deleteTask }){
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div 
      className='task-description'
      onClick={()=> completeTask(id)}>
        {description}
      </div>
      <div 
      className='task-container-icons'
      onClick={() => deleteTask(id)}>
        <AiOutlineDelete className='task-icon'/>
      </div>
    </div>
  )
}

export default Task;