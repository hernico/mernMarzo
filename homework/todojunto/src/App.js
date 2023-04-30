import './App.css';
import Hola from './Components/Counter/counter';
import Personas from './Components/personas/personas';
import Personas2 from './Components/personas/personas2';


function App() {
  return (
    <div className="App">
      
  <div className="item1">Header</div>
  <div className="item2">
    </div>
  <div className="item3">Main
  <Personas firstName= {'Jane'} lastName={'Doe'} age={45} hairColor={'black'}  />
      <br />
      <Personas firstName= {'John'} lastName={'Smith'} age={88} hairColor={'Brownlack'} />
      <Personas firstName= {'Millard'} lastName={'Fillmore'} age={50} hairColor={'Brown'} />
      <Personas firstName= {'Maria'} lastName={'Smith'} age={62} hairColor={'Brown'} />
      </div>  
    
  <div 
    className="item4">Right
    
    <Personas2 firstName= {'John'} lastName={'Smith'} age={88} hairColor={'Black'} />
    <Personas2 firstName= {'Millard'} lastName={'Fillmore'} age={50} hairColor={'Brown'} />
    <Personas2 firstName= {'Maria'} lastName={'Smith'} age={62} hairColor={'Brown'} />
  </div>  

    <div className="item5">
    Footer

    <Hola />
      
      
      
   </div>
</div>
  );
}

export default App;
