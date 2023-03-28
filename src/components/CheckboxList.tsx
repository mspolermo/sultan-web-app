import React, {FC} from "react";
import MyCheckbox from "./UI/checkbox/MyCheckbox";

interface CheckboxListProps {
}

const CheckboxList:FC<CheckboxListProps> = () => {
    return (
        <div>
            <MyCheckbox />
            <MyCheckbox />
            <MyCheckbox />
            <MyCheckbox />
        </div>
    );
};

export default CheckboxList