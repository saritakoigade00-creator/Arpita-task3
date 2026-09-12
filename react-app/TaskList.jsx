import TaskItem from "./TaskItem";

function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <ul className="mt-6 space-y-3">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onComplete={() => onComplete(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;