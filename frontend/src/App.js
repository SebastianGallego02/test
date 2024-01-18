import './App.css';
import minecraftLogo from './images/Minecraft_text.png';
import TaskList from './components/TaskList.jsx';

function App() {
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
}

export default App;
