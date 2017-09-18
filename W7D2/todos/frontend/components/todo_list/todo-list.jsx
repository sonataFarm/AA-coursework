import React from 'react';
import TodoListItem from './todo-list-item';
import TodoForm from './todo-form';

// const TodoList = props => {
//   let todoListItems = props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo} />);
//
//   return (
//     <ul>
//       {todoListItems};
//       <TodoForm receiveTodo={props.receiveTodo} />
//     </ul>
//   );
// };

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    let todoListItems = this.props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo} />);

    return (
      <ul>
        {todoListItems};
        <TodoForm
          createTodo={this.props.createTodo}
          errors={this.props.errors}
         />
      </ul>
    );
  }
}

export default TodoList;
