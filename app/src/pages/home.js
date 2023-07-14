import React, { useEffect, useState } from 'react'
import Table from '../components/table/table';
import CustomInput from '../components/ui/input';
import IconButton from '../components/ui/iconButton';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineReload, AiOutlinePauseCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import {  secondary_color } from '../utils/colors';
import { GiCancel } from "react-icons/gi";
import { BsSendCheck } from "react-icons/bs";
import CustomDropDown from '../components/ui/dropDown';
import logo from '../assets/logo_normal.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import HomeFooter from '../components/footer/homeFooter';




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

const iconBtns = [
    {name:'Clear Sale',icon:AiOutlineDelete,w:40,h:28},
    {name:'Cancel item',icon:GiCancel,w:40,h:28},
    {name:'Return',icon:AiOutlineReload,w:40,h:28},
    {name:'Edit',icon:AiOutlineEdit,w:40,h:28},
    {name:'Hold',icon:AiOutlinePauseCircle,w:40,h:28},
    {name:'Cancellation',icon:CiCircleRemove,w:40,h:28},
    {name:'Pay',icon:BsSendCheck,w:60,h:28},
]

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
                    <div className=' h-[43rem] flex flex-col' style={{ backgroundColor: secondary_color }}>
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
                                      shadow-sm placeholder:text-gray-400 px-2 ml-2' style={{ height: 35 }}>
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
                        <div className="p-1">
                            <div className="w-full">
                                <Table
                                    th={th}
                                    tr={tr}
                                />
                            </div>
                        </div>

                        
                    </div>
                    <div  style={{ backgroundColor: secondary_color }}>
                     
                     <div className='grid grid-cols-2'>
                        {
                            iconBtns.map((i)=>(
                                <div className='flex flex-wrap'>                             
                                <IconButton
                                Icon={i.icon}
                                title={i.name}
                                 size={iconSize}
                                 w={i.w}
                                 h={i.h}
                                direction={'col'}                             
                               />

                              </div>
                            ))
                        }
                     </div>                                              

                 </div>
                
                
                </div>

                    <HomeFooter/>  
           
            </div>
        </>
    )
}



