import React, {FC, useState} from "react";
import { IGoods } from "../types/types";
import '../App.css'
import { useNavigate } from "react-router-dom";


interface GoodsItemProps {
    good: IGoods;
    productTypeValue?: string;
    onProductTypeChange?: (newType: string) => void;
    goodsWithoutFilters?: IGoods[];
};

const GoodsItem: FC<GoodsItemProps> = ({good, goodsWithoutFilters, productTypeValue, onProductTypeChange}) => {
    const navigate = useNavigate();

    function addOrder(e:any, good:IGoods) {
        e.stopPropagation();
        onProductTypeChange?.((good.id).toString())
        // console.log(good.id)
    }

    // console.log(good.id - 1)
    //let index = good.id - 1

    //let index = goods?.findIndex ((find) => find.id == good.id)
    let index = goodsWithoutFilters?.findIndex ((find) => find.id == good.id)
    // console.log(goodsWithoutFilters)
    // console.log(index)

    return (
        <div 
        data-testid='catalog-element'
        onClick={() => navigate('/catalog/' + (index))}
        className="goods-list__item">
            <div className="goods-list__img-block">
                <img className="goods-list__img" src={good.image} alt="Img" />
            </div>
            {good.sizeType == 'weight' ? (
                <div className="goods-list__size">
                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3035 7.99994C12.7753 7.99994 12.2785 7.71869 12.0097 7.26869L10.0003 3.93743L7.9941 7.26869C7.72222 7.72181 7.22535 8.00306 6.69722 8.00306C6.5566 8.00306 6.41597 7.98431 6.2816 7.94369L2.00035 6.71868V12.2812C2.00035 12.7406 2.31285 13.1406 2.7566 13.2499L9.51285 14.9406C9.8316 15.0187 10.166 15.0187 10.4816 14.9406L17.2441 13.2499C17.6878 13.1374 18.0003 12.7374 18.0003 12.2812V6.71868L13.7191 7.94056C13.5847 7.98119 13.4441 7.99994 13.3035 7.99994ZM19.9472 4.49369L18.3378 1.28118C18.241 1.08743 18.0316 0.974934 17.816 1.00306L10.0003 1.99993L12.866 6.75306C12.9847 6.94993 13.2222 7.04368 13.4441 6.98118L19.6285 5.21556C19.9378 5.12493 20.0878 4.78118 19.9472 4.49369ZM1.66285 1.28118L0.0534711 4.49369C-0.0902789 4.78118 0.0628461 5.12493 0.369096 5.21243L6.55347 6.97806C6.77535 7.04056 7.01285 6.94681 7.1316 6.74993L10.0003 1.99993L2.1816 1.00306C1.96597 0.978059 1.75972 1.08743 1.66285 1.28118Z" fill="#3F4E65"/></svg>
                    <p className="goods-list__size-description">{good.size} г</p>
                </div>
                ) : (
                    <div className="goods-list__size">
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.1 14.0625C8.05312 14.3164 7.95234 14.5361 7.79766 14.7217C7.64297 14.9072 7.44375 15 7.2 15H1.8C1.55625 15 1.35938 14.9097 1.20938 14.729C1.05937 14.5483 0.95625 14.3262 0.9 14.0625L0 8.4375V6.5625C0 6.2793 0.0914062 6.04492 0.274219 5.85938C0.457031 5.67383 0.726562 5.49072 1.08281 5.31006C1.43906 5.12939 1.65937 5.00977 1.74375 4.95117C2.11875 4.67773 2.45625 4.35547 2.75625 3.98438C3.05625 3.61328 3.27656 3.22266 3.41719 2.8125H3.15C3.02812 2.8125 2.92266 2.76611 2.83359 2.67334C2.74453 2.58057 2.7 2.4707 2.7 2.34375V0.46875C2.7 0.341797 2.74453 0.231934 2.83359 0.13916C2.92266 0.0463867 3.02812 0 3.15 0H5.85C5.97187 0 6.07734 0.0463867 6.16641 0.13916C6.25547 0.231934 6.3 0.341797 6.3 0.46875V2.34375C6.3 2.4707 6.25547 2.58057 6.16641 2.67334C6.07734 2.76611 5.97187 2.8125 5.85 2.8125H5.58281C5.86406 3.60352 6.38437 4.28711 7.14375 4.86328C7.24687 4.95117 7.48125 5.08789 7.84687 5.27344C8.2125 5.45898 8.49609 5.64941 8.69766 5.84473C8.89922 6.04004 9 6.2793 9 6.5625V8.4375L8.1 14.0625Z" fill="#3F4E65"/></svg>
                        <p className="goods-list__size-description">{good.size} мл</p>
                    </div>
                )}
            <div className="goods-list__description">
                <span className="goods-list__title">{good.title}</span> 
                <span className="goods-list__title-additional">{good.desription}</span>
            </div>
            <div className="goods-list__info">
                <span className="goods-list__field-name">Штрихкод: </span>
                <span className="goods-list__field-value">{good.barcode}</span>
            </div>
            <div className="goods-list__info">
                <span className="goods-list__field-name">Производитель: </span>
                <span className="goods-list__field-value">{good.producer}</span>
            </div>
            <div className="goods-list__info">
                <span className="goods-list__field-name">Бренд: </span>
                <span className="goods-list__field-value">{good.brand}</span>
                </div>
            <div className="goods-list__bottom-item">
                <p className="goods-list__price">{good.price} ₸</p>
                <button data-testid='catalog-element-btn' onClick={(e) => addOrder(e, good)} className="goods-list__btn">
                    В корзину
                    <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.448 4.09209C24.2955 3.87908 24.0909 3.77258 23.8341 3.77258H7.48756L7.0439 2.61757C6.93156 2.23889 6.77908 1.91543 6.58649 1.6472C6.39389 1.37897 6.18926 1.18963 5.97259 1.07918C5.75592 0.968728 5.56734 0.893781 5.40684 0.854335C5.24635 0.814889 5.08585 0.795166 4.92536 0.795166H1.62717C1.41852 0.795166 1.24198 0.866169 1.09753 1.00817C0.953083 1.15018 0.880859 1.33163 0.880859 1.55253C0.880859 1.67876 0.912959 1.80104 0.977157 1.91938C1.04136 2.03772 1.13364 2.12844 1.25401 2.19155C1.37438 2.25467 1.49877 2.28622 1.62717 2.28622H4.92536C4.98955 2.28622 5.04974 2.29411 5.10591 2.30989C5.16209 2.32567 5.23832 2.39273 5.33462 2.51107C5.43092 2.62941 5.51117 2.80691 5.57537 3.04359L9.02832 12.5248C9.06042 12.6195 9.11258 12.7102 9.1848 12.797C9.25703 12.8838 9.34129 12.9508 9.43758 12.9982C9.53388 13.0455 9.6382 13.0692 9.75055 13.0692H20.1507C20.3112 13.0692 20.4596 13.0218 20.5961 12.9272C20.7325 12.8325 20.8248 12.7142 20.8729 12.5722L24.5563 4.79029C24.6365 4.53783 24.6004 4.3051 24.448 4.09209ZM19.621 11.5545H10.3524L7.89682 5.2873H22.7266L19.621 11.5545ZM18.2328 13.8905C17.7031 13.8905 17.2497 14.0759 16.8726 14.4467C16.4954 14.8175 16.3068 15.2633 16.3068 15.784C16.3068 16.3047 16.4954 16.7504 16.8726 17.1212C17.2497 17.492 17.7031 17.6774 18.2328 17.6774C18.7624 17.6774 19.2158 17.492 19.593 17.1212C19.9701 16.7504 20.1587 16.3047 20.1587 15.784C20.1587 15.2633 19.9701 14.8175 19.593 14.4467C19.2158 14.0759 18.7624 13.8905 18.2328 13.8905ZM11.2993 13.8905C10.9462 13.8905 10.6212 13.9773 10.3243 14.1509C10.0274 14.3245 9.79469 14.5532 9.62617 14.8373C9.45765 15.1213 9.37339 15.4368 9.37339 15.784C9.37339 16.3047 9.56197 16.7504 9.93913 17.1212C10.3163 17.492 10.7697 17.6774 11.2993 17.6774C11.829 17.6774 12.2824 17.492 12.6595 17.1212C13.0367 16.7504 13.2253 16.3047 13.2253 15.784C13.2253 15.6577 13.2133 15.5315 13.1892 15.4053C13.1651 15.2791 13.129 15.1607 13.0808 15.0503C13.0327 14.9398 12.9725 14.8333 12.9003 14.7308C12.8281 14.6282 12.7478 14.5335 12.6595 14.4467C12.5713 14.36 12.475 14.2811 12.3706 14.2101C12.2663 14.1391 12.158 14.0799 12.0456 14.0326C11.9333 13.9852 11.8129 13.9497 11.6845 13.9261C11.5561 13.9024 11.4277 13.8905 11.2993 13.8905Z" fill="white"/></svg>
                </button>
            </div>
      </div>
    )
}

export default GoodsItem;