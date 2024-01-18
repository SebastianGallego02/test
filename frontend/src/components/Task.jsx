import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaEdit } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";

function Task({ id, description, completed, completeTask, archived, archiveTask, active, activeTask, deleteTask, editTask }){
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div 
      className='task-description'
      onClick={()=> completeTask(id)}>
        {description}
      </div>
      <div className='icons-container'>
      <div 
        className='task-container-icons'
        onClick={() => archiveTask(id)}>
          <FaArchive className='task-icon archive'/>
        </div>
     
        <div 
        className='task-container-icons'
        onClick={() => console.log('Here is where you edit a note')}>
          <FaEdit className='task-icon'/>
        </div>
        <div 
        className='task-container-icons'
        onClick={() => deleteTask(id)}>
          <AiOutlineDelete className='task-icon'/>
        </div>
      </div>
    </div>
  )
}

export default Task;