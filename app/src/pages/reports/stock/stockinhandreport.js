import { useState } from 'react';
import CustomReport from '../commonReport';



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
    "#",
    "Stock ID",
    "Product ID",
    "Quantity in Stock",
    "Warehouse ID",
    "Last Replenishment Date",
    "Expected Replenishment Date",
];





export default function StockInHandReport() {

    const [formValues, setFormValues] = useState({
        'Code': { value: '', type: 'text', readonly: false },
        'Sale Code': { value: '', type: 'text', readonly: false },
        'start Date': { value: '', type: 'date', readonly: false },
        'end Date': { value: '', type: 'date', readonly: false },
        'Supplier Code': { value: '', type: 'text', readonly: false },
        'Supplier Name': { value: '', type: 'text', readonly: false },
        'manufacture': { value: '', type: 'text', readonly: false },
        'product Name': { value: '', type: 'text', readonly: false },
    });
    


    return (
        <>
          
          <CustomReport
              title={'Stock in hand Report'}
              th={th}
              tr={tr}
              formValues={formValues}
              setFormValues={setFormValues}
            />
        
        </>

    )
}



