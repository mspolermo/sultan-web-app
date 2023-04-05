import React, {FC, useEffect, useMemo, useState} from "react";
import { IBasketGoods, IGoods } from "../types/types";

interface BasketItemProps {
    order: IBasketGoods;
    totalValue?: number;
    onTotalChange?: (newTotal: Array<number>) => void;
    onRemove? : (removeItem :IGoods) => void;
};


const BasketItem: FC<BasketItemProps> = ({order, totalValue, onTotalChange, onRemove}) => {
    const [counter, setCounter] = useState (order.basketCount)

    function upCounter () {
        setCounter(counter+1)
    }
    function downCounter () {
        if (counter>0) {
            setCounter(counter-1)   
    }
    }
    useEffect( () => {
        onTotalChange?.(([order.id ,counter]))
    }, [counter])

    function removing () {
        onRemove?.(order);
    }

    return (
        <div className="basket__item">
            <div className="basket__block basket__block_img">
                <img className="basket__img" src={order.image} alt="Img" />
            </div>
            <div className="basket__block basket__block_info">
                {order.sizeType == 'weight' ? (
                    <div className="basket__size">
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3035 7.99994C12.7753 7.99994 12.2785 7.71869 12.0097 7.26869L10.0003 3.93743L7.9941 7.26869C7.72222 7.72181 7.22535 8.00306 6.69722 8.00306C6.5566 8.00306 6.41597 7.98431 6.2816 7.94369L2.00035 6.71868V12.2812C2.00035 12.7406 2.31285 13.1406 2.7566 13.2499L9.51285 14.9406C9.8316 15.0187 10.166 15.0187 10.4816 14.9406L17.2441 13.2499C17.6878 13.1374 18.0003 12.7374 18.0003 12.2812V6.71868L13.7191 7.94056C13.5847 7.98119 13.4441 7.99994 13.3035 7.99994ZM19.9472 4.49369L18.3378 1.28118C18.241 1.08743 18.0316 0.974934 17.816 1.00306L10.0003 1.99993L12.866 6.75306C12.9847 6.94993 13.2222 7.04368 13.4441 6.98118L19.6285 5.21556C19.9378 5.12493 20.0878 4.78118 19.9472 4.49369ZM1.66285 1.28118L0.0534711 4.49369C-0.0902789 4.78118 0.0628461 5.12493 0.369096 5.21243L6.55347 6.97806C6.77535 7.04056 7.01285 6.94681 7.1316 6.74993L10.0003 1.99993L2.1816 1.00306C1.96597 0.978059 1.75972 1.08743 1.66285 1.28118Z" fill="#3F4E65"/></svg>
                        <p className="basket__size-description">{order.size} г</p>
                    </div>
                ) : (
                    <div className="basket__size">
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.1 14.0625C8.05312 14.3164 7.95234 14.5361 7.79766 14.7217C7.64297 14.9072 7.44375 15 7.2 15H1.8C1.55625 15 1.35938 14.9097 1.20938 14.729C1.05937 14.5483 0.95625 14.3262 0.9 14.0625L0 8.4375V6.5625C0 6.2793 0.0914062 6.04492 0.274219 5.85938C0.457031 5.67383 0.726562 5.49072 1.08281 5.31006C1.43906 5.12939 1.65937 5.00977 1.74375 4.95117C2.11875 4.67773 2.45625 4.35547 2.75625 3.98438C3.05625 3.61328 3.27656 3.22266 3.41719 2.8125H3.15C3.02812 2.8125 2.92266 2.76611 2.83359 2.67334C2.74453 2.58057 2.7 2.4707 2.7 2.34375V0.46875C2.7 0.341797 2.74453 0.231934 2.83359 0.13916C2.92266 0.0463867 3.02812 0 3.15 0H5.85C5.97187 0 6.07734 0.0463867 6.16641 0.13916C6.25547 0.231934 6.3 0.341797 6.3 0.46875V2.34375C6.3 2.4707 6.25547 2.58057 6.16641 2.67334C6.07734 2.76611 5.97187 2.8125 5.85 2.8125H5.58281C5.86406 3.60352 6.38437 4.28711 7.14375 4.86328C7.24687 4.95117 7.48125 5.08789 7.84687 5.27344C8.2125 5.45898 8.49609 5.64941 8.69766 5.84473C8.89922 6.04004 9 6.2793 9 6.5625V8.4375L8.1 14.0625Z" fill="#3F4E65"/></svg>
                        <p className="basket__size-description">{order.size} мл</p>
                    </div>
                )}
                <div className="basket__description">
                    <span className="basket__title">{order.title} </span> 
                    <span className="basket__title-additional">{order.desription}</span>
                    <p className="basket__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, eum, aut necessitatibus nihil velit repellat labore cumque itaque voluptatum natus facilis aperiam? Accusamus maxime esse illo nobis voluptatem itaque atque.</p>
                </div>
            </div>
            <div className="basket__block basket__block_last">
                <div className="basket__block-counter">
                    <button className="basket__btn-count" onClick= {downCounter}>-</button>
                    <p className="basket__counter">{counter}</p>
                    <button className="basket__btn-count" onClick= {upCounter}>+</button>
                </div>
                <div className="basket__block-price">
                    <p className="basket__price">{order.price} ₸</p>  
                </div>
                <div className="basket__block-del">
                    <button className="basket__btn" onClick={removing}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.625 3.25195H17.3125C17.5197 3.25195 17.7184 3.33426 17.8649 3.48078C18.0114 3.62729 18.0938 3.826 18.0938 4.0332C18.0938 4.2404 18.0114 4.43912 17.8649 4.58563C17.7184 4.73214 17.5197 4.81445 17.3125 4.81445H16.4484L15.2734 15.402C15.1673 16.3575 14.7125 17.2403 13.9961 17.8815C13.2797 18.5226 12.352 18.8771 11.3906 18.877H7.60938C6.64797 18.8771 5.72029 18.5226 5.00389 17.8815C4.28749 17.2403 3.8327 16.3575 3.72656 15.402L2.55 4.81445H1.6875C1.4803 4.81445 1.28159 4.73214 1.13507 4.58563C0.98856 4.43912 0.90625 4.2404 0.90625 4.0332C0.90625 3.826 0.98856 3.62729 1.13507 3.48078C1.28159 3.33426 1.4803 3.25195 1.6875 3.25195H6.375C6.375 2.42315 6.70424 1.6283 7.29029 1.04224C7.87634 0.456193 8.6712 0.126953 9.5 0.126953C10.3288 0.126953 11.1237 0.456193 11.7097 1.04224C12.2958 1.6283 12.625 2.42315 12.625 3.25195ZM9.5 1.68945C9.0856 1.68945 8.68817 1.85407 8.39515 2.1471C8.10212 2.44012 7.9375 2.83755 7.9375 3.25195H11.0625C11.0625 2.83755 10.8979 2.44012 10.6049 2.1471C10.3118 1.85407 9.9144 1.68945 9.5 1.68945ZM7.15625 7.93945V14.1895C7.15625 14.3967 7.23856 14.5954 7.38507 14.7419C7.53159 14.8884 7.7303 14.9707 7.9375 14.9707C8.1447 14.9707 8.34341 14.8884 8.48993 14.7419C8.63644 14.5954 8.71875 14.3967 8.71875 14.1895V7.93945C8.71875 7.73225 8.63644 7.53354 8.48993 7.38703C8.34341 7.24051 8.1447 7.1582 7.9375 7.1582C7.7303 7.1582 7.53159 7.24051 7.38507 7.38703C7.23856 7.53354 7.15625 7.73225 7.15625 7.93945ZM11.0625 7.1582C10.8553 7.1582 10.6566 7.24051 10.5101 7.38703C10.3636 7.53354 10.2812 7.73225 10.2812 7.93945V14.1895C10.2812 14.3967 10.3636 14.5954 10.5101 14.7419C10.6566 14.8884 10.8553 14.9707 11.0625 14.9707C11.2697 14.9707 11.4684 14.8884 11.6149 14.7419C11.7614 14.5954 11.8438 14.3967 11.8438 14.1895V7.93945C11.8438 7.73225 11.7614 7.53354 11.6149 7.38703C11.4684 7.24051 11.2697 7.1582 11.0625 7.1582Z" fill="white"/></svg>
                    </button>     
                </div>  
            </div>        
        </div>
    )
}
export default BasketItem