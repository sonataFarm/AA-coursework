import { connect } from 'react-redux';
import { selectAllPokemon } from '../../selectors/selectors';
import { requestAllPokemon } from '../../actions/pokemon-actions';
import PokemonIndex from './pokemon-index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
})

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
