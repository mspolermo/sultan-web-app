import React, {FC, useEffect, useMemo, useState} from "react";
import '../App.css'
import CatalogBody from "../components/CatalogBody";
import { IGoods } from "../types/types";

interface CatalogProps {
    goods: IGoods[];
    productTypeValue?: string;
    onProductTypeChange?: (newType: string) => void;
}

const Catalog: FC<CatalogProps> = ({goods, productTypeValue, onProductTypeChange}) => {

    const [productType, setProductType] = useState<undefined | string>('');
    useEffect(() => {
        if (productType !==undefined) {
            onProductTypeChange?.(productType.toString())
            setProductType(undefined)
        }
      }, [productType]);

    
    return (
        <div>
            <CatalogBody
                goods={goods} 
                productTypeValue={productType}
                onProductTypeChange={setProductType}
            />
            <div className="footer">FOOTER</div>
      </div>
    );
};

export default Catalog;