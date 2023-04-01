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
  const [orderList, setOrderList] = useState<any>([])

  useEffect(() => {
    
    if ((productType!== undefined) && (productType!=='') ) {
      
    //Добавляем товар из списка
      if (!orderList.includes(goods[+productType - 1])) {
        setOrderList([...orderList, goods[+productType - 1]]);
        setSumOfMoneyArray([...sumOfMoneyArray, [goods[+productType - 1].id, 1]])
      } else {
    //Если он уже добавлен 1 раз в корзину
        
        let array = sumOfMoneyArray;
        let foundIndex: number = -1;
        let foundProductId = goods[+productType - 1].id;
        let foundProductValue;
  
        for( let i=0; i<array.length; i++) {
          if ((array[i])[0] == goods[+productType - 1].id) {
            foundIndex = i;
            foundProductValue = (array[i])[1]
          }
        }
        array.splice(foundIndex, 1)
        setSumOfMoneyArray([...array, [foundProductId, foundProductValue + 1] ])
      }
      setProductType(undefined)
    }
  }, [productType]);  

  const [orderThing, setOrderThing] = useState<undefined | Array<number>>();
  const [sumOfMoneyArray, setSumOfMoneyArray] = useState <any>([])
  useEffect(() => { 
    //Подсчет суммы товаров в корзине (при измения количества товаров)  
    if (orderThing!==undefined) {
      let array = sumOfMoneyArray;
      let findIndex: number = -1;

      for( let i=0; i<array.length; i++) {
        if ((array[i])[0] == orderThing[0]) {
          findIndex = i;
        }
      }
      array.splice(findIndex, 1)
      setSumOfMoneyArray([...array, orderThing])
    }
  }, [orderThing])
  const finalPrice = useMemo (() => {
    let result = 0;
      for (let i=0; i<sumOfMoneyArray.length; i++) {
        result+= (goods[(sumOfMoneyArray[i][0])-1].price * (sumOfMoneyArray[i])[1])
      }
    return result  
  }, [sumOfMoneyArray])

  const [removeThing, setRemoveThing] = useState<undefined | IGoods>();
  useMemo(() => {

    let index = orderList.findIndex ( (order:any) => order.id === removeThing?.id)

    if (index!== -1) {
      orderList.splice(index, 1);
      
      setOrderList(orderList)
    }
    if (orderList.length !== sumOfMoneyArray.length) {
      let array = sumOfMoneyArray;
      let findIndex: number = -1;

      for( let i=0; i<array.length; i++) {
        if ((array[i])[0] == removeThing?.id) {
          findIndex = i;
        }
      }
      array.splice(findIndex, 1)
      setSumOfMoneyArray([...array])
    }
  }, [removeThing])

  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Каталог товаров</NavLink>
        <NavLink to="/basket">Корзина</NavLink>
        <Header 
            finalPrice={finalPrice}
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
            onOrderThingChange={setOrderThing}
            onRemove={setRemoveThing}
            finalPrice={finalPrice}
            basketThingsArray={sumOfMoneyArray} 
          />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
