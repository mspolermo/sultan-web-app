import React, {FC} from "react";
import { IGoods } from "../types/types";
import GoodsItem from "./GoodsItem";
import '../App.css'

interface GoodsListProps {
    goods: IGoods[]
};

const GoodsList: FC<GoodsListProps> = ({goods}) => {
    return (
        <div className="goods-list__list">
            {goods.map( good => 
              <GoodsItem key={good.id} good={good} />
            )}
        </div>
    );
};

export default GoodsList;