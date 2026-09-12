function TaskItem({ task, onComplete, onDelete }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-white p-4 shadow">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onComplete}
          className="mt-1"
        />

        <div>
          <p
            className={
              task.completed
                ? "font-medium text-gray-400 line-through"
                : "font-medium text-gray-800"
            }
          >
            {task.text}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Added: {task.createdAt.toLocaleString()}
          </p>
        </div>
      </div>

      <button
        onClick={onDelete}
        className="rounded bg-red-500 px-3 py-1 text-white"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;