import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateProduct from './createproduct/createProduct';
import ShowProduct from './showProduct/showProduct';
import UpdateProduct from './updateProduct/updateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/new" element={<CreateProduct />} />
        <Route path='/products' element={<ShowProduct/>} />
        <Route path='/products/:id' element={<ShowProduct/>} />
        <Route path='/products/update/:id' element={<UpdateProduct/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
