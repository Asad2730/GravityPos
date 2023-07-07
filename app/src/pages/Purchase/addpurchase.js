import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import CustomDropDown from '../../components/ui/dropDown';
import SideNav from '../../components/navbar/sideNavBar';
import { purchase_navigation_items } from '../../components/navbar/navBarItems';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default function AddPurchase() {


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
                          <h1>Id</h1>
                          <CustomInput height={35} />
                          <h2>Invoice No</h2>
                          <CustomInput height={35} />
                          <h2>Date & Time</h2>

                          <span className='block w-full rounded-md border-2 bg-white border-gray-300 py-1.5
                                      shadow-sm placeholder:text-gray-400 px-2 ml-2' style={{ height: 35 }}>
                            <DatePicker selected={selectedDate} onChange={handleDateChange} />
                          </span>
                          <CustomInput
                            readOnly={false}
                            value={currentTime}
                            height={35}
                          />

                        </div>
                        <div className='flex flex-row'>
                          <span className='m-3'>Purchase Type</span>
                          <CustomDropDown />
                          <span className='m-3'>
                            Tax Anount</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Tax rate</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Supplier Id</span>
                          <CustomInput height={35} />
                        </div>
                        <div className='flex flex-row mt-2'>
                        
                          <span className='m-3'>Supplier Name</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Supplier Contact No</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Balance</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Transaction No</span>
                          <CustomInput height={35} />
                        </div>

                        <div className='flex flex-row mt-2'>
                          <span className='ml-4'> P_price </span>
                          <CustomInput height={35} />
                        
                          <span className='ml-4'>Disc%</span>
                          <CustomInput height={35} />
                          <span className='ml-4'>GST</span>
                          <CustomInput height={35} />

                          <span className='ml-4'> s_price1 </span>
                          <CustomInput height={35} />
                        
                        </div>
                       
                        <div className='flex flex-row mt-6'>
                          <span className='ml-4'> Batch# </span>
                          <CustomInput height={35} />
                        
                          <span className='ml-4'>Expiry</span>
                          <CustomInput height={35} />
                          <span className='ml-4'>S.L</span>
                          <CustomInput height={35} />

                          <span className='ml-4'> Loc </span>
                          <CustomInput height={35} />
                        
                        </div>
                        
                        
                        <div className='flex flex-row mt-6'>
                          <span className='ml-4 '> Bon </span>
                          <CustomInput height={35} />
                        
                          <span className='ml-4'>Qty</span>
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



