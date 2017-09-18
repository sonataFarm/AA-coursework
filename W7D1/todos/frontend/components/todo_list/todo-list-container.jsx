import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo-list';
import { receiveTodos, receiveTodo } from '../../actions/todo-actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    todos: allTodos(state)
  }
}

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
