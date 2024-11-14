// EditTask.js

import React, { useState } from 'react';

function CreateTask({handleAddTask, closeModal }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [dueDate, setDueDate] = useState();
  const [priority, setPriority] = useState("Low");

  const handleSubmit = () => {
    const id = `${new Date()}-${Math.random()}`
    const addTask = {
      id,
      title,
      description,
      dueDate,
      priority,
    };
    handleAddTask(addTask);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 backdrop-blur-sm bg-opacity-70 rounded-xl">
      <div className="bg-gray-600 p-4 rounded-xl shadow-md w-96 px-5 py-7">
        <h2 className="text-2xl font-bold mb-4 text-white">Add Task</h2>
        
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="mb-2 p-2 border bg-gray-400 text-gray-900 rounded w-full placeholder-gray-700"
        />
        
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="mb-2 p-2 border bg-gray-400 text-gray-900 rounded w-full placeholder-gray-700"
        />
        
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="mb-2 p-2 border bg-gray-400 text-gray-900 rounded w-full"
        />
        
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="mb-4 p-2 border bg-gray-400 text-gray-900 rounded w-full"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        
        <div className="flex justify-end space-x-2">
          <button onClick={closeModal} className="bg-gray-300 text-black px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
