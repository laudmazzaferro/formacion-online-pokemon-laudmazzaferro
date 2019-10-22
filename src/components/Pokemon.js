import React from 'react';
import './../styles/Pokemon.scss';



class Pokemon extends React.Component {

  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <div className="photo-id__container">
          <p className="pokemon__id">ID/{pokemon.id}</p>
          <img className="pokemon__img" src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="name-type__container">
          <h2 className="pokemon__name">{pokemon.name}</h2>
          <ul className="pokemon__types--list">
            {pokemon.types.map(item => {
              return (
                <li key={item.type.name} className="pokemon__type--item"> {item.type.name}</li>
              );
            })}
          </ul>

        </div>

      </div>
    )
  }
}

export default Pokemon;