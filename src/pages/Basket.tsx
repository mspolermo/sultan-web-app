import React, {FC, useEffect, useMemo, useState} from "react";
import '../App.css'
import BasketItem from "../components/BasketItem";
import GoodsItem from "../components/GoodsItem";
import Header from "../components/Header";
import OrdersList from "../components/OrdersList";
import { IGoods } from "../types/types";

interface BasketProps{
    orderList: IGoods[];
}

const Basket: FC<BasketProps> = ({orderList}) => {
    // productType
    const [total, setTotal] = useState<undefined | number>();
    //const [totalCount, setTotalCount] = useState<undefined | number>();
    console.log(total)

    // const totalCountChanger = useEffect (() => {
    //     if (totalCount==undefined) {
    //         setTotalCount(total)
    //     }
    //     if ((total!==undefined) &&  (totalCount!==undefined)){
    //     setTotalCount(totalCount+total)
    //     }
    // }, [total])
    // console.log(totalCount)


    
    return (
        <div>
            <div>КОРЗИНА</div>
            <div className="goods-list__list">
            {orderList.map( order => 
                <div key={order.id} >
                    <BasketItem 
                        order={order}
                        onTotalChange={setTotal} 
                    />
                </div>    
            )}
            <button>Оформить заказ</button>
            <p>Итого: {total} ₸</p>
        </div>
            <div className="footer">FOOTER</div>
        </div>
    );
};

export default Basket;