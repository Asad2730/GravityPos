import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { primary_color } from '../../utils/colors';

export default function Table({ th, tr }) {

  const Td = ({ value }) => (
    <td className={'p-4 border-b border-blue-gray-50'}>
      <Typography variant="small" color="blue-gray" className="font-normal">
        {value}
      </Typography>
    </td>
  )


  return (
    <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {th.map((head) => (
              <th key={head} 
               className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
               style={{backgroundColor:primary_color}}>
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none opacity-100"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
      
           {tr.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <Td key={i} value={value} />
              ))}
            </tr>
          ))}
         
        </tbody>
      </table>
    </Card>
  );
}