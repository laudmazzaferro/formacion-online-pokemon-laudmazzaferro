import React from 'react';
import './App.css';
import Filter from './components/Filter';
import PokemonsList from './components/PokemonsList';
import {fetchPokemons} from './services/fetchPokemons';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pokemons:[]
    }
    this.getPokemons=this.getPokemons.bind(this);
  }

  componentDidMount(){
    this.getPokemons()
  }

  getPokemons(){
    fetchPokemons()
    .then(data => {
      const pokeArr = data.results.map(item => {
        return fetch(item.url)
          .then(response => response.json());
      });
      return Promise.all(pokeArr);
    })
    .then(info => {
      this.setState({
        pokemons: info,
      });
    })
}

  render (){
    const {pokemons } = this.state
    return (
      <div className="App">
        <header className="app_header">
          <h1 className="app__title">Pokemons List</h1>
        </header>
        <main className="app__main">
          <Filter />
          <PokemonsList   pokemons={pokemons}  />
        </main>
        <footer className="app__footer">
  
        </footer>
      </div>
    );
  }
}


export default App;
