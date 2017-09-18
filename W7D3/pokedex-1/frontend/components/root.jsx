import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon-index-container';

const Root = ({ store }) => (
  <Provider store={store} >
    <PokemonIndexContainer />
  </Provider>
)

export default Root;
