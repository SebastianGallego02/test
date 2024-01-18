import React, { useState, useEffect } from "react";
import Task from './Task';
import '../stylesheets/TaskList.css';
import TaskForm from "./TaskForm";
import fetchData from '../helpers/fetchData'
function TaskList(){

    const [tasks, setTasks] = useState([]); 

    const addTask = async (task) => {
        if(task.description.trim()){
            task.description = task.description.trim();

        try{
            const postData = {
                description: task.description,
                completed: false,
                active: true, 
                archived: false,
                category: "work"
              };

            const response = await fetch('http://localhost:3000/api/v1/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
            });
      
            const jsonData = await response.json();
            //console.log(jsonData)
            setTasks([jsonData, ...tasks]);
            //setTasks(jsonData);
        }catch(e){
            console.log(e)
        }
        }
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

    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Puedes agregar otras cabeceras según sea necesario
        },
        body:  null,
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



    return(
        <>
            <TaskForm onSubmit={addTask}/>
            <div className="task-list-container">
                {
                    tasks.map((task) => 
                        <Task 
                        key={task.id}
                        id={task.id}
                        description={task.description}
                        completed={task.completed}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        />
                    )
                }
            </div>
        
        </>
    );
}

export default TaskList;