import { Children } from "react";

// constext
import { TodoContext } from "./TodoContext";

export const TodoContextProvider = ({ children }) => {
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
};
