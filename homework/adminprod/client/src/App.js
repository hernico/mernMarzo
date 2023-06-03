import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateProduct from './components/createProduct';
import ProductList from './components/productList';
import ProductDetail from './views/detailProduct';
import UpdateProduct from './components/updateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/products/new" element={<CreateProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/actualizar/:id" element={<UpdateProduct />} />
        {/* <Route path="/products/eliminar/:id" element={<UpdateProduct />} /> */}

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;