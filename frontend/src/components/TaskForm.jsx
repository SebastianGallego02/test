import React, { useState } from "react";
import '../stylesheets/TaskForm.css';


function TaskForm(props){
    
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSend = (e) => {
        e.preventDefault();
        const newTask = {
            description: input,
            completed: false,
            active: true, 
            archived: false
        }
        props.onSubmit(newTask);
        console.log(newTask);
    }
    
    return(
        <form 
        className="task-form"
        onSubmit={handleSend}>
            <input 
                className="task-input"
                type="text"
                placeholder="Write a new Note"
                name="text"
                onChange={handleChange}
            />
            <button className="task-btn">
                Add Note
            </button>

            
        </form>
    );
}

export default TaskForm;