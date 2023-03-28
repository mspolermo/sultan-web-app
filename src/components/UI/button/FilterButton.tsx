import { type } from "os";
import React, {FC} from "react";

interface FiletrButtonProps {
    name: string;
    value: any;
    careType?: string;
    onClick?: any;
}


const FilterButton: FC<FiletrButtonProps> = ({name, value, onClick, careType}) => {
    return (
        <button value={value} onClick={(event) => onClick({careType})}>{name}
        </button>
    )
}

export default FilterButton;