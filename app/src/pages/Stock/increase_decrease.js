
import Table from '../../components/table/table';
import { useState } from 'react';
import { FormItems } from '../../components/ui/formItem';




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
  "Code",
  "Product Name",
  "Category",
  "Manufacturer/company",
  "Supplier Name",
  "Pack_Size",
  "Batch#",
  "Date Received",
  "Increase",
  "Decrease",
  "expiry_date",
  "Status",
  "Edit",
  "Delete"
];




export default function Stock_Increase_Decrease() {

  const [formInitialValues, setFormValues] = useState({
    Code: { value: '', type: 'text', readonly: false },
    Product_Name: { value: '', type: 'text', readonly: false },
    Category: { value: '', type: 'text', readonly: false },
    Barcode_QR_code: { value: '', type: 'text', readonly: false },
    Manufacturer_company: { value: '', type: 'text', readonly: false },
    Supplier_Name: { value: '', type: 'text', readonly: false },
    Pack_Size: { value: '', type: 'number', readonly: false },
    Unit_Price: { value: '', type: 'number', readonly: false },
    Batch_No: { value: '', type: 'text', readonly: false },
    Expiry_Date: { value: '', type: 'date', readonly: false },
    Date_Received: { value: '', type: 'date', readonly: false },
    Total_Quantity: { value: '', type: 'number', readonly: false },
    Increase_Quantity: { value: '', type: 'number', readonly: false },
    Decrease_Status: { value: '', type: 'ddl', readonly: false },
    Quantity_Being_Added: { value: '', type: 'number', readonly: false },
    Search_by_generic: { value: '', type: 'checkbox', readonly: false },
  });


  return (
    <>
      <div className='flex flex-col py-6'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-2xl font-bold p-6'>Stock Increase Decrease</h1>
        </div>
        <div className='grid grid-cols-3 gap-2 p-3'>
          <FormItems
            form={formInitialValues}
            setForm={setFormValues}
            width={18}
          />
        </div>
        <div className='w-auto overflow-auto max-w-screen-2xl p-1'>
          <Table th={th} tr={tr} />
        </div>
      </div>


    </>

  )
}



