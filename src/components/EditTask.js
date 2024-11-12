// EditTask.js

import React, { useState } from 'react';

function EditTaskModal({ task, handleEditTask, closeModal }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      dueDate,
      priority,
    };
    handleEditTask(updatedTask);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        
        <div className="flex justify-end space-x-2">
          <button onClick={closeModal} className="bg-gray-300 text-black px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
