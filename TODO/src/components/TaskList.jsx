import React from 'react'
import TaskCard from './TaskCard';

function TaskList({ tasks, onDeleteTask,onToggleComplete }) {

    if (tasks.length === 0) return null;

  return (
     <div className="mt-6 flex flex-col items-center gap-2">
      {tasks.map((task, index) => (
        <TaskCard key={task.id} task={task} onDelete={onDeleteTask} onToggleComplete = {onToggleComplete}/>
      ))}
    </div>
  )
}

export default TaskList