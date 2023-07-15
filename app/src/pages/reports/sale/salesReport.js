
import { useState } from 'react';
import CustomReport from '../commonReport';

const tr = [
    {
        code: '1', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
        qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10',
    },
]

const th = [
    "#",
    "Code",
    "Total Sales Value",
    "Total Number of Sales",
    "Average Sale Value",
    "Most Popular Items Sold",
    "start Date",
    "end Date",
];




export default function SalesReport() {

    const [formValues, setFormValues] = useState({
        Code: { value: '', type: 'text', readonly: false },
        Sale_Code: { value: '', type: 'text', readonly: false },
        Start_Date: { value: '', type: 'date', readonly: false },
        End_Date: { value: '', type: 'date', readonly: false },
        Supplier_Code: { value: '', type: 'text', readonly: false },
        Supplier_Name: { value: '', type: 'text', readonly: false },
        Manufacture: { value: '', type: 'text', readonly: false },
        Product_Name: { value: '', type: 'text', readonly: false },
    });




    return (
        <>
            <CustomReport
              title={'Sale Report'}
              th={th}
              tr={tr}
              formValues={formValues}
              setFormValues={setFormValues}
            />

        </>

    )
}



