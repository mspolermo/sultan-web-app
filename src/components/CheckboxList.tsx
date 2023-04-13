import React, {FC, useMemo, useState} from "react";
import { IGoods } from "../types/types";
import MyCheckbox from "./UI/checkbox/MyCheckbox";

interface CheckboxListProps {
    value: any;
    filtredGoodsList: IGoods[];
    onClick?: any;
    className?: string;
}


const CheckboxList:FC<CheckboxListProps> = ({value, filtredGoodsList, onClick, className}) => {

    let producersArray:any[] = filtredGoodsList.map( good => good.producer);

    producersArray = producersArray.reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) {
          acc[i] += 1;
        } else {
          acc[i as keyof typeof acc] = 1;
        }
        return acc;
    }, []);

    let recycledproducersArray = [];
    for (var key in producersArray) {
        recycledproducersArray.push([key, producersArray[key]]);
    };

    let checkboxClassnameCount = 1;
    const [buttonChecker, setButtonChecker] = useState(false)
    const [buttonName, setButtonName] = useState('Показать все')

    function clickHandler() {
        setButtonChecker(!buttonChecker)
        if (!buttonChecker) {
            setButtonName('Скрыть')
        } else {
            setButtonName('Показать все ')
        }
    }

    return (
        <div>
            {recycledproducersArray.map((producer) =>          
                <MyCheckbox 
                    key={producer[0]} 
                    producer={producer}
                    onClick = {onClick}
                    buttonChecker={buttonChecker}
                    checkboxClassnameCount = {checkboxClassnameCount++}
                    className={className}
                />)
            }
            <button onClick={clickHandler} className={className + 'hidden-btn'}>
                {buttonName}
            </button>
        </div>
    );
};

export default CheckboxList