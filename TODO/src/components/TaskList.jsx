import React from 'react'
import TaskCard from './TaskCard';

function TaskList({tasks}) {

    if (tasks.length === 0) return null;

  return (
     <div className="mt-6 flex flex-col items-center gap-2">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  )
}

export default TaskList