const fetchAllPokemon = () => (
  $.ajax('/api/pokemon/')
);

export default {
  fetchAllPokemon
}
