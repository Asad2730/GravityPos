import React from 'react'
import CustomInput from './input';


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const  FormItems = ({form,setForm,width}) => (

    <>
        {Object.entries(form).map(([key, value], index) => (
            <div key={index}>
                <div className='flex flex-row mb-1 mr-5'>
                    <h1 className='m-1 w-40'>{capitalizeFirstLetter(key)}</h1>
                    <CustomInput
                        onChange={setForm}
                        value={value}
                        field={key}
                        height={35}
                        width={width}
                    />
                </div>
            </div>
        ))}
    </>
);

