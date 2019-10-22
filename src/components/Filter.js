import React from 'react'


class Filter extends React.Component {
  render() {
    const {getInputPokemon ,inputPokemon } = this.props
    return (
      <div className="input__container">
        <label className="input__label" for="input__pokemon"></label>
        <input  className="input__text" placeholder="Pokemon Name.." id="input__pokemon" type="text" name="input__pokemon" onChange={getInputPokemon} value={inputPokemon}/>
      </div>
    );

  }
}

export default Filter;