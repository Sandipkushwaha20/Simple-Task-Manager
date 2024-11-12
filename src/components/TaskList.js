// TaskList.js

import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ title, tasks, filter, searchQuery, toggleComplete, deleteTask, startEdit  }) {
  // Filter tasks by status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "upcoming")
      return !task.completed && new Date(task.dueDate) > new Date();
    if (filter === "overdue")
      return !task.completed && new Date(task.dueDate) < new Date();
    if (filter === "completed") return task.completed;
    return task;
  });

  // Further filter tasks based on the search query
  const searchFilteredTasks = filteredTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-richblack-500 p-3 rounded-xl m-4">
      <h2 className="text-2xl font-bold mb-2 text-center ">{title}</h2>
      {searchFilteredTasks.length > 0 ? (
        searchFilteredTasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            toggleComplete={toggleComplete}
            deleteTask = {deleteTask}
            startEdit={startEdit}
           />
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
}

export default TaskList;
