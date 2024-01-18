// ArchivedPage.js
import React, { useState, useEffect } from 'react';
import Task from './Task';
import '../stylesheets/TaskList.css';
import '../stylesheets/ArchivedPage.css';
import { Pagination } from "./Pagination";

const ArchivedPage = () => {
  const [tasks, setTasks] = useState([]); 
  const [selectedValue, setSelectedValue] = useState('');
  const [tasksPerPage, settasksPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalTasks = tasks.length;

  const lastIndex = currentPage * tasksPerPage;
  const firstIndex = lastIndex - tasksPerPage;


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const deleteTask = async (id) =>{
        
    try {
        const response = await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const jsonData = await response.json();
        console.log(jsonData)

        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
      } catch (error) {
        console.error('Couldnt delete the task:', error);
      }
};

const completeTask = async (id) => {
    try {
        let completed = false;
        const updatedTasks = tasks.map(task=>{
            if(task.id == id){
                task.completed = !task.completed;
                completed = task.completed
            }
            return task;
        });
        const patchData = {
          completed: completed,
        };
        const response = await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(patchData),
        });

        const jsonData = await response.json();
        console.log(jsonData)
        //setTasks(jsonData);
        setTasks(updatedTasks);
      } catch (error) {
        console.error('Error al llamar al backend:', error);
      }
};


const archiveTask = async (id) => {
  try {
      let archived = true;
      const updatedTasks = tasks.map(task=>{
          if(task.id == id){
              task.archived = !task.archived;
              archived = task.archived
          }
          return task;
      });
      const patchData = {
        archived: archived,
      };
      const response = await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patchData),
      });

      const jsonData = await response.json();
      console.log(jsonData)
      //setTasks(jsonData);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al llamar al backend:', error);
    }
};



  const fetchData = async ()=>{
    try{
        const response = await fetch('http://localhost:3000/api/v1/tasks');
        const jsonData = await response.json();
        console.log(jsonData)
        setTasks(jsonData)
    }
    catch(e){
        console.log(e)
    }
}

useEffect(()=>{
    fetchData()
}, [])

  return (
    <>
      <div className="task-list-container-a">
          {
              tasks.filter(task => task.archived === true).map((task) => 
                  <Task 
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  archiveTask={archiveTask}
                  completed={task.completed}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  />
              ).slice(firstIndex, lastIndex)
          }
      </div>
      
      
  </>
  );
};

export default ArchivedPage;
