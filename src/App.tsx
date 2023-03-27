import React from 'react';
import goods from './goods/goods.json'

interface goods {
  id: number,
  image: string,
  title: string,
  sizeType: string,
  size: number,
  barcode: number,
  producer: string,
  brand: string,
  desription: string,
  price: number
}




function App() {
  return (
    <div>
      <h1>Unbelievable!</h1>
      {goods.map( good => {
        return (
          <div>{good.producer}</div>
        )
      })}
    </div>
  );
}

export default App;
