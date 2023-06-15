import React from 'react';

import { handleChange } from "../../hooks/handleChange";

export default function CustomInput({ placeholder, type, field, value, onChange, required, height }) {

  const checkbox = 'w-5 h-5 mt-2 ml-10';
  const defaultField = `block w-full rounded-md border-0 py-1.5 shadow-sm placeholder:text-gray-400 px-2 ml-2`

  const isCheckBox = type === 'checkbox';

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (onChange) {
      handleChange(field, value, onChange);
    }
  };

  return (
    <input
      style={{height:height}}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required={required}
      className={isCheckBox ? checkbox : defaultField}
    />
  );
}
