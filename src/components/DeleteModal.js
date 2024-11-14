

function DeleteModal({id, handelDeleteTask, closeModal }) {

  const handleSubmit = () => {
    handelDeleteTask(id);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-gray-500 bg-opacity-70 rounded-xl">
      <div className="bg-gray-600 p-4 rounded-xl shadow-md w-96 px-5 py-7">
        <h2 className="text-2xl font-bold mb-4 text-white">Delete Task</h2>
        <div>
            Are you sure?
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={closeModal} className="bg-gray-300 text-black px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
