import React from 'react'
import { Trash2 } from 'lucide-react';

function TaskCard({ task, onDelete }) {
  return (
 <div className="w-full flex items-start gap-3 px-4 py-3 bg-black-50
  border border-gray-200 rounded-lg">
     <p className='flex-1 break-words leading-relaxed text-gray-800'>{task.text}</p>
     <button onClick={() => onDelete(task.id)} className='shrink-0' aria-label='Delete task'>
        <Trash2 className='w-4 h-4 text-gray-400 hover:text-red-500'/>
        </button> 
  
  
    </div>
  );    
}

export default TaskCard