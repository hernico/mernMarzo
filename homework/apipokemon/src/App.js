import { Axios } from 'axios';
import './App.css';
import SalidaPokemon from './components/buscarPokemonPromise';
import AxiosPokemonList from './components/AxiosbuscarPokemon';
import SalidaPokemonPromise from './components/buscarPokemonPromise';
import AxiosPokemonLista from './components/AxiosbuscarPokemon copy';

function App() {
  return (
    <div className="App">
      <SalidaPokemon/>
      <SalidaPokemonPromise/>  
   <AxiosPokemonList/>
    </div>
  );
}

export default App;
