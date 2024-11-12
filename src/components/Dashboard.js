// Dashboard.js

import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import EditTaskModal from './EditTask';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null); // Track the task to edit


  // Function to toggle the completion status of a task
  const toggleComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const startEdit = (task) =>{
    setTaskToEdit(task);
  }

  const handleEditTask = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setTaskToEdit(null); // Close the edit modal
  }; 

  return (
    <div className="h-20 items-center justify-center  border-b-richblack-700 bg-richblack-800 transition-all duration-200">
      
      <h1 className="text-4xl font-bold p-5 text-center text-white">Task Dashboard</h1>
      <div className=''>
        {/* Search Bar */}
        <input 
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="m-4 p-3 border border-gray-300 rounded-xl  text-black border-b-4"
        />
        
        <TaskForm setTasks={setTasks} />
        <div className="grid grid-cols-3 md-grid-cols-2 text-2xl">
          <TaskList
            // className = "bg-richblack-900"
            title="Upcoming Tasks"
            tasks={tasks}
            filter="upcoming"
            searchQuery={searchQuery}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            startEdit={startEdit}
          />
          <TaskList
            title="Overdue Tasks"
            tasks={tasks}
            filter="overdue"
            searchQuery={searchQuery}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            startEdit={startEdit}
          />
          <TaskList
            title="Completed Tasks"
            tasks={tasks}
            filter="completed"
            searchQuery={searchQuery}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            startEdit={startEdit}
          />
        </div>

        {taskToEdit && (
        <EditTaskModal
          task={taskToEdit}
          handleEditTask={handleEditTask}
          closeModal={() => setTaskToEdit(null)}
        />
      )}
      </div>
       
    </div>
  );
}

export default Dashboard;