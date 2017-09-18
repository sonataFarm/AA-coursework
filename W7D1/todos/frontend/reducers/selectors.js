export const allTodos = (state) => {
  return Object.keys(state.todos).map((todoId) => (
    state.todos[todoId]
  ));
};

window.allTodos = allTodos;
