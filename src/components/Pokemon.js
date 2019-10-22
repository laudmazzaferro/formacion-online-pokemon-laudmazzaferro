import React from 'react';



class Pokemon extends React.Component {
 
  render() {
    const {pokemon}=this.props;
    return (
    <div>
      <h2 className="pokemon__name">{pokemon.name}</h2>
      <p className="pokemon__id">{pokemon.id}</p>
      <img className="pokemon__img" src={pokemon.sprites.front_default} alt=""/>
      <ul className="pokemon__types--list">
      {pokemon.types.map(item=>{
        return(
          <li className="pokemon__type--item"> {item.type.name}</li>
        );
      })}
      </ul>
      
    </div>
    )
  }
}

export default Pokemon;