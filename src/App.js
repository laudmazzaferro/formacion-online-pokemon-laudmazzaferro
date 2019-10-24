import React from 'react';
import {Switch , Route} from 'react-router-dom';
import {fetchPokemons} from './services/fetchPokemons';
import Filter from './components/Filter';
import PokemonsList from './components/PokemonsList';
import PokemonDetail from './components/PokemonDetail';
import './App.scss';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pokemons:[],
      inputPokemon:'',
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
            <Filter getInputPokemon={this.getInputPokemon} />
            <PokemonsList   pokemons={pokemons}  inputPokemon={inputPokemon}/>
            </main>
            );
            }}
          />
          <Route path="/pokemon-detail/:pokeId" render={routerProps => {
            return (
              <PokemonDetail 
              routerProps={routerProps}
              pokemons={pokemons}
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
