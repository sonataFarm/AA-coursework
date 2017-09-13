import React from 'react';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

const names = [
  "Al",
  "Allen",
  "Allison",
  "Alligator",
  "Cynthia",
  "Romeo"
]

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <Autocomplete names={names} />
      </div>
    );
  }
}

export default Root;
