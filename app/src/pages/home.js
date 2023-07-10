import React, { useEffect, useState } from 'react'
import Table from '../components/table/table';
import CustomInput from '../components/ui/input';
import IconButton from '../components/ui/iconButton';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineReload, AiOutlinePauseCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { secondary_color } from '../utils/colors';
import { GiCancel } from "react-icons/gi";
import { BsSendCheck } from "react-icons/bs";
import CustomDropDown from '../components/ui/dropDown';
import logo from '../assets/logo_normal.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const tr = [
    {
        code: '1', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
        qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10', price: '100', amount: '90'
    },
    {
        code: '2', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
        qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10', price: '100', amount: '90'
    },
    {
        code: '3', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
        qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10', price: '100', amount: '90'
    },
    {
        code: '4', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
        qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10', price: '100', amount: '90'
    },

]

const th = [
    'Code',
    'Product Name',
    'Bonus',
    'Qty',
    'Batch#',
    'Expiry Date',
    'D%',
    'Disc',
    'Price',
    'Amount'
];


const items = [
    { name: 'cash' },
    { name: 'Card' },
    { name: 'easy pasa' },
]

const iconSize = 40;


export default function Home() {

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


    return (
        <>
            <div className='flex flex-col'>
                <div className='flex flex-row '>
                    <div className='w-[80%] h-[43rem] flex flex-col' style={{ backgroundColor: secondary_color }}>
                        <div className='flex flex-row justify-center items-center'>
                            <img src={logo} className='w-60 h-16 ml-5' />
                            <div className='flex flex-col mr-10 ml-4'>
                                <div className='flex flex-row my-2 space-x-2'>
                                    <h1>Bill No.</h1>
                                    <CustomInput
                                        height={35}
                                    />
                                    <CustomInput
                                        height={35}
                                    />
                                    <h2 >Date & Time</h2>

                                    <span className='block w-full rounded-md border-2 bg-white border-gray-300 py-1.5
                                      shadow-sm placeholder:text-gray-400 px-2 ml-2' style={{height:35}}>   
                                        <DatePicker selected={selectedDate} onChange={handleDateChange} />
                                    </span>
                                    <CustomInput
                                        readOnly={false}
                                        value={currentTime}
                                        height={35}
                                    />


                                </div>
                                <div className='flex flex-row '>
                                    <span className='m-3 '>Client Type</span>
                                    <CustomDropDown
                                        placeHolder={'Cash'}
                                        items={items}
                                    />
                                    <span className='m-3'>Client Name</span>
                                    <CustomInput
                                        height={35} />
                                </div>
                                <div className='flex flex-row mt-2'>
                                    <span className='m-3'>Code</span>
                                    <CustomInput
                                        height={35} />

                                    <span className='m-3'>Name</span>
                                    <CustomInput
                                        height={35} />

                                    <span className='m-3'>Bonus</span>
                                    <CustomInput
                                        height={35} />
                                    <span className='m-3'>Qty</span>
                                    <CustomInput
                                        height={35} />

                                    <span className='m-3'>Disc%</span>
                                    <CustomInput
                                        height={35} />

                                    <span className='m-3'>Up</span>
                                    <CustomInput
                                        height={35} />

                                </div>
                                <div className='flex flex-row mt-2'>
                                    <CustomInput
                                        height={35}
                                    />
                                    <CustomInput type={'checkbox'} />
                                    <span className='ml-4 '>Check Price</span>
                                    <span className='ml-4' />
                                    <CustomInput type={'checkbox'} />
                                    <span className='ml-4'>Search by generic</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-between mb-5">
                            <div className="">
                                <Table
                                    th={th}
                                    tr={tr}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-[20%] h-auto' style={{ backgroundColor: secondary_color }}>
                        <div className='flex flex-row'>
                            <IconButton
                                Icon={AiOutlineDelete}
                                title={'Clear Sale'}
                                size={iconSize}
                                w={40}
                                h={28}
                            />
                            <IconButton
                                Icon={GiCancel}
                                title={'Cancel Item'}
                                size={iconSize}
                                w={40}
                                h={28}
                            />
                        </div>
                        <div className='flex flex-row'>
                            <IconButton
                                Icon={AiOutlineReload}
                                title={'Return'}
                                size={iconSize}
                                w={40}
                                h={28}

                            />
                            <IconButton
                                Icon={AiOutlineEdit}
                                title={'Edit'}
                                size={iconSize}
                                w={40}
                                h={28}

                            />
                        </div>
                        <div className='flex flex-row'>
                            <IconButton
                                Icon={AiOutlinePauseCircle}
                                title={'Hold'}
                                size={iconSize}
                                w={40}
                                h={28}
                            />
                            <IconButton
                                Icon={CiCircleRemove}
                                title={'Cancellation'}
                                size={iconSize}
                                w={40}
                                h={28}

                            />
                        </div>
                        <div className='flex flex-row'>
                            <IconButton
                                Icon={BsSendCheck}
                                title={'pay'}
                                size={60}        
                                w={'full'}
                                h={28}
                            />
                        </div>
                    </div>

                </div>

                <footer>
                    <div className='flex flex-row h-[11.3rem] '>
                        <div className='flex flex-col w-1/5'>
                            <div className='flex flex-row  items-center justify-center m-2'>
                                <span className='text-white w-40'>No of item</span>
                                <CustomInput
                                />
                            </div>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-40'> Total Qty </span>
                                <CustomInput />
                            </div>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52'> Add amount </span>
                                <CustomInput />
                            </div>
                        </div>
                        <div className='flex flex-col w-1/5'>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52'>  Total amount  </span>
                                <CustomInput />
                            </div>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52 mb-4 '> Total items</span>
                                <CustomInput />
                            </div>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52 mb-4 '>  Item disc</span>
                                <CustomInput />
                            </div>
                        </div>
                        <div className='flex flex-col w-1/5'>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52 mb-4 '>  Previous bal </span>
                                <CustomInput />
                            </div>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52 mb-4 '>  Paid amount </span>
                                <CustomInput />
                            </div>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52 mb-4 '>  Item disc</span>
                                <CustomInput />
                            </div>
                        </div>
                        <div className='flex flex-col w-1/5'>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52 '> Disc By% </span>
                                <CustomInput />
                            </div>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52 '> Disc By LS </span>
                                <CustomInput />
                            </div>
                            <div className='flex flex-row  items-center justify-center  m-2'>
                                <span className='text-white w-52 '> Balance </span>
                                <CustomInput />
                            </div>
                        </div>
                        <div className='flex flex-col w-1/5 justify-center items-center text-center'>
                            <span className='text-white w-52  text-6xl font-bold'> 000</span>
                            <span className='text-white w-52  text-3xl font-bold'> Items</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}



