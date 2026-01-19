import { CirclePlus } from 'lucide-react'
import React from 'react'

function AddTaskButton() {

  return (
    <button type='submit'>
    <CirclePlus className='w-14 h-14 text-gray-400 active:text-green-600 cursor-pointer hover:scale-105
    transition-transform'/>
    </button>
  )
}

export default AddTaskButton