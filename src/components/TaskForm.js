import React, { useState } from "react";

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(), // Unique ID for each task
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
    
    // Reset the form fields
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Low');
  };

  return (
    <div className="max-h-full flex-row m-2">
      <div className="flex mb-5">
        <input
          className="rounded-xl p-2 ml-2 border border-richblack-800 border-b-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
        />
        <textarea
          className=" rounded-xl p-2 mx-3 border border-gray-300 border-b-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <div>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="bg-caribbeangreen-50 rounded-xl p-2 mx-2"
        />
        <select
          className="bg-caribbeangreen-50 rounded-xl p-1.5 mx-1"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          className="bg-yellow-100 rounded-xl p-2 mx-2"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
