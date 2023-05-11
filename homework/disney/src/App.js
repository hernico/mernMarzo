import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Counter from './components/About';
import { CounterDos } from './components/listCharacters';
import { Carousel, Table } from 'antd';  
import Hormiga from './components/ant';
import Tarjetitas from './components/tarjetitas';
import Cardis from './components/cardis';


function App() {
  return (
    <div className="App" >
      
      hola mundo
<input type='text' />
<Hormiga/>
<Table/>
<Tarjetitas/>
<Cardis/>
    <Counter/> <br/>
    <CounterDos/>
        
    </div>
  );
}

export default App;
