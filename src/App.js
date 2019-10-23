import React from 'react';
import './App.scss';
import Filter from './components/Filter';
import PokemonsList from './components/PokemonsList';
import {fetchPokemons} from './services/fetchPokemons';
import {Switch , Route} from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pokemons:[],
      inputPokemon:''
    }
    this.getPokemons=this.getPokemons.bind(this);
    this.getInputPokemon= this.getInputPokemon.bind(this);
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
        pokemons: info
      });
    })
  }

  getInputPokemon(event){
    const newInput= event.currentTarget.value;
    this.setState({
      inputPokemon:newInput
    })
  }

  render (){
    const {pokemons ,inputPokemon } = this.state
    return (
      <div className="App">
        <header className="app_header">
          <h1 className="app__title">Pokemons List</h1>
        </header>
        <Switch>
          <Route exact path="/" render={() => {
            return (
            <main className="app__main">
            <Filter getInputPokemon={this.getInputPokemon} inputPokemon={inputPokemon}/>
            <PokemonsList   pokemons={pokemons}  inputPokemon={inputPokemon}/>
            </main>
            );
            }}
          />
          <Route path="/pokemon-detail/:chapId" render={routerProps => {
            return (
              <PokemonDetail 

              />
            
            );
          }}/>

        </Switch>
        
        <footer className="app__footer">
  
        </footer>
      </div>
    );
  }
}


export default App;
