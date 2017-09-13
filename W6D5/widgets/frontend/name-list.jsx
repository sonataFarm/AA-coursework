import React from 'react';

class NameList extends React.Component {
  constructor() {
    super();
  }

  render() {
    let names = this.filterNames().map((name, idx) => {
      return <li key={idx}>{name}</li>;
    });

    return (
      <div>
        {names}
      </div>
    )

  }

  filterNames() {
    let query = this.props.query;
    let names = this.props.names;

    if (!query) {
      return names;
    } else {
      return names.filter((name) => {
        return name.toLowerCase().startsWith(query.toLowerCase());
      });
    }
  }
}

export default NameList;
