import React, {FC, useState} from "react";

interface CaretypeCheckboxProps {
    name: string,
    value: string,
    onClick: any;

}

const CaretypeCheckbox: FC<CaretypeCheckboxProps> = ({name, value, onClick}) => {


    const [checked, setChecked] = useState(true);

    function clickHandler () {
        if (checked==true) {
           onClick(['add', value])
           setChecked(!checked)
           
        } else {
            onClick(['remove', value]) 
            setChecked(!checked)
        }
    };

    return (
        <div>
            <input type="checkbox" name={value} onClick={ (event) => clickHandler()}/>
            <label htmlFor={value}>{name}</label>    
        </div>
    )
}

export default CaretypeCheckbox