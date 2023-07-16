import React from 'react';
import { primary_color } from '../../utils/colors';

export default function IconButton({ Icon, title, onClick ,size,height,direction}) {

  return (
      <button 
       style={{backgroundColor:primary_color,height:height}}
       className={ `flex flex-${direction} items-center justify-center  
       text-white font-bold py-2 px-4 rounded w-auto gap-1  h-auto m-1`}
         onClick={onClick}>
         <Icon size={size} /> 
        <span>{title}</span>
      </button>
  );
}
