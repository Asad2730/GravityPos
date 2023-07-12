import { secondary_color } from '../../../utils/colors';
import Table from '../../../components/table/table';
import { useState } from 'react';
import { FormItems } from '../../../components/ui/formItem';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { PiExportBold } from 'react-icons/pi';
import { HiPrinter } from 'react-icons/hi';
import IconButton from '../../../components/ui/iconButton';
import SideReportNav from '../../../components/navbar/reportNavBar';
import HeaderIcons from '../../../components/ui/headerIcons';





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
    "Stock ID",
    "Product ID",
    "Quantity in Stock",
    "Warehouse ID",
    "Last Replenishment Date",
    "Expected Replenishment Date",
];




export default function StockReport() {

    const [formValues, setFormValues] = useState({

        'Code': '',
        'Sale Code': '',
        'start Date': '',
        'end Date': '',
        'Supplier Code': '',
        'Supplier Name': '',
        'manufacture': '',
        'product Name': '',
    });



    return (
        <>
            <div className='flex flex-row'>
                <div className='w-auto'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row '>
                            <div className='flex flex-col h-[52rem] ' style={{ backgroundColor: secondary_color }}>
                                <div className='flex flex-col'>

                                    <div className='flex flex-row'>

                                        <div className='py-6  left-0 h-screen  w-64' style={{ background: secondary_color }}>
                                           
                                            <SideReportNav />
                                        </div>


                                        <div className='flex flex-col  py-6 pr-6'>

                                            <div className='flex flex-row justify-between'>

                                                <div className='p-2 flex '>
                                                    <h1 className='text-2xl font-bold p-6 '>Stock Report</h1>
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



