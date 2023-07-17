import { FormItems } from "../ui/formItem";
import { useState } from "react";
import { primary_color } from "../../utils/colors";

export default function HomeFooter() {

    const [formValues, setFormValues] = useState({
        'No of item': '',
        'Total Qty': '',
        'Add amount': '',
        'Total amount': '',
        'Total items': '',
        'Item disc': '',
        'Previous bal': '',
        'Paid amount': '',
        'Disc By%': '',
        'Disc By LS': '',
        'Balance': '',
    });


    return (
        <footer className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t
         border-blue-gray-50 py-6 text-center md:justify-between " style={{backgroundColor:primary_color}}>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                  
                        <div className='grid grid-cols-4  ml-4 gap-3'>
                            <FormItems
                                form={formValues}
                                setForm={setFormValues}
                            />
                        </div>
                   
                </li>
                <li>
                    <span className='text-white text-6xl font-bold'>000</span>
                    <span className='text-white text-3xl font-bold'>Items</span>

                </li>
            </ul>
        </footer>
    );
}

