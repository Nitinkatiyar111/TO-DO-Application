import React, { useState } from 'react'
import AddTaskButton from './AddTaskButton';

function AddTaskForm({onAddTask}) {

    const [task,setTask] = useState("");

        function handleSubmit(e){
            e.preventDefault();
        if (!task.trim()) return;

        onAddTask(task);
        
        setTask("");
    }

  return (
    <form 
    onSubmit={handleSubmit}
    className='flex justify-center mt-6'>
       <input type='text' value={task}
       onChange={(e)=> setTask(e.target.value)} 
       placeholder='Add your task' 
       className='flex-1 px-4 py-2 border rounded-md'/>
       <AddTaskButton/>
    </form>
    
  )
}

export default AddTaskForm