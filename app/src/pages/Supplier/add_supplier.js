
import Table from '../../components/table/table';
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import CustomDropDown from '../../components/ui/dropDown';
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

  const [formValues, setFormValues] = useState({
    code: '', address: '', ntnNo: '',
    alias: '', city: '', bankName: '',
    supplier_Name: '', area: '', accountTitle: '',
    phoneNo: '', subArea: '', account: '',
    email: '', route: '', companyName: '', sales_Tax_No: '',
  });

  return (
    <>
      <div className='flex flex-row overflow-y-hidden'>
        <div className='w-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='w-screen flex flex-col h-[52rem] ' style={{ backgroundColor: secondary_color }}>
                <div className='flex flex-col'>


                  <div className='flex flex-row'>

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


                      <div className='flex flex-row  justify-between'>

                        <div className='grid grid-cols-3 ml-4'>
                          <FormItems 
                            form={formValues}
                            setForm={setFormValues} />

                          <div className='flex flex-row'>
                            <span className='m-1'>Status</span>
                            <span className='ml-16'><CustomDropDown /></span>
                          </div>

                          <div className='flex flex-row mt-1'>
                            <CustomInput type={'checkbox'} />
                            <span className='ml-3 mt-[0.4rem]'>Search_by_generic</span>
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



