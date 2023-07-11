import { secondary_color } from '../../utils/colors';
import SideNav from '../../components/navbar/sideNavBar';
import { reports_navigation_items } from '../../components/navbar/navBarItems';
import Table from '../../components/table/table';
import { useState } from 'react';
import { FormItems } from '../../components/ui/formItem';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { PiExportBold } from 'react-icons/pi';
import { HiPrinter } from 'react-icons/hi';
import IconButton from '../../components/ui/iconButton';

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


export default function SalesReport() {

    const [formValues, setFormValues] = useState({
        f1: '', f2: '', f3: '', f4: '',
    });



    return (
        <>
            <div className='flex flex-row' >
                <div className='w-auto'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <div className='w-screen flex flex-col h-full' style={{ backgroundColor: secondary_color }}>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row'>
                                        <div className='py-6  left-0 h-screen  w-64' style={{ background: secondary_color }}>
                                            <SideNav navigation={reports_navigation_items} />
                                        </div>

                                        <div className='py-6 pr-6 '>
                                            <div className='flex flex-row justify-between'>

                                                <div className='p-2 flex'>
                                                    <h1 className='text-2xl font-bold p-6 '>Sales Report</h1>
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
                                            <div className='grid grid-cols-2 ml-4'>
                                                <FormItems
                                                    form={formValues}
                                                    setForm={setFormValues} />
                                            </div>


                                            <div className="flex w-full items-center justify-between mb-5">
                                                <div className="">
                                                    <Table
                                                        th={th}
                                                        tr={tr}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer>
                            <div className='h-[2.3rem] w-full '></div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}
