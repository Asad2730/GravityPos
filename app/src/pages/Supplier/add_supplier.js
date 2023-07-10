
import Table from '../../components/table/table';
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import CustomDropDown from '../../components/ui/dropDown';
import SideNav from '../../components/navbar/sideNavBar';
import { supplier_navigation_items } from '../../components/navbar/navBarItems';

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
  'Amount'
];



export default function AddSupplier() {

  

  return (
    <>
      <div className='flex flex-row'>
        <div className='w-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='w-screen flex flex-col h-[52rem]' style={{ backgroundColor: secondary_color }}>
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex flex-row'>
                    <div className='py-6' style={{ background: secondary_color }}>
                      <SideNav navigation={supplier_navigation_items} />
                    </div>
                    <div className='flex flex-col justify-center items-center py-6 pr-6'>
                    <div className='flex flex-col ml-4'>
                      <div className='flex flex-row my-2 space-x-2'>
                        <h1>Code</h1>
                        <CustomInput height={35} />
                     
                        <h2>Alias</h2>
                        <CustomInput height={35} />

                        <h2>Name</h2>
                        <CustomInput height={35} />

                        <h2>Sales_Tax_No.</h2>
                        <CustomInput height={35} />
                       
                      </div>

                      <div className='flex flex-row mt-2 '>
                        <span className='m-3'>NTN_No.</span>
                        <CustomInput height={35} />
                        <span className='m-3'>Company_Name</span>
                        <CustomInput height={35} />

                        <span className='m-3'>Phone#</span>
                        <CustomInput height={35} />

                        <span className='m-3'>Fax#</span>
                        <CustomInput height={35} />

                      </div>

                      <div className='flex flex-row mt-2 '>
                        <span className='m-3'>Mobile</span>
                        <CustomInput height={35} />
                        <span className='m-3'>E_Mail</span>
                        <CustomInput height={35} />
                        <span className='m-3'>Route</span>
                        <CustomInput height={35} />
                        <span className='m-3'>Area</span>
                        <CustomInput height={35} />
                       
                      </div>

                      <div className='flex flex-row mt-2'>
                       <span className='m-3'>Sub_Area</span>
                        <CustomInput height={35} />
                        <span className='m-3'>City</span>
                        <CustomInput height={35} />

                        <span className='m-3'>Address</span>
                        <CustomInput height={35} />
                        <span className='m-3'>Sale_Person</span>
                        <CustomInput height={35} />
                      </div>

                      <div className='flex flex-row mt-2'>
                       <span className='m-3'>Sale_Price</span>
                        <CustomInput height={35} />
                        <span className='m-3'>Disc%</span>
                        <CustomInput height={35} />

                        <span className='m-3'>Bank_Name</span>
                        <CustomInput height={35} />
                        <span className='m-3'>Account_Title</span>
                        <CustomInput height={35} />
                        <span className='m-3'>Account#</span>
                        <CustomInput height={35} />
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



