**Q1**) How long did you spend on the coding test? 

**Answer**: The task was completed over a span of 9 to 10 hours. Initially, I spent 15 minutes understanding the problem statement. I then dedicated 2 hours to designing a rough UI layout, followed by 3 hours implementing the UI in ReactJS, utilizing Tailwind CSS for styling. The remaining 4 hours were focused on developing the core functionality of the application, which included implementing interactions with local storage for storing, updating, and deleting tasks.




**Q2**) What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

**Answer**:

The most useful feature added in the latest version of React is **Function Components** with Hooks, which offer a cleaner and more concise way to manage component state and side effects compared to the older class-based components. Function components, especially with the introduction of hooks like `useState` and `useEffect`, have become the standard for writing React components because they are simpler and more readable.

In the example below, I use **function-based components** and **useState** to manage the state of the task management application:

### Code Snippet for Function-based Component:

```javascript
import React, { useState } from 'react';

function CreateTask({ handleAddTask, closeModal }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [dueDate, setDueDate] = useState();
  const [priority, setPriority] = useState("Low");

  const handleSubmit = () => {
    const id = `${new Date()}-${Math.random()}`;
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
```

### Code Snippet for Storing Tasks in Local Storage:

```javascript
const toggleComplete = (taskId) => {
  setTasks((prevTasks) => {
    const updatedTasks = prevTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem("myTasks", JSON.stringify(updatedTasks));
    return updatedTasks;
  });
};
```

### Tailwind CSS Configuration:

To integrate **Tailwind CSS** into your React project:

1. **Install Tailwind**:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

2. **Configure Tailwind** by adding the following paths in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'High': '#e74c3c',
        'Low' : '#f4d03f',
        'Medium' : '#e74c3c'
      }
    },
  },
  plugins: [],
}
```

3. **Import Tailwind CSS** in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This setup allows you to use utility-first CSS classes in your React components, helping you design the UI efficiently with a minimal amount of custom CSS.

By combining React’s function-based components with hooks and the flexibility of Tailwind CSS, I can easily build and manage the UI and state logic in a clean, maintainable manner.


**Q3)** How would you track down a performance issue in production? Have you ever had to do this?

**Answer:** To ensure optimal performance and maintain code quality, I follow best practices such as removing comments and unnecessary console.log() statements before production deployment. For large images and videos, I implement lazy loading to improve load times and reduce initial page load impact by only loading content as it becomes visible on the screen.

For deployment, I prefer using Vercel because it provides seamless updates and ensures smooth, continuous delivery for my running projects. Vercel’s integration and automatic updates allow me to focus on development while ensuring my projects are always up-to-date.



**Q4)** If you had more time, what additional features or improvements would you consider adding to the task management application?

**Answer:** If I had more time, I would consider adding the following features and improvements to the task management application:

    User Authentication and Authorization:
    Implement user login and registration features with JWT or OAuth for secure authentication, allowing users to have personalized task lists and profiles.


    Task Categorization:
    Add task categories (e.g., Work, Personal) to help users organize tasks more effectively.


    Task Deadlines and Reminders:
    Implement date pickers for setting task deadlines and notifications or email reminders to alert users about upcoming tasks.


    Collaboration Features:
    Allow users to share tasks with others or assign tasks to team members, making the app more suitable for collaborative project management.


    Drag-and-Drop Task Management:
    Implement a drag-and-drop interface for easier reordering of tasks, making it more intuitive for users to prioritize and manage their to-do list.


    Task History and Analytics:
    Add a history feature to track completed tasks and provide insights into productivity, such as time spent on tasks, task completion rate, etc.


    Mobile Optimization or App:
    Improve mobile responsiveness for a better experience across devices or consider creating a dedicated mobile app for iOS and Android.


    Dark Mode:
    Implement a dark mode toggle to allow users to choose their preferred theme for better accessibility and comfort.


    Backup and Sync:
    Integrate cloud syncing (e.g., Firebase or a similar service) to ensure tasks are backed up and accessible across multiple devices.