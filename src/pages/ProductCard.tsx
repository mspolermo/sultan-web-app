import React, {FC, useEffect, useState} from "react";
import '../App.css'
import GoodsItem from "../components/GoodsItem";
import { useNavigate, useParams } from "react-router-dom";
import { IGoods } from "../types/types";
import ProductItem from "../components/ProductItem";


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

    //console.log(params)


    return (
        <div data-testid="productCard-page">
            {/* <button onClick={() => {navigate('/')}}>Назад</button> */}
            <ProductItem
                good={goods[Number(params.id)]}
                goods={goods}
                productTypeValue={productType}
                onProductTypeChange={setProductType}
            />
        </div>
    );
};

export default ProductCard;