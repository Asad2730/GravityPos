import { secondary_color } from '../../../utils/colors';
import Table from '../../../components/table/table';
import { useState } from 'react';
import { FormItems } from '../../../components/ui/formItem';
import SideReportNav from '../../../components/navbar/reportNavBar';
import HeaderIcons from '../../../components/ui/headerIcons';





const tr = [
    {
        code: '1', ProductName: 'lindsay.walton@example.com', bonus: 'Member',
        qty: '1', batch: '111', expiry: '07/06/2023', d: 'element', disc: '10', 
    },


]

const th = [
    "#",
    "Code",
    "Total Sales Value",
    "Total Number of Sales",
    "Average Sale Value",
    "Most Popular Items Sold",
    "start Date",
    "end Date",
];




export default function SalesReport() {
    
    const [formValues, setFormValues] = useState({
        Code: { value: '', type: 'text', readonly: false },
        Sale_Code: { value: '', type: 'text', readonly: false },
        Start_Date: { value: '', type: 'date', readonly: false },
        End_Date: { value: '', type: 'date', readonly: false },
        Supplier_Code: { value: '', type: 'text', readonly: false },
        Supplier_Name: { value: '', type: 'text', readonly: false },
        Manufacture: { value: '', type: 'text', readonly: false },
        Product_Name: { value: '', type: 'text', readonly: false },
    });
    



    return (
        <>
            <div className='flex flex-row container '>
                <div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row '>
                            <div className='flex flex-col h-[52rem]' style={{ backgroundColor: secondary_color }}>
                                <div className='flex flex-col'>

                                    <div className='flex flex-row'>

                                        <div className='py-6  left-0  w-[15%]' >                                     
                                            <SideReportNav />
                                        </div>


                                        <div className='flex flex-col  py-6 pr-6  w-[80%]'>

                                            <div className='flex flex-row justify-between'>

                                                <div className='p-2 flex '>
                                                    <h1 className='text-2xl font-bold p-6 '>Sales Report</h1>
                                                </div>

                                                <div className='p-2 flex '>
                                                   
                                                    <HeaderIcons/>

                                                </div>
                                            </div>

                                            <div className='grid grid-cols-2 ml-4 gap-3'>
                                                <FormItems
                                                    form={formValues}
                                                    setForm={setFormValues}
                                                    width={64}
                                                />
                                            </div>

                                            <div className='flex w-full items-center justify-between mb-5'>
                                                <div>
                                                    <Table th={th} tr={tr} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <footer>
                            <div className='h-[2.3rem] w-[100%]'></div>
                        </footer>
                    </div>
                </div>
            </div>


        </>

    )
}


