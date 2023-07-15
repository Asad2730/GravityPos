import React, { useState } from 'react';
import { FormItems } from '../../components/ui/formItem';



export default function PurchaseOrder() {

  const [formInitialValues, setFormValues] = useState({
    Trans: { value: '', type: 'text', readonly: false },
    Ref: { value: '', type: 'text', readonly: false },
    Date: { value: '', type: 'date', readonly: true },
    Remarks: { value: '', type: 'text', readonly: false },
    Desc: { value: '', type: 'text', readonly: false },
    Supplier_Id: { value: '', type: 'text', readonly: false },
    Supplier_Name: { value: '', type: 'text', readonly: false },
    Code: { value: '', type: 'text', readonly: false },
    Name: { value: '', type: 'text', readonly: false },
    Qty: { value: '', type: 'number', readonly: false },
    Retail_Price: { value: '', type: 'number', readonly: false },
  });


  return (
    <>
      <div className='h-screen flex flex-col  justify-start items-center mt-10' >
        <div className='flex flex-row '>
          <div className='grid grid-cols-3 gap-2'>
            <FormItems
              form={formInitialValues}
              setForm={setFormValues}
              width={18}
            />
          </div>
        </div>
      </div>

    </>

  )
}



