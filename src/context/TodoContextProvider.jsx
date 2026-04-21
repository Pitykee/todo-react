import { useEffect, useState } from "react";

// constext
import { TodoContext } from "./TodoContext";

export const TodoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const onDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onSetTasks = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
        onToggleTask,
        onDeleteTask,
        onSetTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
