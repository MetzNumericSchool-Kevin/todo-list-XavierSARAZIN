import { useState } from "react";
import { TodoItem } from "./TodoItem";
type TodoItemType = {
  id: number;
  description: string;
  done: boolean;
};

type TodoAppProps = {
  tasks: TodoItemType[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onAddTask: (description: string) => void;
};

export function TodoApp({
  tasks,
  onToggleTask,
  onDeleteTask,
  onAddTask,
}: TodoAppProps) {
  const [newTask, setNewTask] = useState("");
  const handleAdd = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask("");
    }
  };
  return (
    <>
      <div className="w-full flex mb-4">
        <label className="input input-bordered flex items-center gap-2 w-4/6">
          <input
            type="text"
            className="grow"
            placeholder="Ajouter une tâche"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
        </label>
        <button className="btn btn-primary ml-3" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="my-5">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            description={task.description}
            done={task.done}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </>
  );
}
