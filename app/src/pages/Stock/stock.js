
import Table from '../../components/table/table';
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import CustomDropDown from '../../components/ui/dropDown';
import SideNav from '../../components/navbar/sideNavBar';
import { stock_navigation_items, supplier_navigation_items } from '../../components/navbar/navBarItems';

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




export default function Stock() {



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
                          <h1 className='text-2xl font-bold p-6 '>Stock</h1>
                        </div>

                        <div className='p-2 flex '>
                          <IconButton
                            title={'Add Stock'}
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

                      <div className='flex flex-row ml-4 justify-evenly'>

                        <div className='flex flex-col gap-y-3 my-2 space-x-2'>
                          <div className='flex flex-row'>
                            <h1 className='m-1'>Code</h1>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Product Name</h2>
                            <CustomInput height={35} />
                          </div>
                          <div className='flex flex-row'>
                            <h2 className='m-1'>Description</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Category</h2>
                            <CustomInput height={35} />
                          </div>
                          <div className='flex flex-row'>
                            <h2 className='m-1'>Barcode/QR code</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Manufacturer/company</h2>
                            <CustomInput height={35} />
                          </div>

                        </div>

                        <div className='flex flex-col gap-y-3 my-2 space-x-2'>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Supplier Name</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Quantity Being Added</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Pack_Size</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Discount</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h1 className='m-1'>unit_price</h1>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Warehouse</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>ShelfLocation</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>Shelf</h2>
                            <CustomInput height={35} />
                          </div>

                        </div>

                        <div className='flex flex-col gap-y-3 my-2 space-x-2'>
                          <div className='flex flex-row'>
                            <h1 className='m-1'>"Batch_No#",</h1>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>NDC (National Drug Code)</h2>
                            <CustomInput height={35} />
                          </div>
                          <div className='flex flex-row'>
                            <h2 className='m-1'>ATC Code (Anatomical Therapeutic Chemical Classification System)</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <h2 className='m-1'>expiry_date</h2>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Date Received</span>
                            <CustomInput height={35} />
                          </div>

                          <div className='flex flex-row'>
                            <span className='m-1'>Status</span>
                            <CustomDropDown />
                          </div>

                          <div className='flex flex-row'>
                            <CustomInput type={'checkbox'} />
                            <span className='ml-4'>Search_by_generic</span>
                          </div>

                        </div>

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



