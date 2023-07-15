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
	"Item Code",
    "Item Name",
	"Quantity Returned",
	"Reason for Return",
    "Return Date",
    "Original Sale Date",
];







export default function SaleReturnReport() {

    const [formValues, setFormValues] = useState({
        code: { value: '', type: 'text', readonly: false },
        saleCode: { value: '', type: 'text', readonly: false },
        startDate: { value: '', type: 'date', readonly: false },
        endDate: { value: '', type: 'date', readonly: false },
        supplierCode: { value: '', type: 'text', readonly: false },
        supplierName: { value: '', type: 'text', readonly: false },
        manufacture: { value: '', type: 'text', readonly: false },
        productName: { value: '', type: 'text', readonly: false },
    });
    


    return (
        <>
            
            <CustomReport
              title={'Sale Return Report'}
              th={th}
              tr={tr}
              formValues={formValues}
              setFormValues={setFormValues}
            />
 
        </>

    )
}



