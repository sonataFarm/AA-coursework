export const allTodos = (state) => {
  return Object.keys(state.todos).map((todoId) => (
    state.todos[todoId]
  ));
};

export const allErrors = (state) => {
  return state.errors
}

window.allTodos = allTodos;
