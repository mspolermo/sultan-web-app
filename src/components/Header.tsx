import React, {FC, useMemo, useState} from "react";
import '../App.css'


interface HeaderProps {
    finalPrice:number;
    productTypeValue?: string;
    onProductTypeChange?: (newType: string) => void;
};



const Header: FC<HeaderProps> = ({finalPrice, productTypeValue, onProductTypeChange}) => {


    return (
        <div>
            <div className="header">MAIN HEADER
                <button>Корзина: {finalPrice} ₸</button>
            </div>
            
        </div>
    )
}

export default Header;