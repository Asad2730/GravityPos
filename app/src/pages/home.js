import React, { useState } from 'react'
import Table from '../components/table/table';
import IconButton from '../components/ui/iconButton';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineReload, AiOutlinePauseCircle } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";
import { BsSendCheck } from "react-icons/bs";
import { FormItems } from '../components/ui/formItem';





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
    { name: 'Clear Sale', icon: AiOutlineDelete, w: 40, h: 28 },
    { name: 'Cancel item', icon: GiCancel, w: 40, h: 28 },
    { name: 'Return', icon: AiOutlineReload, w: 40, h: 28 },
    { name: 'Edit', icon: AiOutlineEdit, w: 40, h: 28 },
    { name: 'Hold', icon: AiOutlinePauseCircle, w: 40, h: 28 },
    { name: 'Cancellation', icon: CiCircleRemove, w: 40, h: 28 },
    { name: 'Pay', icon: BsSendCheck, w: 60, h: 28 },
]

export default function Home() {


    const [formInitialValues, setFormValues] = useState({
        Bill_No: { value: '', type: 'texts', readonly: true },
        Date_Time: { value: '', type: 'date & time', readonly: true },
        Client_Type: { value: '', type: 'ddl', readonly: true },
        Client_Name: { value: '', type: 'text', readonly: true },
        Code: { value: '', type: 'text', readonly: true },
        Name: { value: '', type: 'text', readonly: true },
        Bonus: { value: '', type: 'text', readonly: true },
        Qty: { value: '', type: 'text', readonly: true },
        Disc: { value: '', type: 'text', readonly: true },
        Up: { value: '', type: 'text', readonly: true },
        Check_Price: { value: '', type: 'checkbox', readonly: true },
        Search_by_generic: { value: '', type: 'checkbox', readonly: true },
    });



    return (
        <>
            <div className="flex">
                <div className="w-3/4 ">
                    <div className='grid grid-cols-2 gap-2 px-6 py-6'>
                        <FormItems
                            form={formInitialValues}
                            setForm={setFormValues}
                            ddlItems={items}
                        />
                    </div>
                    <div className="w-auto overflow-auto max-w-screen-2xl p-6">
                        <Table
                            th={th}
                            tr={tr}
                        />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className='grid grid-cols-2 w-auto h-auto' >
                        {
                            iconBtns.map((i) => (
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


        </>
    )
}



