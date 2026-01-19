import React from 'react'

function TaskCard({task}) {
  return (
 <div className="w-full px-4 py-2 bg-black/5 border rounded-md break-words">
      {task}
    </div>
  );    
}

export default TaskCard