import React, { useState } from 'react'
import { FormItems } from '../../components/ui/formItem';
import Table from '../../components/table/table';






const tr = [
  {
    code: '4', bonus: 'Member',
    qty: '1', batch: '111', expiry: '07/06/2023',
  },
  {
    code: '4', bonus: 'Member',
    qty: '1', batch: '111', expiry: '07/06/2023',
  },
  {
    code: '4', bonus: 'Member',
    qty: '1', batch: '111', expiry: '07/06/2023',
  },

]

const th = [
  '#',
  'Purchase Code',
  'Date',
  'Invoice_No',
  'Status'
];



export default function AddPurchase() {


  const [formInitialValues, setFormValues] = useState({
    Id: { value: '', type: 'text', readonly: true },
    Invoice_No: { value: '', type: 'text', readonly: true },
    Date_Time: { value: '', type: 'date', readonly: true },
    Purchase_Type: { value: '', type: 'ddl', readonly: true },
    Tax_Amount: { value: '', type: 'text', readonly: true },
    Tax_Rate: { value: '', type: 'text', readonly: true },
    Supplier_Id: { value: '', type: 'text', readonly: true },
    Supplier_Name: { value: '', type: 'text', readonly: true },
    Supplier_Contact_No: { value: '', type: 'text', readonly: true },
    Balance: { value: '', type: 'text', readonly: true },
    Transaction_No: { value: '', type: 'text', readonly: true },
    P_price: { value: '', type: 'text', readonly: true },
    Disc: { value: '', type: 'text', readonly: true },
    GST: { value: '', type: 'text', readonly: true },
    S_price1: { value: '', type: 'text', readonly: true },
    Batch: { value: '', type: 'text', readonly: true },
    Expiry: { value: '', type: 'text', readonly: true },
    SL: { value: '', type: 'text', readonly: true },
    Loc: { value: '', type: 'text', readonly: true },
    Bon: { value: '', type: 'text', readonly: true },
    Qty: { value: '', type: 'text', readonly: true }
  });



  return (
    <>
          
          <div className='grid grid-cols-3 gap-2 px-6 py-6'>
            <FormItems
              form={formInitialValues}
              setForm={setFormValues}
              width={18}
            />
          </div>
      

       
          <div className='w-auto overflow-auto max-w-screen-2xl p-1'>
            <Table th={th} tr={tr} />
          </div>
        
      
    </>

  )
}



