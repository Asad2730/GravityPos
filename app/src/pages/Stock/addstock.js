
import Table from '../../components/table/table';
import { secondary_color } from '../../utils/colors';
import SideNav from '../../components/navbar/sideNavBar';
import { stock_navigation_items } from '../../components/navbar/navBarItems';
import { useState } from 'react';
import { FormItems } from '../../components/ui/formItem';
import HeaderIcons from '../../components/ui/headerIcons';



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
  "Description",
  "Category",
  "Barcode/QR code",
  "Manufacturer/company",

  "Supplier Name",
  "Quantity Being Added",
  "Pack_Size",
  "Batch#",
  "Discount",
  "unit_price",
  "Date Received",
  "Increase",
  "Decrease",
  "expiry_date",
  "Warehouse",
  "ShelfLocation",
  "Shelf",
  "NDC",
  "ATC Code",
  "Status",
  "Edit",
  "Delete"
];




export default function AddStock() {

  const [formInitialValues, setFormValues] = useState({
    Code: { value: '', type: 'text', readonly: false },
    Product_Name: { value: '', type: 'text', readonly: false },
    Description: { value: '', type: 'text', readonly: false },
    Category: { value: '', type: 'text', readonly: false },
    Barcode: { value: '', type: 'text', readonly: false },
    Manufacturer: { value: '', type: 'text', readonly: false },
    Supplier_Name: { value: '', type: 'text', readonly: false },
    Quantity_Being_Added: { value: '', type: 'number', readonly: false },
    Pack_Size: { value: '', type: 'number', readonly: false },
    Discount: { value: '', type: 'number', readonly: false },
    Unit_Price: { value: '', type: 'number', readonly: false },
    Warehouse: { value: '', type: 'text', readonly: false },
    ShelfLocation: { value: '', type: 'text', readonly: false },
    Shelf: { value: '', type: 'text', readonly: false },
    Batch_No: { value: '', type: 'text', readonly: false },
    NDC: { value: '', type: 'text', readonly: false },
    ATC_Code: { value: '', type: 'text', readonly: false },
    Expiry_Date: { value: '', type: 'date', readonly: false },
    Date_Received: { value: '', type: 'date', readonly: false },
    Status:{ value: '', type: 'ddl', readonly: false },
    Search_by_generic:{ value: '', type: 'checkbox', readonly: false },
});



  return (
    <>
      <div className='flex flex-row'>
        <div className='w-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-row '>
              <div className='flex flex-col h-[52rem] ' style={{ backgroundColor: secondary_color }}>
                <div className='flex flex-col'>

                  <div className='flex flex-row'>
                    
                    <div className='py-6' style={{ background: secondary_color }}>
                      <SideNav navigation={stock_navigation_items} />
                    </div>

                    <div className='flex flex-col  py-6 pr-6'>

                      <div className='flex flex-row justify-between'>

                        <div className='p-2 flex '>
                          <h1 className='text-2xl font-bold p-6 '>Stock</h1>
                        </div>

                        <div className='p-2 flex '>
                           
                              <HeaderIcons/>

                        </div>
                      </div>

                      <div className='grid grid-cols-3  ml-4 gap-3'>
                        <FormItems
                          form={formInitialValues}
                          setForm={setFormValues} 
                          width={60}
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



