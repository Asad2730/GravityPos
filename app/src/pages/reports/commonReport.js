import Table from '../../components/table/table';
import { FormItems } from '../../components/ui/formItem';
import HeaderIcons from '../../components/ui/headerIcons';


export default function CustomReport({title,formValues,setFormValues,th,tr}) {
 
    return (
        <>
           <div className='flex flex-col h-screen py-6 pr-6'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-2xl font-bold p-6'>{title}</h1>
                    <div className='p-2 flex'>
                        <HeaderIcons />
                    </div>
                </div>
                <div className='grid grid-cols-2 ml-4 gap-3'>
                    <FormItems
                        form={formValues}
                        setForm={setFormValues}
                        width={64}
                    />
                </div>

                <div className='w-auto overflow-auto max-w-screen-2xl mt-9'>
                    <Table th={th} tr={tr} />
                </div>
            </div>
        </>

    )
}



