import { useState } from 'react';
import CustomReport from '../commonReport';

const tr = [
    {
        code: '1', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
        qty: '1', batch: '111',
    },


]

const th = [
    "#",
	"Item Code",
    "Item Name",
	"Quantity Sold",
	"Sale Date",
];





export default function NarcoticsDrugRreport() {
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
            title={'Narcotics Adjustment Report'}
            formValues={formValues}
            setFormValues={setFormValues}
            th={th}
            tr={tr}
          />
        </>

    )
}



