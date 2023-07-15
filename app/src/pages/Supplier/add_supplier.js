
import Table from '../../components/table/table';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { PiExportBold } from 'react-icons/pi';
import { HiPrinter } from 'react-icons/hi';
import IconButton from '../../components/ui/iconButton';
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
  "Code",
  "Alias",
  "Name",
  "NTN_No.",
  "Company_Name",
  "Phone#",
  "E_mail",
  "Route",
  "Area",
  "Sub_Area",
  "City",
  "Address",
  "Bank_Name",
  "Account_Title",
  "Account#",
  "Status",
  "Edit",
  "Delete"
];




export default function AddSupplier() {

  const [formInitialValues, setFormValues] = useState({
    Code: { value: '', type: 'text', readonly: false },
    Address: { value: '', type: 'text', readonly: false },
    NtnNo: { value: '', type: 'text', readonly: false },
    Alias: { value: '', type: 'text', readonly: false },
    City: { value: '', type: 'text', readonly: false },
    BankName: { value: '', type: 'text', readonly: false },
    Supplier_Name: { value: '', type: 'text', readonly: false },
    Area: { value: '', type: 'text', readonly: false },
    AccountTitle: { value: '', type: 'text', readonly: false },
    PhoneNo: { value: '', type: 'text', readonly: false },
    SubArea: { value: '', type: 'text', readonly: false },
    Account: { value: '', type: 'text', readonly: false },
    Email: { value: '', type: 'email', readonly: false },
    Route: { value: '', type: 'text', readonly: false },
    CompanyName: { value: '', type: 'text', readonly: false },
    Sales_Tax_No: { value: '', type: 'text', readonly: false },
    Status: { value: '', type: 'ddl', readonly: false },
    Search_by_generic: { value: '', type: 'checkbox', readonly: false },
  });


  return (
    <>


      <div className='flex flex-row justify-between'>

        <div className='p-2 flex '>
          <h1 className='text-2xl font-bold p-6 '>Supplier</h1>
        </div>

        <div className='p-2 flex '>
          <IconButton
            title={'Add Supplier'}
            Icon={AiOutlineUserAdd}
            size={30}
            w={28}
            h={12}
            direction={'row'}
          />

          <IconButton
            title={'Export'}
            Icon={PiExportBold}
            size={30}
            w={28}
            h={12}
            direction={'row'}
          />

          <IconButton
            title={'Print'}
            Icon={HiPrinter}
            size={30}
            w={28}
            h={12}
            direction={'row'}
          />


        </div>
      </div>


      <div className='flex flex-row  py-6 p-4'>
        <div className='grid grid-cols-3 gap-2'>
          <FormItems
            form={formInitialValues}
            setForm={setFormValues}
            width={64}

          />
        </div>
      </div>

    
        <div className='w-auto overflow-auto max-w-screen-2xl'>
          <Table th={th} tr={tr} />
        </div>
    

    </>

  )
}



