// Dashboard.js

import React, { useState } from 'react';
import TaskList from './TaskList';
import EditTaskModal from './EditTask';
import CreateTask from './CreateTask';

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("myTasks")) || []);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null); 
  const [selectedPriority, setSelectedPriority] = useState("");

  const toggleComplete = (taskId) => {
    setTasks(prevTasks =>{

    
      const allTasks = prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
      localStorage.setItem("myTasks", JSON.stringify(allTasks))
      return allTasks;
  });
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks =>{  
      const allTasks = prevTasks.filter(task => task.id !== taskId)
      localStorage.setItem("myTasks", JSON.stringify(allTasks))
      return allTasks;
    }
    
  );
    
  };

  const startEdit = (task) =>{
    setTaskToEdit(task);
  }

  const handleEditTask = (updatedTask) => {
    setTasks(prevTasks => { 
      const allTasks = prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task

      )
      localStorage.setItem("myTasks", JSON.stringify(allTasks))
      return allTasks;
  });
    setTaskToEdit(null); 
  }; 

  const handleAddTask = (newTask) =>{
    setTasks(prevTasks => { 
      const allTasks =  [
      ...prevTasks, 
      newTask       
  ]
  localStorage.setItem("myTasks", JSON.stringify(allTasks))
  return allTasks;
  })
    
    console.log(tasks, "sksksksksksks");
    setOpenModal(e => !e);
  }


  const filterTasksByPriority = (priority) => {
    if (priority === "") return tasks;
    return tasks.filter((task) => task.priority === priority);
};


const handleFilterChange = (e) => {
    const priority = e.target.value;
    console.log(priority, "ssisksk");
    setSelectedPriority(priority);
    setFilteredTasks(filterTasksByPriority(priority));
};

  return (
    <div className="h-20 px-5 items-center justify-center  border-b-richblack-700 bg-richblack-800 transition-all duration-200">
      
      <div className='flex items-center justify-center text-5xl text-black mt-4'>
        <img src='./images/logo.png' style={{height:"10rem"}}></img>
        <div className=" font-bold">Dashboard</div>
      </div>
      

        <div className='flex flex-row justify-between px-5 items-center'>

          <div>
          {/* Search Bar */}
            <input 
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="m-4 p-3 border border-gray-300 rounded-xl  text-black border-b-4"
            />
          </div>

          <div className='flex gap-5'>
            <button
              className='bg-yellow-300 rounded-xl p-2'
              onClick={()=> setOpenModal(e=>!e)}
            >Add Task</button>
            {openModal && <CreateTask closeModal = {
                ()=> setOpenModal(e=>!e)
            } 
            handleAddTask = {handleAddTask}/>}

          
            <select 
              onChange={handleFilterChange} 
              value={selectedPriority}
              className="ml-2 p-2 border border-black rounded-xl"
          >
              <option value="">Filter</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
          </select>
          </div>

        </div>
        


        <div className="grid grid-cols-3 text-2xl">
          <TaskList
            title="Upcoming Tasks"
            tasks={selectedPriority ? filteredTasks : tasks}
            filter="upcoming"
            searchQuery={searchQuery}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            startEdit={startEdit}
          />
          <TaskList
            title="Overdue Tasks"
            tasks={selectedPriority ? filteredTasks : tasks}
            filter="overdue"
            searchQuery={searchQuery}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            startEdit={startEdit}
          />
          <TaskList
            title="Completed Tasks"
            tasks={selectedPriority ? filteredTasks : tasks}
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
  );
}

export default Dashboard;