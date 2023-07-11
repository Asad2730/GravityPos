import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import SideNav from '../../components/navbar/sideNavBar';
import { purchase_navigation_items } from '../../components/navbar/navBarItems';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Table from '../../components/table/table';
import { PiExportBold } from 'react-icons/pi';
import { HiPrinter } from 'react-icons/hi';
import { MdFileDownloadDone } from 'react-icons/md';
import { AiOutlineClear } from 'react-icons/ai';
import IconButton from '../../components/ui/iconButton';



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
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className='flex flex-row'>
        <div className='w-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='w-screen flex flex-col h-full' style={{ backgroundColor: secondary_color }}>
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex flex-row'>
                    <div className='py-6 ' style={{ background: secondary_color }}>
                      <SideNav navigation={purchase_navigation_items} />
                    </div>


                    <div className='flex flex-col  py-6 pr-6'>

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
                          <div className='flex flex-row '>
                            <span className='m-3'>R_Id</span>
                            <CustomInput height={35} />
                            <span className='m-3'>R_Date</span>

                            <span className='block w-full rounded-md border-2 bg-white border-gray-300 py-1.5
                                      shadow-sm placeholder:text-gray-400 px-2 ml-2' style={{ height: 35 }}>
                              <DatePicker selected={selectedDate} onChange={handleDateChange} />
                            </span>
                            <span className='m-3'>Supplier_Id</span>
                            <CustomInput height={35} />
                            <span className='m-3'>Supplier_Name</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row mt-2'>
                            <span className='m-3'>Refrence</span>
                            <CustomInput height={35} />
                            <span className='m-3'>Desc</span>
                            <CustomInput height={35} />
                            <span className='m-3'>Remarks</span>
                            <CustomInput height={35} />
                            <span className='m-3'>Billty#</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row mt-2'>

                            <span className='m-3'>C/Adda</span>
                            <CustomInput height={35} />
                            <span className='ml-4'> Code </span>
                            <CustomInput height={35} />
                            <span className='ml-4'>Name</span>
                            <CustomInput height={35} />
                            <span className='ml-4'>Batch#</span>
                            <CustomInput height={35} />
                          </div>
                          <div className='flex flex-row mt-2'>

                            <span className='ml-4'> P_price </span>
                            <CustomInput height={35} />
                            <span className='ml-4'> Pack </span>
                            <CustomInput height={35} />
                            <span className='ml-4'>l.dISC%</span>
                            <CustomInput height={35} />
                            <span className='ml-4'>l.gst</span>
                            <CustomInput height={35} />
                          </div>
                          <div className='flex flex-row mt-2'>

                            <span className='ml-4'> godown </span>
                            <CustomInput height={35} />
                            <span className='ml-4'> bonus </span>
                            <CustomInput height={35} />

                          </div>

                        </div>

                        {/* end of section-2 */}

                        <div className="flex w-full h-full items-center justify-between mb-5">
                          <div className="">
                            <Table
                              th={th}
                              tr={tr}
                            />

                            {/* section-2 */}
                            <div className='border-2  p-6 rounded-xl mt-5' >
                              <div className='flex flex-row mt-6 justify-center items-center'>
                                <span className='ml-4'>Total=of_Item</span>
                                <CustomInput height={35} />
                                <span className='ml-4'>Total_Bonus</span>
                                <CustomInput height={35} />
                                <span className='ml-4'> Total_Qty </span>
                                <CustomInput height={35} />
                                <span className='ml-4 '> Item_Desc% </span>
                                <CustomInput height={35} />
                                <span className='ml-4'>Item_GST</span>
                                <CustomInput height={35} />
                              </div>

                              <div className='flex flex-row mt-8 ml-60 justify-center items-center '>
                                <span className='ml-4'>courier/AddaChanges</span>
                                <CustomInput height={35} />
                                <span className='ml-4'>FlatDisc%</span>
                                <CustomInput height={35} />
                                <span className='ml-4'> FlatGst </span>
                                <CustomInput height={35} />

                              </div>

                              <div className='flex flex-row mt-8  ml-60  justify-center items-center'>

                                <span className='ml-4 '> Other_Changes </span>
                                <CustomInput height={35} />
                                <span className='ml-4'>Return_Amount</span>
                                <CustomInput height={35} />
                              </div>


                            </div>




                            {/* end of section-2 */}

                          </div>



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
