import React, {FC} from "react";
import goods from '../goods/goods.json'
import '../App.css'
import GoodsItem from "../components/GoodsItem";

const ProductCard: FC = () => {
    return (
        <div>
            <div className="header">HEADER OF PRODUCT CARD PAGE</div>
            <GoodsItem good={goods[1]} />
            <div className="footer">FOOTER</div>
        </div>
    );
};

export default ProductCard;