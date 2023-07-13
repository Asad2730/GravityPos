import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import SideNav from '../../components/navbar/sideNavBar';
import { purchase_navigation_items } from '../../components/navbar/navBarItems';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormItems } from '../../components/ui/formItem';



export default function PurchaseOrder() {

  const [formInitialValues, setFormValues] = useState({
    Trans: { value: '', type: 'text', readonly: false },
    Ref: { value: '', type: 'text', readonly: false },
    Date: { value: '', type: 'date', readonly: true },
    Remarks: { value: '', type: 'text', readonly: false },
    Desc: { value: '', type: 'text', readonly: false },
    Supplier_Id: { value: '', type: 'text', readonly: false },
    Supplier_Name: { value: '', type: 'text', readonly: false },
    Code: { value: '', type: 'text', readonly: false },
    Name: { value: '', type: 'text', readonly: false },
    Qty: { value: '', type: 'number', readonly: false },
    Retail_Price: { value: '', type: 'number', readonly: false },
  });
  

  return (
    <>
      <div className='flex flex-row'>
        <div className='w-auto'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='w-screen flex flex-col h-[52rem]' style={{ backgroundColor: secondary_color }}>
                <div className='flex flex-col'>
                  <div className='flex flex-row'>
                    <div className='py-6' style={{ background: secondary_color }}>
                      <SideNav navigation={purchase_navigation_items} />
                    </div>
                    <div className='flex flex-col justify-center items-center py-6 pr-6'>
                    <div className='flex flex-row  py-6 p-4'>
                        <div className='grid grid-cols-3 gap-2'>
                          <FormItems
                            form={formInitialValues}
                            setForm={setFormValues}
                            width={18}
                           
                          />
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



