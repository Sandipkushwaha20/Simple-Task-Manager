// TaskItem.js
import { FaEdit, FaTrash } from 'react-icons/fa';
import React from 'react';

function TaskItem({ task, toggleComplete, deleteTask, startEdit }) {
  return (
    <div className="p-2 mb-2 border-b">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <div className="flex lg-space-x-4 mt-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="bg-yellow-100 p-2 my-2 rounded-xl"
        >
          {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
        </button>

        {/* Edit button */}
        <button
          onClick={() => startEdit(task)}
          className="text-yellow-500 p-2 hover:text-yellow-700 m-4"
          title="Edit Task"
        >
          <FaEdit size={40} />
        </button>

        {/* Delete button */}
        <button
          onClick={() => deleteTask(task.id)}
          className="text-white py-1 rounded"
        >
          <FaTrash 
            size={40} />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
