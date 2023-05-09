import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
<Routes>

 <Route path='/about' element={<About/>} />

</Routes>

 

    </div>
  );
}

export default App;
