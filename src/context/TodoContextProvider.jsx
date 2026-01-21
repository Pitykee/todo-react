import {} from "react";

// constext
import { TodoContext } from "./TodoContext";

export const TodoContextProvider = ({ children }) => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
