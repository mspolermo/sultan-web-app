import { type } from "os";
import React, {FC} from "react";

interface MySelectProps {
    options: OptionsPropery[];
    defaultValue: string;
    value: string;
    onChange: (sort: string) => void;
}

interface OptionsPropery {
    value: string;
    name: string;
}

const MySelect: FC<MySelectProps> = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange = {event => onChange(event.target.value)}>
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