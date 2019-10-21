import React from 'react';
import './App.css';
import Filter from './components/Filter';
import PokemonsList from './components/PokemonsList';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      pokemons:[],
      inputPokemon: ''
    }
  }

  render (){
    return (
      <div className="App">
        <header className="app_header">
          <h1 className="app__title">Pokemons List</h1>
        </header>
        <main className="app__main">
          <Filter />
          <PokemonsList />
        </main>
        <footer className="app__footer">
  
        </footer>
      </div>
    );
  }
}


export default App;
