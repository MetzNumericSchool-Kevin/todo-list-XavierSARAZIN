import { useState } from "react";
import { TodoApp } from "./TodoApp";

type TodoItem = {
  id: number; 
  description: string;
  done: boolean;
};

export function ParentComponent() {
  const [tasks, setTasks] = useState<TodoItem[]>([
    { id: 1, description: "Acheter des oranges", done: false },
    { id: 2, description: "Courir avec le fraté", done: true },
    { id: 3, description: "Jouer à LoL", done: true },
  ]);

  const addTask = (description: string) => {
    const newTask = {
      id: Date.now(),
      description,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ma Todo List</h1>
      <TodoApp
        tasks={tasks}
        onAddTask={addTask}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask} 
      />
    </div>
  );
}
