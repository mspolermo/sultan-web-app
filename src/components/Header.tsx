import React, {FC, useMemo, useState} from "react";
import '../App.css'


interface HeaderProps {
    cost:number;
    productTypeValue?: string;
    onProductTypeChange?: (newType: string) => void;
};



const Header: FC<HeaderProps> = ({cost, productTypeValue, onProductTypeChange}) => {


    return (
        <div>
            <div className="header">MAIN HEADER
                <button>Корзина: {cost} ₸</button>
            </div>
            
        </div>
    )
}

export default Header;