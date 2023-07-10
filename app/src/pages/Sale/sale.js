import React, { useEffect, useState } from 'react'
import Table from '../../components/table/table';
import CustomInput from '../../components/ui/input';
import { secondary_color } from '../../utils/colors';
import CustomDropDown from '../../components/ui/dropDown';
import SideNav from '../../components/navbar/sideNavBar';
import { sale_navigation_items } from '../../components/navbar/navBarItems';
import DatePicker from 'react-datepicker';
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



export default function Sale() {


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
                      <SideNav navigation={sale_navigation_items} />
                    </div>
                    <div className='flex flex-col justify-center items-center py-6 pr-6'>
                      <div className='flex flex-col ml-4'>

                        
                        <div className='flex flex-row '>
                        
                          <span className='m-3'>R_Id</span>
                          <CustomInput height={35} />

                        
                          <span className='m-3'>R_Date</span>
                          <span className='block w-full rounded-md border-2 bg-white border-gray-300 py-1.5
                                      shadow-sm placeholder:text-gray-400 px-2 ml-2' style={{ height: 35 }}>
                            <DatePicker selected={selectedDate} onChange={handleDateChange} />
                          </span>
                          <CustomInput
                            readOnly={false}
                            value={currentTime}
                            height={35}
                          />

                        
                          <span className='m-3'>Ref#</span>
                          <CustomInput height={35} />

                        </div>

                        <div className='flex flex-row mt-2'>
                          <span className='m-3'>Client_Type</span>
                          <CustomDropDown />
                          <span className='m-3'>Client_Name</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Sale_Person</span>
                          <CustomInput height={35} />
                        </div>
                        <div className='flex flex-row mt-2'>
                          <span className='m-3'>Code</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Name</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Bonus</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Qty</span>
                          <CustomInput height={35} />

                          <span className='m-3'>Expiry_Date</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Batch#</span>
                          <CustomInput height={35} />

                       
                        </div>
                        <div className='flex flex-row mt-2'>
                        <span className='m-3'>GoDown</span>
                          <CustomDropDown />
                          <span className='m-3'>Disc%</span>
                          <CustomInput height={35} />
                          <span className='m-3'>Rate</span>
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



