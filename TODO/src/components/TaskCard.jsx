import { Trash2, CheckCircle } from "lucide-react";

function TaskCard({ task, onDelete, onToggleComplete }) {
  return (
    <div
      className="
        w-full
        flex
        items-start
        gap-3
        px-4
        py-3
        bg-gray-50
        border
        border-gray-200
        rounded-lg
      "
    >
      {/* Complete toggle */}
      <button
        onClick={() => onToggleComplete(task.id)}
        aria-label="Toggle task completion"
        className="shrink-0 mt-1"
      >
        <CheckCircle
          className={`w-5 h-5 transition-colors ${
            task.completed
              ? "text-green-600 fill-green-600"
              : "text-gray-400 hover:text-green-500"
          }`}
        />
      </button>

      {/* Task text */}
      <p
        className={`flex-1 break-words leading-relaxed ${
          task.completed
            ? "line-through text-gray-400"
            : "text-gray-800"
        }`}
      >
        {task.text}
      </p>

      {/* Delete button */}
      <button
        onClick={() => onDelete(task.id)}
        className="shrink-0 mt-1"
        aria-label="Delete task"
        title="Delete task"
      >
        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
      </button>
    </div>
  );
}

export default TaskCard;
