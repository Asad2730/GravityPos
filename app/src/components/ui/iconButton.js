import React from 'react';
import { primary_color } from '../../utils/colors';

export default function IconButton({ Icon, title, onClick ,size,width,height}) {
  
  const design = `flex flex-col items-center justify-center space-y-2 
  text-white font-bold py-2 px-4 rounded w-40  h-28 m-1`;

  return (
      <button 
       style={{backgroundColor:primary_color,width:width,height:height}}
       className={design}
         onClick={onClick}>
         <Icon size={size} /> 
        <span>{title}</span>
      </button>
  );
}
