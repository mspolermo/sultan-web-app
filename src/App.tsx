import React from 'react';
import GoodsList from './components/GoodsList';
import goods from './goods/goods.json'
import './App.css'

import Catalog from './pages/Catalog';
import ProductCard from './pages/ProductCard';
import Basket from './pages/Basket';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Каталог товаров</NavLink>
        <NavLink to="/basket">Корзина</NavLink>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Catalog/>}></Route>
          <Route path='/catalog/:id' element={<ProductCard/>}></Route>
          <Route path='/basket' element={<Basket/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
