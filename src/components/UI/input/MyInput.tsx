import React, {FC} from "react";

interface MyInputProps {
    value: any;
    onChange: any;
    placeholder: string;
    type?:string;
    className?: string
}

const MyInput:FC<MyInputProps> = ({value, onChange, placeholder, type, className}) => {
    return (
        <input className={className} value={value} type={type} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    );
};

export default MyInput