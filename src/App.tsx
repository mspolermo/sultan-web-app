import React from 'react';
import GoodsList from './components/GoodsList';
import goods from './goods/goods.json'
import './App.css'

import Catalog from './pages/Catalog';
import ProductCard from './pages/ProductCard';
import Basket from './pages/Basket';

function App() {
  return (
    <div>
      <Basket/>
    </div>
  );
}

export default App;
