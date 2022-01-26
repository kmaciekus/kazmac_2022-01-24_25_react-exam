import React from 'react'
import { FormField } from "../ui/FormFIeld/FormField";

export const TextArea = ({label, name, onChange, placeholder, ...rest}) => {

    return (
        <FormField>
            <label htmlFor={name}>{label || name}</label>
            <textarea onChange={onChange} placeholder={placeholder || name}></textarea>
        </FormField>
    );
};
