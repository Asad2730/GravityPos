
import Table from '../../components/table/table';
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import CustomDropDown from '../../components/ui/dropDown';
import SideNav from '../../components/navbar/sideNavBar';
import { supplier_navigation_items } from '../../components/navbar/navBarItems';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { PiExportBold } from 'react-icons/pi';
import { HiPrinter } from 'react-icons/hi';


import IconButton from '../../components/ui/iconButton';

import 'react-datepicker/dist/react-datepicker.css';




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
  'Amount',
  'Status',
  'Edit',
  'Delete'
];



export default function AddSupplier() {



  return (
    <>
      <div className='flex flex-row'>
        <div className='w-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='w-screen flex flex-col h-[52rem]' style={{ backgroundColor: secondary_color }}>
                <div className='flex flex-col'>


                  <div className='flex flex-row'>

                    {/* <div className='py-6' style={{ background: secondary_color }}>
                      <SideNav navigation={supplier_navigation_items} />
                    </div> */}

                    <div className='flex flex-col  py-6 pr-6'>

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

                      <div className='flex flex-row ml-4 justify-between'>
                        <div className='flex flex-col gap-y-3 my-2 space-x-2'>
                          <div className='flex flex-row'>
                            <h1 className='m-1'>Code</h1>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Alias</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>First_Name</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Last_Name</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span >Phone#</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>E_Mail</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Company_Name</span>
                            <CustomInput height={35} />
                          </div>
                        </div>

                        <div className='flex flex-col gap-y-3 '>
                          <div className='flex flex-row'>
                            <span className='m-1'>Route</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Area</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Sub_Area</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>City</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Address</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Fax#</span>
                            <CustomInput height={35} />
                          </div>
                        </div>

                        <div className='flex flex-col gap-y-3'>
                          <div className='flex flex-row'>
                            <span className='m-1'>Sale_Person</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Sale_Price</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Disc%</span>
                            <CustomInput height={35} />
                          </div>
                        </div>

                        <div className='flex flex-col gap-y-3'>

                          <div className='flex flex-row '>
                            <span className='m-1 w-32 '>NTN_No.</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2>Sales_Tax_No.</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Bank_Name</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Account_Title</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Account#</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <CustomInput type={'checkbox'} />
                            <span className='ml-4'>Search_by_generic</span>
                          </div>
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



