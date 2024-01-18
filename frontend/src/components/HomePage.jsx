import React, { useState, useEffect } from 'react';
import minecraftLogo from '../images/Minecraft_text.png';
import TaskList from '../components/TaskList.jsx';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

 

  
  const handleArchive = async (taskId) => {
    try {
      const res = await fetch(`https://api-ejemplo.com/tasks/${taskId}`, { archivado: true });
      // Actualizar la lista de tasks después de archivar
      const newTasks = tasks.filter((task) => task.id !== task.id);
      setTasks(newTasks);
      console.log('task archivado con éxito');
    } catch (error) {
      console.error('Error al archivar el task:', error);
    }
  };

  
  return ( 
  <div className="aplicacion">
    <div className='logo-contenedor'>
      <img 
      className='logo'
      src={minecraftLogo} 
      alt="Logo" />
    </div>
    <div className='tareas-lista-principal'>
      <h1>My Notes</h1>
      <TaskList />
    </div>
  </div>
  );
};
export default HomePage;
