import React, { useState } from 'react'
import Table from '../../components/table/table';
import { PiExportBold } from 'react-icons/pi';
import { HiPrinter } from 'react-icons/hi';
import { MdFileDownloadDone } from 'react-icons/md';
import { AiOutlineClear } from 'react-icons/ai';
import IconButton from '../../components/ui/iconButton';
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



export default function PurchaseRefund() {

  const [formInitialValues, setFormValues] = useState({
    R_Id: { value: '', type: 'text', readonly: true },
    R_Date: { value: '', type: 'date', readonly: true },
    Supplier_Id: { value: '', type: 'text', readonly: true },
    Supplier_Name: { value: '', type: 'text', readonly: true },
    Refrence: { value: '', type: 'text', readonly: true },
    Desc: { value: '', type: 'text', readonly: true },
    Remarks: { value: '', type: 'text', readonly: true },
    Billty: { value: '', type: 'text', readonly: true },
    C_Adda: { value: '', type: 'text', readonly: true },
    Code: { value: '', type: 'text', readonly: true },
    Name: { value: '', type: 'text', readonly: true },
    Batch: { value: '', type: 'text', readonly: true },
    P_price: { value: '', type: 'text', readonly: true },
    Pack: { value: '', type: 'text', readonly: true },
    l_disc: { value: '', type: 'text', readonly: true },
    l_gst: { value: '', type: 'text', readonly: true },
    godown: { value: '', type: 'text', readonly: true },
    bonus: { value: '', type: 'text', readonly: true },
  });


  const [form2InitialValues, setForm2Values] = useState({
    Total_of_Item: { value: '', type: 'text', readonly: true },
    Total_Bonus: { value: '', type: 'text', readonly: true },
    Total_Qty: { value: '', type: 'text', readonly: true },
    Item_Desc: { value: '', type: 'text', readonly: true },
    Item_GST: { value: '', type: 'text', readonly: true },

    courier_AddaChanges: { value: '', type: 'text', readonly: true },
    FlatDisc: { value: '', type: 'text', readonly: true },
    FlatGst: { value: '', type: 'text', readonly: true },
    Other_Changes: { value: '', type: 'text', readonly: true },
    Return_Amount: { value: '', type: 'text', readonly: true },
  });

  return (
    <>
         
              <div className='flex flex-row justify-between'>

                <div className='p-2 flex '>
                  <h1 className='text-2xl font-bold p-6 '>PurchaseRefund</h1>
                </div>

                <div className='p-2 flex '>
                  <IconButton
                    title={'Done'}
                    Icon={MdFileDownloadDone}
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

                  <IconButton
                    title={'Clear'}
                    Icon={AiOutlineClear}
                    size={30}
                    w={28}
                    h={12}
                    direction={'row'}
                  />
                </div>
              </div>

              <div className='flex flex-col ml-4 '>

                {/* section-1 */}

                <div className='border-2  p-6 rounded-xl justify-center items-center ' >
                  <div className='grid grid-cols-3 '>
                    <FormItems
                      form={formInitialValues}
                      setForm={setFormValues}
                      width={18}

                    />
                  </div>
                </div>


                {/* end of section-1*/}

              
                  <div className="w-auto overflow-auto max-w-screen-2xl p-1">
                    <Table
                      th={th}
                      tr={tr}
                    />

                    {/* section-2 */}
                    <div className='flex flex-row  py-6' >
                      <div className='grid grid-cols-3 gap-1'>
                        <FormItems
                          form={form2InitialValues}
                          setForm={setForm2Values}
                          width={18}
                        />
                      </div>
                    </div>

                    {/* end of section-2 */}

                  </div>



                </div>

             
           

       
    </>
  )
}
