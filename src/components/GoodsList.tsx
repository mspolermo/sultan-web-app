import React, {FC, useEffect, useMemo, useState} from "react";
import { IGoods } from "../types/types";
import GoodsItem from "./GoodsItem";
import '../App.css'

interface GoodsListProps {
    goods: IGoods[];
    productTypeValue?: string;
    onProductTypeChange?: (newType: string) => void;
};


const GoodsList: FC<GoodsListProps> = ({goods, productTypeValue, onProductTypeChange}) => {
        //BasketLogic
    const [productType, setProductType] = useState<undefined | string>('');
    
    useEffect(() => {
        if (productType !==undefined) {
            onProductTypeChange?.(productType.toString())
            setProductType(undefined)
        }
      }, [productType]);


    return (
        <div className="goods-list__list">
            {goods.map( good => 
              <GoodsItem 
                key={good.id} 
                good={good}
                productTypeValue={productType}
                onProductTypeChange={setProductType}
                />
            )}
        </div>
    );
};

export default GoodsList;