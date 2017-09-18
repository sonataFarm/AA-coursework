import React from 'react';

export default class PokemonIndex extends React.Component {
  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
      {this.props.pokemon.map(poke => (
        <li key={poke.id}>
          <img src={poke.image_url} width="20px" />
          {poke.name}
        </li>
      ))}
      </ul>
    );
  }
}
