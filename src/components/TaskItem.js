// TaskItem.js
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import React, { useState } from 'react';
import DeleteModal from "./DeleteModal";

function TaskItem({ task, toggleComplete, deleteTask, startEdit }) {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="px-8 py-5 mb-8 border-b-2 rounded-xl bg-gray-100 flex flex-col">
      
      <div className='flex justify-between'>

        <div className={`mt-5 mr-20  ${
    task.priority === 'High'
      ? 'text-red-500'
      : task.priority === 'Medium'
      ? 'text-yellow-500'
      : 'text-green-500'
  } font-semibold`}>{task.priority}</div>

        <div>
          {/* Edit button */}
          <button
            onClick={() => startEdit(task)}
            className=" p-2 hover:text-blue-600 m-4 font-xl"
            title="Edit Task"
          >
            <MdOutlineEdit size={30}/>
            
          </button>

          {/* Delete button */}
          <button
            onClick={() => setOpenModal((e) => !e)
            }
            className="text-red-600 hover:text-red-800 py-1 rounded"
          >
            <RiDeleteBin6Line size={30}/>
              {/* Delete */}
          </button>
          {openModal && <DeleteModal id= {task.id} handelDeleteTask={deleteTask} closeModal = {
                ()=> setOpenModal(e=>!e)
            }  />}
        </div>
      </div>

      <div className='mb-3'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.dueDate}</p>
      </div>

      <div className="flex space-x-4 mt-2 md:mt-0">
        <button
          onClick={() => toggleComplete(task.id)}
          className="bg-green-500 hover:bg-green-400 p-2 my-2 rounded-xl w-full"
        >
          {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
      </div>

    </div>
  );
}

export default TaskItem;
