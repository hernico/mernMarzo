import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateProduct from './components/createProduct';
import ProductList from './components/productList';
import ProductDetail from './views/detailProduct';
import UpdateProduct from './components/updateProduct';
import ActualizarTodo from './components/nuevoupdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/products/new" element={<CreateProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* <Route path="/products/:id" element={<PersonDetails />} /> */}

        <Route path="/products/actualizar/:id" element={<UpdateProduct />} />
        <Route path="/products/casa/" element={<ActualizarTodo />} />

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
