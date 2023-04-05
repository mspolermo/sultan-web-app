import React, {FC, useState} from "react";
import { IGoods } from "../../../types/types";

interface MyCheckboxProps {
    key: string;
    producer: any;
    onClick?: any;
    checkboxClassnameCount: number;
    buttonChecker: boolean;
    className?: string;
};

const MyCheckbox:FC<MyCheckboxProps> = ({producer, onClick, checkboxClassnameCount, buttonChecker, className}) => {
    let checkboxClassName: string;

    if (checkboxClassnameCount > 4) {
        checkboxClassName = className + 'checkbox_hidden'
    } else {
        checkboxClassName = className + 'checkbox'
    }
    if (buttonChecker) {
        checkboxClassName = className + 'checkbox'
    }

    
    let producerName = producer[0];
    const [checked, setChecked] = useState(true);

    function clickHandler () {
        if (checked==true) {
           onClick(['add', producerName]) 
           setChecked(!checked)
        } else {
            onClick(['remove', producerName]) 
            setChecked(!checked)
        }
    };

    return (
        <div className={checkboxClassName}>
            <input 
                type="checkbox" 
                name={producerName}
                onClick={ (event) => clickHandler()}
                className={className + 'box'}
            />
            <label htmlFor={producerName} className={className + 'producer'}>{producerName} </label>
            <label htmlFor={producerName} className={className + 'count'}>({producer[1]})</label>
        </div>
    );
};

export default MyCheckbox;