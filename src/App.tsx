import React, { useEffect, useMemo, useState } from 'react';
import goods from './goods/goods.json'
import './App.css'

import Catalog from './pages/Catalog';
import ProductCard from './pages/ProductCard';
import Basket from './pages/Basket';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from './components/Header';
import { IGoods } from './types/types';

interface goods {
  goods: IGoods[];
}


function App() {

  const [productType, setProductType] = useState<undefined | string>('');
  console.log(productType)
  const [cost, setCost] = useState<number> (0)
  
  const [orderList, setOrderList] = useState<any>([])
  useEffect(() => {
    if ((productType!== undefined) && (productType!=='') ) {
      setOrderList([...orderList, goods[+productType - 1]]);
      setCost(Math.ceil(cost + goods[+productType - 1].price))
    }
  }, [productType]);  
  //console.log(orderList)

  
  // const waitOrders = useMemo (() =>{
  //   if ((productType!== undefined) && (productType!=='') ) {
  //     setOrderList([...orderList, goods[+productType - 1]]);
  //     setCost(Math.ceil(cost + goods[+productType - 1].price))
  //   }
  // }, [productType])

  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Каталог товаров</NavLink>
        <NavLink to="/basket">Корзина</NavLink>
        <Header 
            cost={cost}
            productTypeValue={productType}
            onProductTypeChange={setProductType}        
        />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Catalog
            goods={goods} 
            productTypeValue={productType}
            onProductTypeChange={setProductType}          
          />}></Route>
          <Route path='/catalog/:id' element={<ProductCard
            productTypeValue={productType}
            onProductTypeChange={setProductType}
          />}></Route>
          <Route path='/basket' element={<Basket
            orderList={orderList}
          />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
