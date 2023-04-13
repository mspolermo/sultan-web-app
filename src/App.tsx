import React, { useEffect, useMemo, useState } from 'react';
import goodsJSON from './goods/goodsJSON.json'
import './App.css'
import Catalog from './pages/Catalog';
import ProductCard from './pages/ProductCard';
import Basket from './pages/Basket';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from './components/Header';
import { IGoods } from './types/types';
import AdminPage from './pages/AdminPage';
import Breadcrumbs from './components/Breadcrumbs';
import Main from './pages/Main';
import Footer from './components/Footer';

function App() {
  const [goods, setGoods] = useState<IGoods []> (goodsJSON);

  const [productType, setProductType] = useState<undefined | string>('');
  const [orderList, setOrderList] = useState<any>([]);

  useEffect(() => {
    if ((productType!== undefined) && (productType!=='') ) {
      //Добавляем товар из списка 1ый раз
      let currentObject: IGoods | undefined = goods.find ((good) => good.id == +productType);
    
      if (!orderList.includes(currentObject)) {
        setOrderList([...orderList, currentObject]);
        setSumOfMoneyArray([...sumOfMoneyArray, [currentObject?.id, 1]]);
      } else {
      //Если он уже добавлен 1 раз в корзину
        
        let array = sumOfMoneyArray;
        let foundIndex: number = -1;
        let foundProductId = currentObject?.id;
        let foundProductValue;
  
        for( let i=0; i<array.length; i++) {
          if ((array[i])[0] == currentObject?.id) {
            foundIndex = i;
            foundProductValue = (array[i])[1];
          };
        };
        array.splice(foundIndex, 1);
        setSumOfMoneyArray([...array, [foundProductId, foundProductValue + 1] ]);
      };
      setProductType(undefined);
    }
  }, [productType]);  

  const [orderThing, setOrderThing] = useState<undefined | Array<number>>();
  const [sumOfMoneyArray, setSumOfMoneyArray] = useState <any>([]);
  const [countGoodsInBasket, setcountGoodsInBasket] = useState (0);

  useEffect(() => { 
    //Подсчет суммы товаров в корзине (при измении количества товаров)  
    if (orderThing!==undefined) {
      let array = sumOfMoneyArray;
      let findIndex: number = -1;

      for( let i=0; i<array.length; i++) {
        if ((array[i])[0] == orderThing[0]) {
          findIndex = i;
        };
      };
      array.splice(findIndex, 1);
      setSumOfMoneyArray([...array, orderThing]);
    }
  }, [orderThing]);
  const finalPrice = useMemo (() => {
    let result = 0;
      for (let i=0; i<sumOfMoneyArray.length; i++) {
        let objectForSum:IGoods | undefined = goods.find ((good) => good.id == sumOfMoneyArray[i][0]);
        result+= (objectForSum!.price * (sumOfMoneyArray[i])[1]);
      };

      let goodsCounter = 0;
      for (let j=0; j<sumOfMoneyArray.length; j++) {
        goodsCounter += sumOfMoneyArray[j][1];
      };
      setcountGoodsInBasket(goodsCounter);
    return result;
  }, [sumOfMoneyArray]);

  const [removeThing, setRemoveThing] = useState<undefined | IGoods>();

  useEffect(() => {
    //Удаление товаров из корзины
    let index = orderList.findIndex ( (order:any) => order.id === removeThing?.id);
    
    if (index!== -1) {
      orderList.splice(index, 1);
      setOrderList(orderList);
    };
    if (orderList.length !== sumOfMoneyArray.length) {
      let array = sumOfMoneyArray;
      let findIndex: number = -1;

      for( let i=0; i<array.length; i++) {
        if ((array[i])[0] == removeThing?.id) {
          findIndex = i;
        };
      };
      array.splice(findIndex, 1);
      setSumOfMoneyArray([...array]);
    };
  }, [removeThing]);

  function offer () {
    setOrderList([]);
    setSumOfMoneyArray([]);
  };

  return (
    <div >
      <div>
        <NavLink to="/catalog/" >Каталог товаров</NavLink>
        <NavLink to="/basket">Корзина</NavLink>
        <NavLink to="/admin" data-testid="admin-link">Админ</NavLink>
        <Header 
            testid='header-elem'
            finalPrice={finalPrice}
            countGoodsInBasket={countGoodsInBasket}        
        />
        <Breadcrumbs goods={goods} />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/catalog/' element={<Catalog
            goods={goods} 
            productTypeValue={productType}
            onProductTypeChange={setProductType}          
          />}></Route>
          <Route path='/catalog/:id' element={<ProductCard
            goods={goods}
            onProductTypeChange={setProductType}
          />}></Route>
          <Route path='/basket/' element={<Basket
            orderList={orderList}
            onOrderThingChange={setOrderThing}
            onRemove={setRemoveThing}
            finalPrice={finalPrice}
            basketThingsArray={sumOfMoneyArray}
            onOffer={offer} 
          />}></Route>
          <Route path='/admin/' element={<AdminPage 
            onGoodsUpdate ={setGoods}
            JSONfile = {goodsJSON}
          />}></Route>
          <Route path="*" element={<Navigate to='/catalog' />} />
        </Routes>
      </div>
      <Footer testid='footer-elem'/>
    </div>
  );
}

export default App;
