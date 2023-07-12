import React from 'react'
import { primary_color } from '../../utils/colors';

function TableFields({tableheaders, tableRows}) {
  const Td = ({ value }) => (
    <td className="whitespace-nowrap p-4 text-sm text-gray-500">
      <span className='m-4'>
        {value}
      </span>
    </td>
  )

  return (
    <div className='h-52 '> 
      <table className="min-w-full divide-y bg-white">
        <thead className='sticky top-0'>
          <tr className="divide-x divide-gray-200">
            {tableheaders.map((i) => (
              <th scope="col"
                style={{
                  backgroundColor:primary_color 
                }}
                className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold sm:pl-0 w-full">
                <span className='text-white m-4 whitespace-nowrap'>
                  {i}
                </span>
              </th>    
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 h-16 S bg-white overflow-y-auto "> 
          {tableRows.map((row, index) => (
            <tr key={index} className="divide-x divide-gray-200">
              {Object.values(row).map((value, i) => (
                <Td key={i} value={value} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableFields;
