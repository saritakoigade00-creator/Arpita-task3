import { useState } from "react";
import TaskList from "./TaskList";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();

    if (taskText.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: taskText,
        completed: false,
        createdAt: new Date(),
      },
    ]);

    setTaskText("");
  }

  function completeTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl">

        <h1 className="text-3xl font-bold text-gray-800">
          Day 7 - Task Tracker
        </h1>

        <p className="mt-2 text-gray-600">
          Mini Project using React and Tailwind CSS
        </p>

        <form onSubmit={addTask} className="mt-6 flex gap-2">
          <input
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            placeholder="Enter a task"
            className="flex-1 rounded-lg border bg-white px-4 py-2"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            Add Task
          </button>
        </form>

        <TaskList
          tasks={tasks}
          onComplete={completeTask}
          onDelete={deleteTask}
        />

      </div>
    </div>
  );
}

export default App;