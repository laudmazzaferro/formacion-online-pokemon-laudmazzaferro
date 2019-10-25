import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './../styles/PokemonList.scss';



class PokemonList extends React.Component {
  render() {
    const {pokemons , inputPokemon} = this.props
    const pokemonsFilter =pokemons.filter(pokemon => pokemon.name.toUpperCase().includes(inputPokemon.toUpperCase()))
    return (
      <div className="pokemon__container">
        <ul className="pokemon__list">
          {pokemonsFilter
          .map(pokemon =>{
            return(

              <li className="pokemon__item" key={pokemon.name}>
                <Link  className="pokemon__link" to={`/pokemon-detail/${pokemon.id}`} >
                  <Pokemon pokemon={pokemon}/>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );

  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  inputPokemon:PropTypes.string.isRequired
};

export default PokemonList;