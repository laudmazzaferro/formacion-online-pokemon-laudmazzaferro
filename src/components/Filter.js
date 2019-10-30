import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Filter.scss';


class Filter extends React.Component {
  constructor(props){
    super(props);
    this.getInputValue= this.getInputValue.bind(this);
  }

  getInputValue(event){
    const {value}= event.currentTarget
    this.props.getInputPokemon(value)
  }

  render() {
    
    return (
      <div className="input__container">
        <label className="input__label" htmlFor="input__pokemon"></label>
        <input  className="input__text" placeholder="Pokemon Name.." id="input__pokemon" type="text" name="input__pokemon" onChange={this.getInputValue} />
      </div>
    );

  }
}

Filter.propTypes = {
  getInputPokemon:PropTypes.func.isRequired
};

export default Filter;