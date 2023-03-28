import React, {FC} from "react";
import goods from '../goods/goods.json'
import '../App.css'
import GoodsItem from "../components/GoodsItem";
import { useNavigate, useParams } from "react-router-dom";

type ProductCardParams = {
    id: string;
}

const ProductCard: FC = () => {
    const params = useParams<ProductCardParams>();
    const navigate = useNavigate();

    return (
        <div>
            <div className="header">HEADER OF PRODUCT CARD PAGE</div>
            <button onClick={() => {navigate('/')}}>Назад</button>
            <GoodsItem 
                // onClick={(goods) => navigate('/catalog/' + params.id)}
                good={goods[Number(params.id)]} />
            <div className="footer">FOOTER</div>
        </div>
    );
};

export default ProductCard;