import React from 'react'
import { primary_color } from '../../utils/colors';



function TableFields({tableheaders,tableRows}) {

const Td = ({value})=>(
  <td className="whitespace-nowrap p-4 text-sm text-gray-500">
  <span className=' m-4'>
   {value}
  </span>
  </td>
)

  return (
    <>
        <table 
           className="min-w-full divide-y overflow-y-auto h-60 bg-white">
                <thead>
                  <tr className="divide-x divide-gray-200">
                   {
                    tableheaders.map((i)=>(
                    <th scope="col"
                      style={{
                        backgroundColor:primary_color 
                      }}
                      className="py-3.5 pl-4 pr-4 text-left text-sm  font-semibold sm:pl-0">
                        <span className='text-white m-4'>
                           {i} 
                        </span>
                    </th>    
                    ))
                   }           
                  </tr>
                </thead>
                <tbody  className="divide-y divide-gray-200 bg-white">
                  {tableRows.map((i) => (
                    <tr 
                     key={i.code} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                      <span className=' m-4'>
                         {i.code}
                      </span>
                      </td>
                       <Td value={i.ProductName}/>
                       <Td value={i.bonus}/>
                       <Td value={i.qty}/>
                       <Td value={i.batch}/>
                       <Td value={i.expiry}/>
                       <Td value={i.d}/>
                       <Td value={i.disc}/>
                       <Td value={i.price}/>
                       <Td value={i.amount}/>
                    </tr>
                  ))}
                </tbody>
              </table>
    </>
  )
}

export default TableFields;