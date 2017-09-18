import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo-list';
import { createTodo, receiveTodos, receiveTodo, fetchTodos } from '../../actions/todo-actions';
import { allTodos, allErrors } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    todos: allTodos(state),
    errors: allErrors(state)
  }
}

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
