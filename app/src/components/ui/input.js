import React from 'react';

import { handleChange } from "../../hooks/handleChange";

export default function CustomInput({ placeholder, type, field, value, onChange, required, readOnly }) {


  const handleOnChange = (e) => {
    const { value } = e.target;
    if (onChange) {
      handleChange(field, value, onChange);
    }
  };



  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required={required}
      className='mt-1 block w-full py-2 px-3 border
       border-gray-300 bg-white rounded-md shadow-sm focus:outline-none
        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm '
      readOnly={readOnly}
    />

  );
}
