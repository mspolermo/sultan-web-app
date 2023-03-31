import React, {FC, useEffect, useMemo, useState} from "react";
import '../App.css'
import BasketItem from "../components/BasketItem";
import GoodsItem from "../components/GoodsItem";
import Header from "../components/Header";
import OrdersList from "../components/OrdersList";
import { IBasketGoods, IGoods } from "../types/types";

interface BasketProps{
    orderList: IGoods[];
    onOrderThingChange?: (OrderThing: Array<number>) => void;
    onRemove? : (removeItem :IGoods) => void;
    finalPrice: number;
    basketThingsArray?:any;
}

const Basket: FC<BasketProps> = ({orderList, onOrderThingChange, onRemove, finalPrice, basketThingsArray}) => {

    const [basketArray, setBasketArray] = useState<any>();
    
    const basketChanger = useEffect( () => {
        basketThingsArray.sort((a: Array<number>, b: Array<number>) => a[0] - b[0])
        orderList.sort((a:IGoods, b:IGoods) => a.id - b.id )

        let newArray = [];
        
        for( let i = 0; i <orderList.length; i++){
            newArray.push({
                id: orderList[i].id,
                image: orderList[i].image,
                title: orderList[i].title,
                sizeType: orderList[i].sizeType,
                size: orderList[i].size,
                barcode: orderList[i].barcode,
                producer: orderList[i].producer,
                brand: orderList[i].brand,
                desription: orderList[i].desription,
                price: orderList[i].price,
                careType: orderList[i].careType,
                basketCount: (basketThingsArray[i])[1]
            })
        }
        setBasketArray(newArray)
    },[basketThingsArray])


    const [total, setTotal] = useState<undefined | Array<number>>();
    useEffect( () => {
        if (total) {
        onOrderThingChange?.(total)
        } 
    }, [total])

    const [removeThing, setRemoveThing] = useState<undefined | IGoods>();
    useEffect( () => {
        if (removeThing) {
            onRemove?.(removeThing)
        }
    }, [removeThing])

    return (
        <div>
            <div>КОРЗИНА</div>
            <div className="goods-list__list">
            {basketArray?.map( (order:IBasketGoods) => 
                <div key={order.id} >
                    <BasketItem 
                        order={order}
                        onTotalChange={setTotal} 
                        onRemove={setRemoveThing}
                    />
                </div>    
            )}
            <button>Оформить заказ</button>
            <p>Итого: {finalPrice} ₸</p>
        </div>
            <div className="footer">FOOTER</div>
        </div>
    );
};

export default Basket;