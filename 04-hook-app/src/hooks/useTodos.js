import { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [ todos ]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDelete = (todoId) => {
    dispatch({
      type: "[TODO] Delete",
      payload: todoId,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle",
      payload: id,
    });
  };

  const todosCount = () => {
    return todos.length;
  }

  const pendingTodosCount = () => {
    return todos.filter((todo) => !todo.done).length
  }

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDelete,
    handleToggleTodo,
  }
}
