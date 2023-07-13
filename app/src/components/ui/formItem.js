import React, { useEffect, useState } from 'react'
import CustomInput from './input';
import CustomDropDown from './dropDown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const FormItems = ({ form, setForm, width, ddlItems,style }) => {
    
  
    const dateStyle = `block w-${width} rounded-md border-2 
    border-gray-300 py-1.5 shadow-sm placeholder:text-gray-400 px-2 ml-2`;

    const className = style === undefined?'flex flex-row mb-1 mr-5':style;

    const [currentTime, setCurrentTime] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date().toLocaleTimeString('en-US', {
                timeZone: 'Asia/Karachi',
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            });
            setCurrentTime(time);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const DateInput = () => (
        <DatePicker selected={selectedDate} onChange={handleDateChange} 
        className={dateStyle}/>
    );
    

    const dropDown = () => (
        <CustomDropDown items={ddlItems} />
    );

    const renderFormField = (key, item) => {
        switch(item.type) {
            case 'date':
                return <DateInput/>;
            case 'time':
                return (
                    <CustomInput
                        onChange={setForm}
                        value={currentTime}
                        field={key}
                        height={35}
                        width={width}
                        readOnly={false}
                    />
                );
            case 'ddl':
                return dropDown();
            case 'date & time':
                return (
                    <>
                        <DateInput/>
                        <CustomInput
                            onChange={setForm}
                            value={currentTime}
                            field={key}
                            height={35}
                            width={width}
                            readOnly={false}
                        />
                    </>
                );
            // case 'checkbox':
            //     return (
            //         <CustomInput
            //            type={'checkbox'}
            //            onChange={setForm}
            //            value={item.value}
            //         />
                  
            //     );
            default:
                return (
                    <CustomInput
                        onChange={setForm}
                        value={item.value}
                        field={key}
                        height={35}
                        width={width}
                        readOnly={item.readonly}
                        type={item.type}
                    />
                );
        }
    };
    
    

    return (
        <>
            {Object.entries(form).map(([key, item], index) => (
                <div key={index}>
                    <div className={className}>           
                        <h1 className='m-1 w-40'>{capitalizeFirstLetter(key)}</h1>
                        {renderFormField(key, item)}
                    </div>
                </div>
            ))}
        </>
    );
};

