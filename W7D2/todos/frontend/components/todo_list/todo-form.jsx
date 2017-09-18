import React from 'react';
import { uniqueId } from '../../util/utils'

const DEFAULT_STATE = {
  title: '',
  body: ''
};

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = DEFAULT_STATE;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property) {
    return event => this.setState({[property]: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let todo = this.constructTodo();

    this.props.createTodo(todo).then(
      () => this.setState(DEFAULT_STATE)
    );
  }

  constructTodo() {
    return Object.assign(
      {},
      this.state,
      { id: uniqueId(), done: false }
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={idx} style={{color: 'red'}}>
              {error}
            </li>
              )
            )}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>Title:
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.update('title')}
          />
        </label>
        <label>Body:
        <textarea
          name="body"
          value={this.state.body}
          onChange={this.update('body')}
        ></textarea>
      </label>
      <input type="submit" />
    </form>
  </div>
    );
  }
}

export default TodoForm;
