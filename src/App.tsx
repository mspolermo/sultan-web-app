import React from 'react';
import GoodsList from './components/GoodsList';
import goods from './goods/goods.json'
import './App.css'

function App() {
  return (
    <div>
      <div className="header">HEADER</div>
      <GoodsList goods={goods} />
      <GoodsList goods={goods} />
      <GoodsList goods={goods} />
      <div className="footer">FOOTER</div>
    </div>
  );
}

export default App;
