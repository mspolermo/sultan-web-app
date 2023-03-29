import React, {FC, useState} from "react";
import { IGoods } from "../../../types/types";

interface MyCheckboxProps {
    key: string;
    producer: any;
    onClick?: any;
    checkboxClassnameCount: number;
    buttonChecker: boolean;
};

const MyCheckbox:FC<MyCheckboxProps> = ({producer, onClick, checkboxClassnameCount, buttonChecker}) => {
    let checkboxClassName: string;

    if (checkboxClassnameCount > 4) {
        checkboxClassName = 'checkbox_hidden'
    } else {
        checkboxClassName = 'checkbox'
    }
    if (buttonChecker) {
        checkboxClassName = 'checkbox'
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
                
            />
            <label htmlFor={producerName}>{producerName} ({producer[1]})</label>
        </div>
    );
};

export default MyCheckbox;