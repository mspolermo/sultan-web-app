import React, {FC} from "react";

interface MyInputProps {
    value: any;
    onChange: any;
    placeholder: string;
}

const MyInput:FC<MyInputProps> = ({value, onChange, placeholder}) => {
    return (
        <input value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    );
};

export default MyInput