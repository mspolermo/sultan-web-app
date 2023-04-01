import React, {FC, useEffect, useState} from "react";
//import goods from '../goods/goods.json'
import '../App.css'
import GoodsItem from "../components/GoodsItem";
import { useNavigate, useParams } from "react-router-dom";
import { IGoods } from "../types/types";


type ProductCardParams = {
    id: string;
}

interface ProductCardProps {
    goods: IGoods[];
    productTypeValue?: string;
    onProductTypeChange?: (newType: string) => void;
}

const ProductCard: FC<ProductCardProps> = ({goods, productTypeValue, onProductTypeChange}) => {
    const params = useParams<ProductCardParams>();
    const navigate = useNavigate();
  
        //Basket
    const [productType, setProductType] = useState<undefined | string>('');
    useEffect(() => {
        if (productType !==undefined) {
            onProductTypeChange?.(productType.toString())
            //console.log(productType)
            //добавил setProductType(undefined)
            setProductType(undefined)}
      }, [productType]);


    return (
        <div>
            <button onClick={() => {navigate('/')}}>Назад</button>
            <GoodsItem 
                good={goods[Number(params.id)]}
                productTypeValue={productType}
                onProductTypeChange={setProductType}
            />
            <div className="footer">FOOTER</div>
        </div>
    );
};

export default ProductCard;