import React, {FC, useEffect, useState} from "react";
import BasketItem from "../components/BasketItem";
import { IBasketGoods, IGoods } from "../types/types";

interface BasketProps{
    orderList: IGoods[];
    onOrderThingChange?: (OrderThing: Array<number>) => void;
    onRemove? : (removeItem :IGoods) => void;
    finalPrice: number;
    basketThingsArray?:any;
    onOffer: any;
}

const Basket: FC<BasketProps> = ({orderList, onOrderThingChange, onRemove, finalPrice, basketThingsArray, onOffer}) => {

    const [basketArray, setBasketArray] = useState<any>();

    const basketChanger = useEffect( () => {
        basketThingsArray.sort((a: Array<number>, b: Array<number>) => a[0] - b[0]);
        orderList.sort((a:IGoods, b:IGoods) => a.id - b.id );

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
        setBasketArray(newArray);
    },[basketThingsArray]);

    const [total, setTotal] = useState<undefined | Array<number>>();
    useEffect( () => {
        if (total) {
        onOrderThingChange?.(total);
        }; 
    }, [total]);

    const [removeThing, setRemoveThing] = useState<undefined | IGoods>();
    useEffect( () => {
        if (removeThing) {
            onRemove?.(removeThing)
        }
    }, [removeThing]);

    const [openMessage, setOpenMessage] = useState('basket__mesasge_hidden');
    const offer = () => {
        setOpenMessage('basket__mesasge');
    };
    const closing = () => {
        setOpenMessage('basket__mesasge_hidden');
        setBasketArray([]);
        onOffer?.([]);
    };

    return (
        <div data-testid="basket-page" className='basket'>
            <div className='container basket__container'>
                <div className="basket__heading">КОРЗИНА</div>
                <div className="basket__list">
                    {basketArray?.map( (order:IBasketGoods) => 
                        <div key={order.id} >
                            <BasketItem 
                                order={order}
                                onTotalChange={setTotal} 
                                onRemove={setRemoveThing}
                            />
                        </div>    
                    )}
                </div>
                <div className="basket__summary">
                    <button data-testid='order-element' onClick={offer} className="basket__btn_order">Оформить заказ</button>
                    <p data-testid='price-element' className="basket__price basket__price_final">{finalPrice} ₸</p>   
                </div>
            </div>
            <div className={openMessage}>
                <button data-testid='close-element' className="basket__close" onClick={closing}>x</button>
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="59" height="59" rx="29.5" fill="#FFC85E"/><path d="M19.5 29.5L24.75 34.5L27.375 31.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M25.5 29.5L30.75 34.5L39.5 24.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M33.5 24.5L30 28.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h2 className="basket__head">Спасибо за заказ</h2>
                <p className="basket__text-message">Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
        </div>
    );
};

export default Basket;