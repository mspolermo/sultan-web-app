import React, {FC, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { IGoods } from "../types/types";
import ProductItem from "../components/ProductItem";


type ProductCardParams = {
    id: string;
}

interface ProductCardProps {
    goods: IGoods[];
    onProductTypeChange?: (newType: string) => void;
}

const ProductCard: FC<ProductCardProps> = ({goods, onProductTypeChange}) => {
    
    
    const params = useParams<ProductCardParams>();
  
        //Basket
    const [productType, setProductType] = useState<undefined | string>('');
    useEffect(() => {
        if (productType !==undefined) {
            onProductTypeChange?.(productType.toString());
            setProductType(undefined)};
      }, [productType]);

    return (
        <div data-testid="productCard-page">
            <ProductItem
                good={goods[Number(params.id)]}
                goods={goods}
                onProductTypeChange={setProductType}
            />
        </div>
    );
};

export default ProductCard;