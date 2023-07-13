import React, { useState } from 'react'
import { secondary_color } from '../../utils/colors';
import CustomDropDown from '../../components/ui/dropDown';
import SideNav from '../../components/navbar/sideNavBar';
import { purchase_navigation_items } from '../../components/navbar/navBarItems';
import CustomButton from '../../components/ui/button';
import { FormItems } from '../../components/ui/formItem';

export default function PurchaseAdjustment() {

   
   
    const [form1InitialValues, setForm1Values] = useState({
        Id: { value: '', type: 'text', readonly: false },
        Date: { value: '', type: 'date', readonly: true },
      });


      const [form2InitialValues, setForm2Values] = useState({
        Transaction_No: { value: '', type: 'text', readonly: false },
        Type: { value: '', type: 'text', readonly: false },
        Invoice_No: { value: '', type: 'text', readonly: false },
        Invoice_Date: { value: '', type: 'date', readonly: false },
        Supplier_Id: { value: '', type: 'text', readonly: false },
        Supplier_Name: { value: '', type: 'text', readonly: false },
        GRN: { value: '', type: 'text', readonly: false },
        Desc: { value: '', type: 'text', readonly: false },
        Refrence: { value: '', type: 'text', readonly: false },
        Bility: { value: '', type: 'text', readonly: false },
        Courier_Adda: { value: '', type: 'text', readonly: false },
        Remarks: { value: '', type: 'text', readonly: false },
      });
      

      const [form3InitialValues, setForm3Values] = useState({
        Code: { value: '', type: 'text', readonly: false },
        Name: { value: '', type: 'text', readonly: false },
        P_price: { value: '', type: 'number', readonly: false },
        Disc: { value: '', type: 'number', readonly: false },
        GST: { value: '', type: 'number', readonly: false },
        S_Price: { value: '', type: 'number', readonly: false },
        Batch: { value: '', type: 'text', readonly: false },
        Expiry: { value: '', type: 'date', readonly: false },
        Godown: { value: '', type: 'text', readonly: false },
        Packs: { value: '', type: 'number', readonly: false },
        Bonus: { value: '', type: 'number', readonly: false },
        Qty: { value: '', type: 'number', readonly: false },
        Amount: { value: '', type: 'number', readonly: false },
        Known_Qty: { value: '', type: 'number', readonly: false },
        RowId: { value: '', type: 'text', readonly: false },
        Godown_Id: { value: '', type: 'text', readonly: false },
        Replacement_Item: { value: '', type: 'text', readonly: false },
        Code_Name: { value: '', type: 'text', readonly: false },
        P_price1: { value: '', type: 'number', readonly: false },
        Disc1: { value: '', type: 'number', readonly: false },
        GST1: { value: '', type: 'number', readonly: false },
        S_price1: { value: '', type: 'number', readonly: false },
        Batch1: { value: '', type: 'text', readonly: false },
        Expiry1: { value: '', type: 'date', readonly: false },
        Godown1: { value: '', type: 'text', readonly: false },
        Pack1: { value: '', type: 'number', readonly: false },
        Bonus1: { value: '', type: 'number', readonly: false },
        Qty1: { value: '', type: 'number', readonly: false },
        S_price1: { value: '', type: 'number', readonly: false },
        Amount: { value: '', type: 'number', readonly: false },
        Loose_Purchase:{value:'',type:'checkbox',readonly:false}
      });
      

      const [form4InitialValues, setForm4Values] = useState({
        Courier_Adda: { value: '', type: 'text', readonly: false },
        FlatDisc: { value: '', type: 'number', readonly: false },
        ItemDisc: { value: '', type: 'number', readonly: false },
        TotalBonus: { value: '', type: 'number', readonly: false },
        TotalQty: { value: '', type: 'number', readonly: false },
        OtherChanges: { value: '', type: 'text', readonly: false },
        FlatGST: { value: '', type: 'number', readonly: false },
        ItemGST: { value: '', type: 'number', readonly: false },
        TotalItem: { value: '', type: 'number', readonly: false },
        Total_Of_Item: { value: '', type: 'number', readonly: false },
        NetPayable: { value: '', type: 'number', readonly: false },
      });

      const [form5InitialValues, setForm5Values] = useState({
        Courier_Adda_Changes: { value: '', type: 'text', readonly: false },
        FlatDisc: { value: '', type: 'number', readonly: false },
        ItemDisc: { value: '', type: 'number', readonly: false },
        TotalBonus: { value: '', type: 'number', readonly: false },
        TotalQty: { value: '', type: 'number', readonly: false },
        OtherChanges: { value: '', type: 'text', readonly: false },
        FlatGST: { value: '', type: 'number', readonly: false },
        ItemGST: { value: '', type: 'number', readonly: false },
        TotalItem: { value: '', type: 'number', readonly: false },
        Total_Of_Item: { value: '', type: 'number', readonly: false},
        NetPayable: { value: '', type: 'number', readonly: false },
      });
      
      

    return (
        <>
            <div className='flex flex-row' >
                <div className='w-auto'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <div className='w-screen flex flex-col h-full' style={{ backgroundColor: secondary_color }}>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='flex flex-row'>
                                        <div className='py-6' style={{ background: secondary_color }}>
                                            <SideNav navigation={purchase_navigation_items} />
                                        </div>
                                        <div className='flex flex-col  py-6 pr-6 '>
                                            <div className='flex flex-col ml-4'>
                                                {/* section-0 */}
                                                <div className='border-2 border-black p-5 rounded-xl justify-center items-center'>
                                                    <div className='grid grid-cols-2 gap-2'>
                                                        <FormItems
                                                          form={form1InitialValues} 
                                                          setForm={setForm1Values}
                                                          width={96}
                                                          />
                                                    </div>
                                                </div>

                                                {/* end-section-0 */}

                                                {/* start of section 1 */}

                                                <div className='border-2 border-black p-5  rounded-xl justify-center items-center mt-2'>                                          
                                                    <div className='grid grid-cols-2 gap-2'>
                                                        <FormItems
                                                          form={form2InitialValues} 
                                                          setForm={setForm2Values}
                                                          width={96}
                                                          />
                                                    </div>
                                               
                                                </div>
                                                {/* end of first section */}
                                                     
                                                     <div className='flex flex-row mt-6'>
                                                     <span className='ml-4'>Action</span>
                                                        <CustomDropDown  />
                                                     </div>

                                                {/* start of section 2 */}
                                                <div className='border-2 border-black p-5 rounded-xl mt-3 justify-center items-center'>
                                                   
                                                <div className='grid grid-cols-2 gap-2'>
                                                        <FormItems
                                                          form={form3InitialValues} 
                                                          setForm={setForm3Values}
                                                          width={96}
                                                          />
                                                    </div>
                                                </div>
                                                {/* end of section 2 */}


                                                {/* start of section 3 */}


                                                <div className='flex flex-row mt-6' >
                                                    <CustomButton label={'Calculate'} />
                                                </div>

                                                {/* end  of section 3 */}

                                                <div className='border-2 border-black p-5 rounded-xl mt-3 justify-center items-center'>
                                                    <h1 className='font-bold  text-lg gap-5 py-2'>Before</h1>
                                                    <div className='grid grid-cols-3 gap-2'>
                                                        <FormItems
                                                          form={form4InitialValues} 
                                                          setForm={setForm4Values}
                                                          width={18}
                                                          />
                                                    </div>
                                                </div>


                                                {/* final section */}

                                                <div className='border-2 border-black p-5 rounded-xl mt-3 justify-center items-center' >
                                                    <h1 className='font-bold  text-lg gap-5 py-2'>After</h1>
                                                    <div className='grid grid-cols-3 gap-2 '>
                                                        <FormItems
                                                          form={form5InitialValues} 
                                                          setForm={setForm5Values}
                                                          width={18}
                                                          />
                                                    </div>                                                
                                                </div>
                                                {/* end of final section */}
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
