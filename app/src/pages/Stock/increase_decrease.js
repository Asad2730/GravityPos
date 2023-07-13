
import Table from '../../components/table/table';
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import CustomDropDown from '../../components/ui/dropDown';
import SideNav from '../../components/navbar/sideNavBar';
import { stock_navigation_items } from '../../components/navbar/navBarItems';



import IconButton from '../../components/ui/iconButton';

import 'react-datepicker/dist/react-datepicker.css';
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
      <div className='flex flex-row'>
        <div className='w-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='w-screen flex flex-col h-[52rem] ' style={{ backgroundColor: secondary_color }}>
                <div className='flex flex-col'>


                  <div className='flex flex-row'>

                    <div className='py-6' style={{ background: secondary_color }}>
                      <SideNav navigation={stock_navigation_items} />
                    </div>

                    <div className='flex flex-col  py-6 pr-6'>

                      <div className='flex flex-row justify-between'>

                        <div className='p-2 flex '>
                          <h1 className='text-2xl font-bold p-6 '>Stock Increase Decrease</h1>
                        </div>

                      </div>
                       
                      <div className='grid grid-cols-3  ml-4 gap-3'>
                        <FormItems
                          form={formInitialValues}
                          setForm={setFormValues} 
                          width={18}
                          />
                      </div>

                      <div className='flex w-full items-center justify-between mb-5'>
                        <div className='w-screen'>
                          <Table th={th} tr={tr} />
                        </div>
                      </div>
                    </div>




                  </div>
                </div>
              </div>

            </div>

            <footer>
              <div className='h-[2.3rem] w-full'></div>
            </footer>
          </div>
        </div>
      </div>


    </>

  )
}



