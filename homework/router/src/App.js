import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavScroll from './components/navbar';
import Home from './components/pages/Home';
import Hello from './components/pages/Hello';
import Number from './components/pages/Number';
import Color from './components/pages/Color';
import LuckyNumber from './components/pages/LuckyNumber';
import LuckyColor from './components/pages/LuckyColor';

function App() {
  return (
    <div classNameName="App">

      <NavScroll/>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/hello" element={<Hello/>} />

        <Route path="/4/" element={<Number/>} />
        <Route path="/LuckyNumber/:numero" element={<LuckyNumber/>} />
      
        <Route path="/hola" element={<Color/>} />
        <Route path="/blue/:colores" element={<LuckyColor/>} />

      </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
