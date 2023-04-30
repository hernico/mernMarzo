import './App.css';
import Personas from './Components/personas/personas';


function App() {
  return (
    <div className="App">
      
  <div className="item3">Main
  <Personas firstName= {'Jane'} lastName={'Doe'} age={45} hairColor={'black'}  />
      <br />
      <Personas firstName= {'John'} lastName={'Smith'} age={88} hairColor={'Brownlack'} />
      <Personas firstName= {'Millard'} lastName={'Fillmore'} age={50} hairColor={'Brown'} />
      <Personas firstName= {'Maria'} lastName={'Smith'} age={62} hairColor={'Brown'} />
      </div>  
    
</div>
  );
}

export default App;
