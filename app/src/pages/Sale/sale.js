import React, { useState } from 'react'
import Table from '../../components/table/table';
import { secondary_color } from '../../utils/colors';
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
  'Code',
  'Product Name',
  'Bonus',
  'Qty',
  'Batch#',
  'Expiry Date',
  'D%',
  'Disc',
  'Price',
  'Amount'
];



export default function Sale() {

    
  const [formInitialValues,setFormValues] = useState({
    R_Id: { value: '', type: 'text', readonly: false },
    date: { value: '', type: 'date', readonly: false },
    Ref: { value: '', type: 'text', readonly: false },
    Client_Type: { value: '', type: 'ddl', readonly: false },
    Client_Name: { value: '', type: 'text', readonly: false },
    Sale_Person: { value: '', type: 'text', readonly: false },
    Code: { value: '', type: 'text', readonly: false },
    Name: { value: '', type: 'text', readonly: false },
    Bonus: { value: '', type: 'text', readonly: false },
    Qty: { value: '', type: 'text', readonly: false },
    Expiry_Date: { value: '', type: 'text', readonly: false },
    Batch: { value: '', type: 'text', readonly: false },
    GoDown: { value: '', type: 'text', readonly: false },
    Disc: { value: '', type: 'text', readonly: false },
    Rate: { value: '', type: 'text', readonly: false }
});




  return (
    <>
      <div className='flex flex-row'>
        <div className='w-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='w-screen flex flex-col h-[52rem]' style={{ backgroundColor: secondary_color }}>
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex flex-row'>

                    <div className='flex flex-col py-6 pr-6'>

                      <div className='p-2 flex '>
                        <h1 className='text-2xl font-bold p-6 '>Sale Refund</h1>
                      </div>                    

                      <div className='flex flex-row ml-6'>
                     
                          <div className='grid grid-cols-3 gap-1'>
                            <FormItems
                              form={formInitialValues}
                              setForm={setFormValues} 
                              width={18}
                              />
                          </div>                                              

                      </div>
                     
                      <div className='flex w-full items-center justify-between mb-5'>
                        <div className='w-full'>
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



