import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo-actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  }
}

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos.reduce((todos, todo) => {
        todos[todo.id] = todo;
        return todos;
      }, {});
    case RECEIVE_TODO:
      let newTodo = {};
      newTodo[action.todo.id] = action.todo;
      return merge({}, state, newTodo);
    default:
      return state;
  }
}

export default todosReducer;
