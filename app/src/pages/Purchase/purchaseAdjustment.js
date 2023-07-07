import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import CustomDropDown from '../../components/ui/dropDown';
import SideNav from '../../components/navbar/sideNavBar';
import { purchase_navigation_items } from '../../components/navbar/navBarItems';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PurchaseAdjustment() {
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
            <div className='flex flex-row'>
                <div className='w-auto'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <div className='w-screen flex flex-col h-[52rem]' style={{ backgroundColor: secondary_color }}>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='flex flex-row'>
                                        <div className='py-6' style={{ background: secondary_color }}>
                                            <SideNav navigation={purchase_navigation_items} />
                                        </div>
                                        <div className='flex flex-col justify-center items-center py-6 pr-6 '>
                                            <div className='flex flex-col ml-4'>
                                                <div className='flex flex-row my-2 space-x-2'>
                                                    <h1>Id</h1>
                                                    <CustomInput height={35} />
                                                    <h2>Invoice No</h2>
                                                    <CustomInput height={35} />
                                                    <h2>Invoice Date</h2>
                                                    <span className='block w-full rounded-md border-2 bg-white border-gray-300 py-1.5
                                                      shadow-sm placeholder:text-gray-400 px-2 ml-2' style={{ height: 35 }}>
                                                        <DatePicker selected={selectedDate} onChange={handleDateChange} />
                                                    </span>
                                                    <h2>Supplier Id</h2>
                                                    <CustomInput height={35} />
                                                </div>
                                                <div className='flex flex-row'>
                                                    <span className='m-3'>Supplier Name</span>
                                                    <CustomInput height={35} />
                                                    <span className='m-3'>Godown Id</span>
                                                    <CustomInput height={35} />
                                                    <span className='m-3'>GRN#</span>
                                                    <CustomInput height={35} />
                                                    <span className='m-3'>Transaction No</span>
                                                    <CustomInput height={35} />
                                                </div>
                                                <div className='flex flex-row mt-2'>
                                                    <span className='m-3'>Code</span>
                                                    <CustomInput height={35} />
                                                    <span className='m-3'>Name</span>
                                                    <CustomInput height={35} />
                                                    <span className='m-3'>Batch#</span>
                                                    <CustomInput height={35} />
                                                    <span className='m-3'>Expiry</span>
                                                    <CustomInput height={35} />
                                                </div>

                                                <div className='flex flex-row mt-6'>
                                                    <span className='ml-4'>Bonus</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Qty</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Amount</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>KnownQty</span>
                                                    <CustomInput height={35} />
                                                </div>


                                                <div className='flex flex-row mt-6'>
                                                    <span className='ml-4'>RowId</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>GodownId</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>ReplacementItem</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>CodeName</span>
                                                    <CustomInput height={35} />
                                                </div>

                                                <div className='flex flex-row mt-6'>
                                                    <span className='ml-4'>P_price</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>GST</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Disc%</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>S_Price</span>
                                                    <CustomInput height={35} />
                                                </div>


                                                <div className='flex flex-row mt-6'>
                                                    <span className='ml-4'>P_price</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>GST</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Disc%</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>S_Price</span>
                                                    <CustomInput height={35} />
                                                </div>

                                                <div className='flex flex-row mt-6'>
                                                    <span className='ml-4'>P_price</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>GST</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Disc%</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>S_Price</span>
                                                    <CustomInput height={35} />
                                                </div>

                                                <div className='flex flex-row mt-6'>
                                                    <span className='ml-4'>Batch#</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Expiry</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Godown</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Pack</span>
                                                    <CustomInput height={35} />
                                                </div>

                                                <div className='flex flex-row mt-6'>
                                                    <span className='ml-4'>Bonus</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Qty</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>S_price1</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Amount</span>
                                                    <CustomInput height={35} />
                                                </div>


                                                <div className='flex flex-row mt-6'>
                                                    <span className='ml-4'>LoosePurchase</span>
                                                    <CustomInput height={35} />
                                                    <span className='ml-4'>Calculate</span>
                                                    <CustomInput height={35} />

                                                </div>


                                                <div>
                                                     <h1>Before</h1>
                                                    <div className='flex flex-row mt-6'>
                                                        <span className='ml-4'>Courier/Adda changes</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>FlatDisc%</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>ItemDisc%</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>TotalBonus</span>
                                                        <CustomInput height={35} />
                                                    </div>

                                                    <div className='flex flex-row mt-6'>
                                                        <span className='ml-4'>TotalQty</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>OtherChanges</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>FlatGST</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>ItemGST</span>
                                                        <CustomInput height={35} />
                                                    </div>

                                                    <div className='flex flex-row mt-6'>
                                                        <span className='ml-4'>TotalItem</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>Total = Of Item</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>NetPayable</span>
                                                        <CustomInput height={35} />
                                                    </div>

                                                </div>


                                                <div>
                                                     <h1>After</h1>
                                                    <div className='flex flex-row mt-6'>
                                                        <span className='ml-4'>Courier/Adda changes</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>FlatDisc%</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>ItemDisc%</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>TotalBonus</span>
                                                        <CustomInput height={35} />
                                                    </div>

                                                    <div className='flex flex-row mt-6'>
                                                        <span className='ml-4'>TotalQty</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>OtherChanges</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>FlatGST</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>ItemGST</span>
                                                        <CustomInput height={35} />
                                                    </div>

                                                    <div className='flex flex-row mt-6'>
                                                        <span className='ml-4'>TotalItem</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>Total = Of Item</span>
                                                        <CustomInput height={35} />
                                                        <span className='ml-4'>NetPayable</span>
                                                        <CustomInput height={35} />
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer>
                            <div className='h-[2.3rem] w-full'></div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}
