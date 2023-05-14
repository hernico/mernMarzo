import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Counter from './components/About';
import { CounterDos } from './components/listCharacters';
import { Carousel, Form, Table } from 'antd';  
import Hormiga from './components/ant';
import Tarjetitas from './components/tarjetitas';
import Cardis from './components/cardis';
import Forms from './components/rea';


function App() {
  return (
    <div className="App" >
      
      hola mundo
<input type='text' />
<Hormiga/>
<Table/>
<Tarjetitas/>
<Cardis/>

<Forms/>



    <Counter/> <br/>
    <CounterDos/>
        
    </div>
  );
}

export default App;
