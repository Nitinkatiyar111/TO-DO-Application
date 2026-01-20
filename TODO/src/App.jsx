import { ListTodo } from "lucide-react";
import AddTaskForm from "./components/AddTaskForm";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((prevTasks) => [...prevTasks,
      {
        id: crypto.randomUUID(),
        text : task,
        completed: false
  },
]);
  }
  function handleDeleteTask(id){
    setTasks((prev)=> prev.filter((task)=> task.id !== id));
  }
  function handleToggleComplete(id) {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}

  return (
    <div>
      <header className="flex items-center justify-center gap-3 pt-16">
        <ListTodo className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold">ToDo List</h1>
      </header>

      {/* 🔑 Shared centered column */}
      <div className="w-[420px] mx-auto mt-6">
        <AddTaskForm onAddTask={ handleAddTask} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} 
        onToggleComplete = {handleToggleComplete} />
      </div>
    </div>
  );
}

export default App;
