import React from 'react';
import TodoListItem from './todo-list-item';
import TodoForm from './todo-form';

const TodoList = props => {
  let todoListItems = props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo} />);

  return (
    <ul>
      {todoListItems};
      <TodoForm receiveTodo={props.receiveTodo} />
    </ul>
  );
};

export default TodoList;
