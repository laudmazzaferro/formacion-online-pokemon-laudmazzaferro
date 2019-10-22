import React from 'react';
import Pokemon from './Pokemon'


class PokemonList extends React.Component {
  render() {
    const {pokemons} = this.props
    return (
      <div>
        <ul className="pokemon__list">
          {pokemons.map(pokemon =>{
            return(
              <li className="pokemon__item" key={pokemon.name}>
                <Pokemon pokemon={pokemon}/>
              </li>
            );
          })}
        </ul>
        
        
      </div>
    );

  }
}

export default PokemonList;