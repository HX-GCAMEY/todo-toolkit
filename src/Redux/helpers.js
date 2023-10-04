export const addTodoHelper = (todos, todo) => {
  todo.id = todos.length + 1;
  return todos.concat(todo);
};

export const removeTodoHelper = (todos, id) => {
  return todos.filter((todo) => todo.id !== id);
};

export const toggleCompleteHelper = (todos, id) => {
  return todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
};

export const filterTodosHelper = (todos, completed) => {
  return todos.filter((todo) => {
    if (completed === "all") {
      return todo;
    } else if (completed === "true") {
      return todo.completed === true;
    } else if (completed === "false") {
      return todo.completed === false;
    }
  });
};
