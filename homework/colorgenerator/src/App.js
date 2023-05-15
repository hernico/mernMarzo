import './App.css';
import Cards from './components/Cards';
import Colors from './components/Generator';
import Navbar from './components/NavBar';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
<Navbar/>
      <Colors/>


<Cards/>

    </div>
  );
}

export default App;
