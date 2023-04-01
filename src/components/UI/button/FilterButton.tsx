import { type } from "os";
import React, {FC, useState} from "react";

interface FiletrButtonProps {
    name: string;
    value: any;
    careType?: string;
    onClick?: any;
}


const FilterButton: FC<FiletrButtonProps> = ({name, value, onClick, careType}) => {
    const [clickCount, setClickCount] = useState(0);

    function clickHandler (event:any) {
        onClick({careType})
        setClickCount(clickCount + 1)

        if (clickCount>0) {
            setClickCount(0)
            careType='requerType'
            onClick({careType})
        }
    }


    return (
        <button 
            value={value} 
            onClick={clickHandler}
        >{name}
        </button>
    )
}

export default FilterButton;