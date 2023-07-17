import React, { useEffect, useState } from 'react'
import CustomInput from './input';
import CustomDropDown from './dropDown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomCheckBox from './customCheckBox';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const FormItems = ({ form, setForm, ddlItems, style }) => {


    const dateStyle =`mt-1 block w-full py-2 px-3 border
    border-gray-300 bg-white rounded-md shadow-sm focus:outline-none
     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`;

    const className = style === undefined ? 'flex flex-row mb-1 w-auto' : style;

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
            className={dateStyle} />
    );


    const dropDown = (key) => (
        <CustomDropDown items={ddlItems} placeHolder={key} />
    );

    const renderFormField = (key, item) => {
        switch (item.type) {
            case 'date':
                return <DateInput />;
            case 'time':
                return (
                    <CustomInput
                        onChange={setForm}
                        value={currentTime}
                        field={key}
                        readOnly={false}
                    />
                );
            case 'texts':
                return (
                    <>
                        <CustomInput
                            onChange={setForm}
                            value={item.value}
                            field={key}
                            readOnly={item.readOnly}
                            type={'text'}
                        />
                        <CustomInput
                            onChange={setForm}
                            value={item.value}
                            field={key}
                            readOnly={item.readOnly}
                            type={'text'}
                        />
                    </>
                );
            case 'ddl':
                return dropDown(item?.title);
            case 'date & time':
                return (
                    <>
                        <DateInput />
                        <CustomInput
                            onChange={setForm}
                            value={currentTime}
                            field={key}
                            readOnly={false}
                        />
                    </>
                );
             
                case 'checkbox':return(
                    <CustomCheckBox
                     onChange={setForm}
                     value={item.value}
                     field={key}
                     readOnly={item.readonly}
                   
                    />
                );

            default:
                return (
                    <CustomInput
                        onChange={setForm}
                        value={item.value}
                        field={key}
                        readOnly={item.readonly}
                        type={item.type}
                    />
                );
        }
    };



    return (
        <>
            {Object.entries(form).map(([key, item], index) => (
                <div key={index} className='w-auto'>
                    <div className={className}>
                        <h1 className='m-1 w-36'>{capitalizeFirstLetter(key)}</h1>
                        {renderFormField(key, item)}
                    </div>
                </div>
            ))}
        </>
    );
};

