import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './../styles/PokemonDetail.scss';

class PokemonDetail extends React.Component {
  render() {
    const { routerProps , pokemons } = this.props;
    const pokeId = parseInt(routerProps.match.params.pokeId);
    const pokemon = pokemons.find(item => item.id === pokeId); 
    if(pokemon){
      return (
        <div className="container__detail">
        <div className="photo-id__container">
          <p className="pokemon__id">ID/{pokemon.id}</p>
          <img className="pokemon__img" src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="name-type__container">
          <h2 className="pokemon__name">{pokemon.name}</h2>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <ul className="pokemon__types--list">
            Types
            {pokemon.types.map(item => {
              return (
                <li key={item.type.name} className="pokemon__type--item"> {item.type.name}</li>
              );
            })}
          </ul>
          <ul className="pokemon__types--list" >
            Abilities
            {pokemon.abilities.map(ab=>{
              return(
                <li className="pokemon__type--item">{ab.ability.name}</li>
              )
            })}
          </ul>
          <Link to='/' >Volver</Link>
        </div>
        </div>
      );
    }else{
      return (
        <div>
          pokemon no encontrado
          <Link to='/' >Volver</Link>
        </div>
      );
    }
    
  };
};

PokemonDetail.propTypes = {
  routerProps:PropTypes.object.isRequired,
  pokemons: PropTypes.array.isRequired
};

export default PokemonDetail;