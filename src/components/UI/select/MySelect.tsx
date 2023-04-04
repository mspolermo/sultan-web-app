import { type } from "os";
import React, {FC} from "react";

interface MySelectProps {
    options: OptionsPropery[];
    defaultValue: string;
    value: string;
    onChange: (sort: string) => void;
    className?: string;
}

interface OptionsPropery {
    value: string;
    name: string;
}

const MySelect: FC<MySelectProps> = ({options, defaultValue, value, onChange, className}) => {
    return (
        <select className={className} value={value} onChange = {event => onChange(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map( option =>
                <option key={option.value}
                value={option.value}>
                    {option.name}
                </option>)}
        </select>
    )
}

export default MySelect;