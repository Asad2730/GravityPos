import { useState } from 'react';
import CustomReport from '../commonReport';

const tr = [
    {
        code: '1', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
        qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', 
    },


]

const th = [
    "#",
    "Item ID/Code",
    "Item Name",
    "Quantity Sold",
    "Unit Price",
    "Total Price",
    "Sale Date ",
];



export default function SoldItemReport() {

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
              title={'Sold Item Report'}
              th={th}
              tr={tr}
              formValues={formValues}
              setFormValues={setFormValues}
            />

        </>

    )
}



