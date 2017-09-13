import React from 'react';
import NameList from './name-list';

class Autocomplete extends React.Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };
  }

  render() {
    return (
      <div className="autocomplete autocomplete-container">
        <label> Name: </label>
        <input type="text" value={this.state.query} onChange={this.handleChange.bind(this)} />
        <NameList query={this.state.query} names={this.props.names} />
      </div>
    )
  }

  handleChange(event) {
    let query = event.currentTarget.value;
    this.setState({query});
  }
}

export default Autocomplete;
