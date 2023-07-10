import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import SideNav from '../../components/navbar/sideNavBar';
import { purchase_navigation_items } from '../../components/navbar/navBarItems';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default function PurchaseOrder() {


  const [currentTime, setCurrentTime] = useState('');

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
                      <SideNav navigation={purchase_navigation_items} />
                    </div>
                    <div className='flex flex-col justify-center items-center py-6 pr-6'>
                      <div className='flex flex-col ml-4'>
                        <div className='flex flex-row my-2 space-x-2'>
                          <h1>Trans#</h1>
                          <CustomInput height={35} />
                          <h2>Ref#</h2>
                          <CustomInput height={35} />
                          <h2>Date</h2>

                          <span className='block w-full rounded-md border-2 bg-white border-gray-300 py-1.5
                                      shadow-sm placeholder:text-gray-400 px-2 ml-2' style={{ height: 35 }}>
                            <DatePicker selected={selectedDate} onChange={handleDateChange} />
                          </span>
                         

                        </div>
                        <div className='flex flex-row'>
                          <span className='m-3'>Ref#</span>
                          <CustomInput height={35} />
                          <span className='m-3'>
                            Remarks</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Desc</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Supplier_Id</span>
                          <CustomInput height={35} />
                        </div>
                        <div className='flex flex-row mt-2'>
                        
                          <span className='m-3'>Supplier_Name</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Code</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Name</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Qty</span>
                          <CustomInput height={35} />
                          <span className='ml-4'> Retail_Price </span>
                          <CustomInput height={35} />
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



