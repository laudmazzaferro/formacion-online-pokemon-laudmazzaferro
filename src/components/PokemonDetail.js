import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './../styles/PokemonDetail.scss';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
    this.state={
      pokemonEvolution:''
    }
    this.getEvolution=this.getEvolution.bind(this);
  }
  componentDidMount(){
    this.getEvolution()
  }

  getEvolution(){
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.props.pokemon.id}`)
    .then(response => response.json())
    .then(info => {
      if(info.evolves_from_species===null){
        this.setState({
          pokemonEvolution:'None'
        })
      }else{
        this.setState({
          pokemonEvolution:info.evolves_from_species.name
        })
      }
    });
  }


  render() {
    const { pokemon } = this.props;
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
                <li key={ab.ability.name} className="pokemon__type--item">{ab.ability.name}</li>
              )
            })}
          </ul>
          <h3 >Evolution: {this.state.pokemonEvolution}</h3>
          <Link to='/' >Return</Link>
        </div>
        
        </div>
      );
    }else{
      return (
        <div>
          Pokemon not found
          <Link to='/' >Return</Link>
        </div>
      );
    }
    
  };
};

PokemonDetail.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonDetail;