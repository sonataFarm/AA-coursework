import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo-actions';

// testing and debugging
import { allTodos } from './reducers/selectors.js';
window.allTodos = allTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
// end testing and debugging

let store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  let rootDiv = document.getElementById('content');

  ReactDOM.render(
    <Root store={ store }/>,
    rootDiv
  );
});
